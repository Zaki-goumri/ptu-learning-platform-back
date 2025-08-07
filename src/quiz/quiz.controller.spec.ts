import { Test, TestingModule } from '@nestjs/testing';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

describe('QuizController', () => {
  let controller: QuizController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizController],
      providers: [
        {
          provide: QuizService,
          useValue: {
            findQuizzesByCourse: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            submitQuiz: jest.fn(),
            findGrades: jest.fn(),
            findSubmissionsForGrading: jest.fn(),
            findSubmissionById: jest.fn(),
            gradeSubmission: jest.fn(),
            getSubmissionGrade: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<QuizController>(QuizController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have findQuizzesByCourse method', () => {
    expect(controller.findQuizzesByCourse).toBeDefined();
  });

  it('should have createQuiz method', () => {
    expect(controller.createQuiz).toBeDefined();
  });

  it('should have findOne method', () => {
    expect(controller.findOne).toBeDefined();
  });

  it('should have submitQuiz method', () => {
    expect(controller.submitQuiz).toBeDefined();
  });

  it('should have findGrades method', () => {
    expect(controller.findGrades).toBeDefined();
  });

  it('should have findSubmissionsForGrading method', () => {
    expect(controller.findSubmissionsForGrading).toBeDefined();
  });

  it('should have findSubmissionById method', () => {
    expect(controller.findSubmissionById).toBeDefined();
  });

  it('should have gradeSubmission method', () => {
    expect(controller.gradeSubmission).toBeDefined();
  });

  it('should have getSubmissionGrade method', () => {
    expect(controller.getSubmissionGrade).toBeDefined();
  });
}); 