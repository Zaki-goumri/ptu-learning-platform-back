import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuizService } from './quiz.service';
import { Quiz } from './entities/quiz.entity';
import { QuizQuestion } from './entities/quiz-question.entity';
import { Grade } from './entities/grade.entity';
import { QuizSubmission } from './entities/quiz-submission.entity';
import { User } from 'src/user/entities/user.entity';
import { Course } from 'src/courses/entities/course.entity';

describe('QuizService', () => {
  let service: QuizService;
  let quizRepository: Repository<Quiz>;
  let questionRepository: Repository<QuizQuestion>;
  let gradeRepository: Repository<Grade>;
  let submissionRepository: Repository<QuizSubmission>;
  let userRepository: Repository<User>;
  let courseRepository: Repository<Course>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QuizService,
        {
          provide: getRepositoryToken(Quiz),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(QuizQuestion),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Grade),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(QuizSubmission),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Course),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<QuizService>(QuizService);
    quizRepository = module.get<Repository<Quiz>>(getRepositoryToken(Quiz));
    questionRepository = module.get<Repository<QuizQuestion>>(getRepositoryToken(QuizQuestion));
    gradeRepository = module.get<Repository<Grade>>(getRepositoryToken(Grade));
    submissionRepository = module.get<Repository<QuizSubmission>>(getRepositoryToken(QuizSubmission));
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
    courseRepository = module.get<Repository<Course>>(getRepositoryToken(Course));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have findQuizzesByCourse method', () => {
    expect(service.findQuizzesByCourse).toBeDefined();
  });

  it('should have findOne method', () => {
    expect(service.findOne).toBeDefined();
  });

  it('should have create method', () => {
    expect(service.create).toBeDefined();
  });

  it('should have submitQuiz method', () => {
    expect(service.submitQuiz).toBeDefined();
  });

  it('should have findGrades method', () => {
    expect(service.findGrades).toBeDefined();
  });

  it('should have findSubmissionsForGrading method', () => {
    expect(service.findSubmissionsForGrading).toBeDefined();
  });

  it('should have findSubmissionById method', () => {
    expect(service.findSubmissionById).toBeDefined();
  });

  it('should have gradeSubmission method', () => {
    expect(service.gradeSubmission).toBeDefined();
  });

  it('should have getSubmissionGrade method', () => {
    expect(service.getSubmissionGrade).toBeDefined();
  });
}); 