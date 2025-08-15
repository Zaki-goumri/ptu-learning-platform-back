import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  HttpCode,
  HttpStatus,
  Request,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
  ApiTooManyRequestsResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { SubmitQuizDto } from './dto/submit-quiz.dto';
import { GradeSubmissionDto } from './dto/grade-submission.dto';
import { Quiz } from './entities/quiz.entity';
import { Grade } from './entities/grade.entity';
import { QuizSubmission } from './entities/quiz-submission.entity';
import { AccessTokenGuard } from 'src/auth/guards/access-token.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { USER_ROLES } from 'src/user/types/user-role.type';
import { extendedReq } from 'src/auth/types/request-with-user.type';
import {
  PaginationQueryDto,
  PaginatedResponseDto,
} from 'src/common/dtos/pagination.dto';
import { SWAGGER_DESC } from 'src/common/constants/swagger.constants';
/*
 * quiz and grades endpoints
 */

@ApiTags('Quiz & Grades')
@Controller()
@UseGuards(AccessTokenGuard, RoleGuard)
@ApiBearerAuth()
@ApiTooManyRequestsResponse({ description: SWAGGER_DESC.TOO_MANY_REQUESTS })
@ApiNotFoundResponse({ description: 'quiz with id ${id} not found' })
@ApiInternalServerErrorResponse({
  description: SWAGGER_DESC.INTERNAL_SERVER_ERROR,
})
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'find quizzes by course',
    description: 'find all quizzes for a specific course',
  })
  @ApiResponse({
    status: 200,
    description: 'find quizzes by course',
    type: [Quiz],
  })
  @ApiParam({ name: 'courseId', description: 'id of the course' })
  @Get('courses/:courseId/quizzes')
  async findQuizzesByCourse(
    @Param('courseId') courseId: string,
  ): Promise<Quiz[]> {
    return await this.quizService.findQuizzesByCourse(courseId);
  }

  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'create quiz',
    description: 'create a new quiz for a specific course',
  })
  @ApiResponse({
    status: 201,
    description: 'quiz created successfully',
    type: Quiz,
  })
  @ApiParam({ name: 'courseId', description: 'id of the course' })
  @Roles(USER_ROLES.TEACHER)
  @Post('courses/:courseId/quizzes')
  async createQuiz(
    @Param('courseId') courseId: string,
    @Body() createQuizDto: CreateQuizDto,
  ): Promise<Quiz> {
    return await this.quizService.create(courseId, createQuizDto);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'find quiz by id',
    description: 'find a quiz by his id which is passed in Param',
  })
  @ApiResponse({
    status: 200,
    description: 'find quiz by id',
    type: Quiz,
  })
  @ApiParam({ name: 'id', description: 'id of the quiz that i wanna find' })
  @Get('quizzes/:id')
  async findOne(@Param('id') id: string): Promise<Quiz> {
    return await this.quizService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'submit quiz',
    description: 'submit answers for a quiz and get grade',
  })
  @ApiResponse({
    status: 200,
    description: 'quiz submitted successfully',
    type: Grade,
  })
  @ApiParam({ name: 'id', description: 'id of the quiz to submit' })
  @Roles(USER_ROLES.STUDENT)
  @Post('quizzes/:id/submit')
  async submitQuiz(
    @Param('id') quizId: string,
    @Body() submitQuizDto: SubmitQuizDto,
    @Request() req: extendedReq,
  ): Promise<Grade> {
    return await this.quizService.submitQuiz(
      quizId,
      req.user.id,
      submitQuizDto,
    );
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'find grades',
    description: 'find grades for student (self) or teacher (for course)',
  })
  @ApiResponse({
    status: 200,
    description: 'find grades',
    type: [Grade],
  })
  @Roles(USER_ROLES.STUDENT, USER_ROLES.TEACHER)
  @Get('grades')
  async findGrades(@Request() req: extendedReq): Promise<Grade[]> {
    return await this.quizService.findGrades(req.user.id, req.user.role);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'find submissions for grading',
    description: 'find all ungraded submissions for teacher to grade',
  })
  @ApiResponse({
    status: 200,
    description: 'find submissions for grading',
    type: PaginatedResponseDto,
  })
  @Roles(USER_ROLES.TEACHER)
  @Get('submissions/ungraded')
  async findSubmissionsForGrading(
    @Query() paginationQuery: PaginationQueryDto,
    @Request() req: extendedReq,
  ): Promise<PaginatedResponseDto<QuizSubmission>> {
    return await this.quizService.findSubmissionsForGrading(
      paginationQuery,
      req.user.id,
    );
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'find submission by id',
    description: 'find a submission by his id which is passed in Param',
  })
  @ApiResponse({
    status: 200,
    description: 'find submission by id',
    type: QuizSubmission,
  })
  @ApiParam({
    name: 'id',
    description: 'id of the submission that i wanna find',
  })
  @Roles(USER_ROLES.TEACHER)
  @Get('submissions/:id')
  async findSubmissionById(
    @Param('id') id: string,
    @Request() req: extendedReq,
  ): Promise<QuizSubmission> {
    return await this.quizService.findSubmissionById(id, req.user.id);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'grade submission',
    description: 'grade a submission with points and feedback',
  })
  @ApiResponse({
    status: 200,
    description: 'submission graded successfully',
    type: QuizSubmission,
  })
  @ApiParam({ name: 'id', description: 'id of the submission to grade' })
  @Roles(USER_ROLES.TEACHER)
  @Post('submissions/:id/grade')
  async gradeSubmission(
    @Param('id') id: string,
    @Body() gradeSubmissionDto: GradeSubmissionDto,
    @Request() req: extendedReq,
  ): Promise<QuizSubmission> {
    return await this.quizService.gradeSubmission(
      id,
      req.user.id,
      gradeSubmissionDto,
    );
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'get submission grade',
    description: 'get graded submission with feedback for student',
  })
  @ApiResponse({
    status: 200,
    description: 'get submission grade',
    type: QuizSubmission,
  })
  @ApiParam({ name: 'id', description: 'id of the submission to get grade' })
  @Roles(USER_ROLES.STUDENT)
  @Get('submissions/:id/view-grade')
  async getSubmissionGrade(
    @Param('id') id: string,
    @Request() req: extendedReq,
  ): Promise<QuizSubmission> {
    return await this.quizService.getSubmissionGrade(id, req.user.id);
  }
}
