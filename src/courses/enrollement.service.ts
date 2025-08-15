import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Enrollment } from './entities/enrollment.entity';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from 'src/common/dtos/pagination.dto';
import { PaginatedEnorllementResponse } from './types/paginatio-enrollement';
import { EnrollmentStatus } from './types/enrollment-status.type';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(Enrollment)
    private readonly enrollementRepo: Repository<Enrollment>,
  ) {}

  async create(courseId: string, studentId: string) {
    const enrollment = this.enrollementRepo.create({
      course: { id: courseId },
      student: { id: studentId },
    });
    return await this.enrollementRepo.save(enrollment);
  }
  async update(status: EnrollmentStatus, enrollmentId: string) {
    return await this.enrollementRepo.update({ id: enrollmentId }, { status });
  }
  async findOne(id: string) {
    const enrollment = await this.enrollementRepo.findOne({
      where: { id },
      relations: ['student', 'course'],
    });
    if (!enrollment) throw new NotFoundException('enrollment not found');
    return enrollment;
  }
  async findMany(paginationDto: PaginationQueryDto) {
    const { page = 1, limit = 10 } = paginationDto;
    const [data, total] = await this.enrollementRepo.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: ['student', 'course'],
    });
    return new PaginatedEnorllementResponse(data, total, page, limit);
  }
  async remove(enrollmentId: string): Promise<boolean> {
    const result = await this.enrollementRepo.delete({ id: enrollmentId });
    if (result.affected === 0) {
      throw new NotFoundException(`Enrollment with ID ${enrollmentId} not found`);
    }
    return true;
  }
}
