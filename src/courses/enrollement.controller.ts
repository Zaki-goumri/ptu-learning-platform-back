import {
  Controller,
  Body,
  Param,
  Patch,
  Get,
  Query,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { EnrollmentService } from './enrollement.service';
import { PaginationQueryDto } from 'src/common/dtos/pagination.dto';
import { EnrollmentStatus } from './types/enrollment-status.type';

@ApiNotFoundResponse({ description: 'Enrollment not found' })
@ApiInternalServerErrorResponse({ description: 'Internal server error' })
@Controller('enrollments')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Update enrollment status',
    description: 'Update the status of an enrollment by ID.',
  })
  @ApiOkResponse({ description: 'Enrollment status updated successfully.' })
  @ApiParam({ name: 'id', description: 'ID of the enrollment to update.' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body('status') status: EnrollmentStatus,
  ) {
    return this.enrollmentService.update(status, id);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get enrollment by ID',
    description: 'Retrieve an enrollment by its ID.',
  })
  @ApiOkResponse({ description: 'Enrollment retrieved successfully.' })
  @ApiParam({ name: 'id', description: 'ID of the enrollment to retrieve.' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.enrollmentService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'List enrollments',
    description: 'List enrollments with pagination.',
  })
  @ApiOkResponse({ description: 'Enrollments listed successfully.' })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination.',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of items per page.',
  })
  @Get()
  async findMany(@Query() paginationDto: PaginationQueryDto) {
    return this.enrollmentService.findMany(paginationDto);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Delete enrollment',
    description: 'Delete an enrollment by its ID.',
  })
  @ApiOkResponse({ description: 'Enrollment deleted successfully.' })
  @ApiParam({ name: 'id', description: 'ID of the enrollment to delete.' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.enrollmentService.remove(id);
  }
}
