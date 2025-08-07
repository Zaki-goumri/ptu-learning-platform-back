import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from './entities/session.entity';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Course } from 'src/courses/entities/course.entity';
import { User } from 'src/user/entities/user.entity';
import { Room } from './entities';
import { USER_ROLES } from 'src/user/types/user-role.type';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
    @InjectRepository(Course)
    private readonly courseRepo: Repository<Course>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Room)
    private readonly roomRepo: Repository<Room>,
  ) {}

  async getWeeklySchedule(): Promise<{ day: string; sessions: Session[] }[]> {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const result: { day: string; sessions: Session[] }[] = [];

    for (const day of days) {
      const sessions = await this.sessionRepository.find({
        where: { day },
        relations: ['course', 'teacher', 'room'],
        order: { startTime: 'ASC' },
      });

      result.push({ day, sessions });
    }

    return result;
  }

  async findOne(id: string): Promise<Session> {
    const session = await this.sessionRepository.findOne({
      where: { id },
      relations: ['course', 'teacher', 'room'],
    });

    if (!session) {
      throw new NotFoundException(`Session with ID ${id} not found`);
    }

    return session;
  }
  async update(
    id: string,
    updateSessionDto: UpdateSessionDto,
  ): Promise<Session> {
    const session = await this.findOne(id);

    Object.assign(session, updateSessionDto);

    return await this.sessionRepository.save(session);
  }

  async remove(id: string): Promise<void> {
    const session = await this.findOne(id);
    await this.sessionRepository.remove(session);
  }

  async generateAutomaticSchedule(): Promise<Session[]> {
    const courses = await this.courseRepo.find();

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const timeSlots = [
      { start: '08:00', end: '10:00' },
      { start: '10:00', end: '12:00' },
      { start: '13:00', end: '15:00' },
      { start: '15:00', end: '17:00' },
    ];

    const sessions: Session[] = [];

    for (const course of courses) {
      for (const day of days) {
        for (const slot of timeSlots) {
          const availableRoom = await this.findAvailableRoom(
            day,
            slot.start,
            slot.end,
          );
          const availableTeacher = await this.findAvailableTeacher(
            day,
            slot.start,
            slot.end,
          );

          if (availableRoom && availableTeacher) {
            const session = this.sessionRepository.create({
              course,
              teacher: availableTeacher,
              room: availableRoom,
              day,
              startTime: slot.start,
              endTime: slot.end,
            });

            await this.sessionRepository.save(session);
            sessions.push(session);
            break;
          }
        }
      }
    }

    return sessions;
  }
  private async findAvailableRoom(
    day: string,
    startTime: string,
    endTime: string,
  ): Promise<Room | null> {
    const rooms = await this.roomRepo.find();

    for (const room of rooms) {
      const conflict = await this.sessionRepository.findOne({
        where: {
          day,
          room: { id: room.id },
          startTime,
          endTime,
        },
      });
      if (!conflict) return room;
    }

    return null;
  }

  private async findAvailableTeacher(
    day: string,
    startTime: string,
    endTime: string,
  ): Promise<User | null> {
    const teachers = await this.userRepo.find({
      where: { role: USER_ROLES.TEACHER },
    });

    for (const teacher of teachers) {
      const conflict = await this.sessionRepository.findOne({
        where: {
          day,
          teacher: { id: teacher.id },
          startTime,
          endTime,
        },
      });
      if (!conflict) return teacher;
    }

    return null;
  }
}

