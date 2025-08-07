import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendance } from './entities/attendance.entity';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import {
  PaginationQueryDto,
  PaginatedResponseDto,
} from 'src/common/dtos/pagination.dto';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(Attendance)
    private readonly attendanceRepository: Repository<Attendance>,
  ) {}

  async create(createAttendanceDto: CreateAttendanceDto): Promise<Attendance> {
    const attendance = this.attendanceRepository.create(createAttendanceDto);
    return await this.attendanceRepository.save(attendance);
  }

  async findAllByCourse(
    courseId: string,
    paginationQuery: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<Attendance>> {
    const { page = 1, limit = 10 } = paginationQuery;
    const skip = (page - 1) * limit;

    const [attendanceRecords, total] =
      await this.attendanceRepository.findAndCount({
        where: { course: { id: courseId } },
        relations: ['course', 'student'],
        skip,
        take: limit,
        order: { date: 'DESC', createdAt: 'DESC' },
      });

    return new PaginatedResponseDto(attendanceRecords, total, page, limit);
  }

  async findOne(id: string): Promise<Attendance> {
    const attendance = await this.attendanceRepository.findOne({
      where: { id },
      relations: ['course', 'student'],
    });

    if (!attendance) {
      throw new NotFoundException(`Attendance record with ID ${id} not found`);
    }

    return attendance;
  }

  async update(
    id: string,
    updateAttendanceDto: UpdateAttendanceDto,
  ): Promise<Attendance> {
    const attendance = await this.findOne(id);

    Object.assign(attendance, updateAttendanceDto);

    return await this.attendanceRepository.save(attendance);
  }

  async remove(id: string): Promise<void> {
    const attendance = await this.findOne(id);
    await this.attendanceRepository.remove(attendance);
  }
}

