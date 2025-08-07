import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuizQuestion } from './entities/quiz-question.entity';
import { Grade } from './entities/grade.entity';
import { QuizSubmission } from './entities/quiz-submission.entity';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { SubmitQuizDto, QuizAnswerDto } from './dto/submit-quiz.dto';
import { GradeSubmissionDto } from './dto/grade-submission.dto';
import { User } from 'src/user/entities/user.entity';
import { Course } from 'src/courses/entities/course.entity';
import { USER_ROLES } from 'src/user/types/user-role.type';
import { QUESTION_TYPE } from './types/question-type.type';
import {
  PaginationQueryDto,
  PaginatedResponseDto,
} from 'src/common/dtos/pagination.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
    @InjectRepository(QuizQuestion)
    private readonly questionRepository: Repository<QuizQuestion>,
    @InjectRepository(Grade)
    private readonly gradeRepository: Repository<Grade>,
    @InjectRepository(QuizSubmission)
    private readonly submissionRepository: Repository<QuizSubmission>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async findQuizzesByCourse(courseId: string): Promise<Quiz[]> {
    return await this.quizRepository.find({
      where: { course: { id: courseId } },
      relations: ['course'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Quiz> {
    const quiz = await this.quizRepository.findOne({
      where: { id },
      relations: ['course', 'questions'],
    });

    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }

    return quiz;
  }

  async create(courseId: string, createQuizDto: CreateQuizDto): Promise<Quiz> {
    const course = await this.courseRepository.findOne({
      where: { id: courseId },
    });

    if (!course) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }

    const quiz = this.quizRepository.create({
      ...createQuizDto,
      course,
    });

    const savedQuiz = await this.quizRepository.save(quiz);

    // Create questions
    for (const questionDto of createQuizDto.questions) {
      const question = this.questionRepository.create({
        ...questionDto,
        quiz: savedQuiz,
        points: questionDto.points || 1,
      });
      await this.questionRepository.save(question);
    }

    return await this.findOne(savedQuiz.id);
  }

  async submitQuiz(
    quizId: string,
    userId: string,
    submitQuizDto: SubmitQuizDto,
  ): Promise<Grade> {
    const quiz = await this.findOne(quizId);
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    // Check if quiz is still open
    if (new Date() > quiz.dueDate) {
      throw new ForbiddenException('Quiz submission deadline has passed');
    }

    // Check if user already submitted
    const existingGrade = await this.gradeRepository.findOne({
      where: { quiz: { id: quizId }, student: { id: userId } },
    });

    if (existingGrade) {
      throw new ForbiddenException('Quiz already submitted');
    }

    // Calculate score
    const questions = await this.questionRepository.find({
      where: { quiz: { id: quizId } },
      order: { createdAt: 'ASC' },
    });

    let totalPoints = 0;
    let earnedPoints = 0;

    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const answer = submitQuizDto.answers[i];
      
      if (!answer) continue;

      totalPoints += question.points;
      
      // Store submissions for manual grading
      if (question.type === QUESTION_TYPE.ESSAY || question.type === QUESTION_TYPE.SHORT_ANSWER) {
        if (answer.textAnswer) {
          await this.submissionRepository.save(
            this.submissionRepository.create({
              answer: answer.textAnswer,
              student: user,
              quiz,
              question,
              points: 0, // Will be updated after manual grading
              isGraded: false,
            })
          );
        }
      } else {
        earnedPoints += this.calculateQuestionScore(question, answer);
      }
    }

    const score = totalPoints > 0 ? (earnedPoints / totalPoints) * 100 : 0;

    // Create grade
    const grade = this.gradeRepository.create({
      score,
      student: user,
      course: quiz.course,
      quiz,
    });

    return await this.gradeRepository.save(grade);
  }

  async findSubmissionsForGrading(
    paginationQuery: PaginationQueryDto,
    teacherId: string,
  ): Promise<PaginatedResponseDto<QuizSubmission>> {
    const { page = 1, limit = 10 } = paginationQuery;
    const skip = (page - 1) * limit;

    const [submissions, total] = await this.submissionRepository.findAndCount({
      where: { 
        isGraded: false,
        quiz: { course: { teacher: { id: teacherId } } }
      },
      relations: ['student', 'quiz', 'question'],
      skip,
      take: limit,
      order: { createdAt: 'ASC' },
    });

    return new PaginatedResponseDto(submissions, total, page, limit);
  }

  async findSubmissionById(id: string, teacherId: string): Promise<QuizSubmission> {
    const submission = await this.submissionRepository.findOne({
      where: { 
        id,
        quiz: { course: { teacher: { id: teacherId } } }
      },
      relations: ['student', 'quiz', 'question'],
    });

    if (!submission) {
      throw new NotFoundException(`Submission with ID ${id} not found`);
    }

    return submission;
  }

  async gradeSubmission(
    id: string,
    teacherId: string,
    gradeSubmissionDto: GradeSubmissionDto,
  ): Promise<QuizSubmission> {
    const submission = await this.findSubmissionById(id, teacherId);
    const teacher = await this.userRepository.findOne({
      where: { id: teacherId },
    });

    if (!teacher) {
      throw new NotFoundException(`Teacher with ID ${teacherId} not found`);
    }

    // Validate points don't exceed question max points
    if (gradeSubmissionDto.points > submission.question.points) {
      throw new ForbiddenException(`Points cannot exceed question maximum of ${submission.question.points}`);
    }

    // Update submission
    submission.points = gradeSubmissionDto.points;
    submission.feedback = gradeSubmissionDto.feedback;
    submission.isGraded = true;
    submission.gradedBy = teacher;

    const updatedSubmission = await this.submissionRepository.save(submission);

    // Update the student's grade
    await this.updateStudentGrade(submission.student.id, submission.quiz.id);

    return updatedSubmission;
  }

  async getSubmissionGrade(id: string, studentId: string): Promise<QuizSubmission> {
    const submission = await this.submissionRepository.findOne({
      where: { 
        id,
        student: { id: studentId }
      },
      relations: ['student', 'quiz', 'question', 'gradedBy'],
    });

    if (!submission) {
      throw new NotFoundException(`Submission with ID ${id} not found`);
    }

    return submission;
  }

  private async updateStudentGrade(studentId: string, quizId: string): Promise<void> {
    // Get all submissions for this student and quiz
    const submissions = await this.submissionRepository.find({
      where: { 
        student: { id: studentId },
        quiz: { id: quizId }
      },
      relations: ['question'],
    });

    // Get all questions for this quiz
    const questions = await this.questionRepository.find({
      where: { quiz: { id: quizId } },
    });

    let totalPoints = 0;
    let earnedPoints = 0;

    // Calculate total possible points
    for (const question of questions) {
      totalPoints += question.points;
    }

    // Calculate earned points from submissions
    for (const submission of submissions) {
      earnedPoints += submission.points;
    }

    // Update the grade
    const grade = await this.gradeRepository.findOne({
      where: { 
        student: { id: studentId },
        quiz: { id: quizId }
      },
    });

    if (grade) {
      grade.score = totalPoints > 0 ? (earnedPoints / totalPoints) * 100 : 0;
      await this.gradeRepository.save(grade);
    }
  }

  private calculateQuestionScore(question: QuizQuestion, answer: QuizAnswerDto): number {
    switch (question.type) {
      case QUESTION_TYPE.MULTIPLE_CHOICE:
        return this.scoreMultipleChoice(question, answer);
      case QUESTION_TYPE.MULTIPLE_SELECT:
        return this.scoreMultipleSelect(question, answer);
      case QUESTION_TYPE.TRUE_FALSE:
        return this.scoreTrueFalse(question, answer);
      case QUESTION_TYPE.SHORT_ANSWER:
        return this.scoreShortAnswer(question, answer);
      case QUESTION_TYPE.ESSAY:
        return this.scoreEssay(question, answer);
      default:
        return 0;
    }
  }

  private scoreMultipleChoice(question: QuizQuestion, answer: QuizAnswerDto): number {
    if (answer.selectedAnswer === question.correctAnswer) {
      return question.points;
    }
    return 0;
  }

  private scoreMultipleSelect(question: QuizQuestion, answer: QuizAnswerDto): number {
    if (!answer.selectedAnswers || !question.correctAnswers) return 0;
    
    const correctAnswers = new Set(question.correctAnswers);
    const selectedAnswers = new Set(answer.selectedAnswers);
    
    // Check if all correct answers are selected and no incorrect answers
    const allCorrectSelected = question.correctAnswers.every(ans => selectedAnswers.has(ans));
    const noIncorrectSelected = answer.selectedAnswers.every(ans => correctAnswers.has(ans));
    
    if (allCorrectSelected && noIncorrectSelected) {
      return question.points;
    }
    return 0;
  }

  private scoreTrueFalse(question: QuizQuestion, answer: QuizAnswerDto): number {
    if (answer.booleanAnswer === question.correctBooleanAnswer) {
      return question.points;
    }
    return 0;
  }

  private scoreShortAnswer(question: QuizQuestion, answer: QuizAnswerDto): number {
    if (!answer.textAnswer || !question.correctTextAnswer) return 0;
    
    const studentAnswer = answer.textAnswer.trim().toLowerCase();
    const correctAnswer = question.correctTextAnswer.trim().toLowerCase();
    
    if (studentAnswer === correctAnswer) {
      return question.points;
    }
    return 0;
  }

  private scoreEssay(question: QuizQuestion, answer: QuizAnswerDto): number {
    // For essay questions, we return 0 as they need manual grading
    // In a real system, we might want to store the answer for later manual review
    return 0;
  }

  async findGrades(userId: string, userRole: string, courseId?: string): Promise<Grade[]> {
    if (userRole === USER_ROLES.STUDENT) {
      // Student can only see their own grades
      return await this.gradeRepository.find({
        where: { student: { id: userId } },
        relations: ['course', 'quiz'],
        order: { createdAt: 'DESC' },
      });
    } else if (userRole === USER_ROLES.TEACHER) {
      // Teacher can see grades for their courses
      const whereCondition: any = { course: { teacher: { id: userId } } };
      if (courseId) {
        whereCondition.course = { id: courseId };
      }

      return await this.gradeRepository.find({
        where: whereCondition,
        relations: ['student', 'course', 'quiz'],
        order: { createdAt: 'DESC' },
      });
    }

    throw new ForbiddenException('Insufficient permissions to view grades');
  }
} 