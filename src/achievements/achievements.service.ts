import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Achievement } from './entities';
import { UserAchievement } from './entities';
import { USER_ACHIEVEMENT_STATUS } from './types/user-achievement-status.type';
import {
  PaginationQueryDto,
  PaginatedResponseDto,
} from 'src/common/dtos/pagination.dto';

@Injectable()
export class AchievementsService {
  constructor(
    @InjectRepository(Achievement)
    private readonly achievementRepository: Repository<Achievement>,
    @InjectRepository(UserAchievement)
    private readonly userAchievementRepository: Repository<UserAchievement>,
  ) {}

  async findAll(
    paginationQuery: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<Achievement>> {
    const { page = 1, limit = 10 } = paginationQuery;
    const skip = (page - 1) * limit;

    const [achievements, total] = await this.achievementRepository.findAndCount(
      {
        skip,
        take: limit,
        order: { rarity: 'ASC', points: 'DESC', name: 'ASC' },
      },
    );

    return new PaginatedResponseDto(achievements, total, page, limit);
  }

  async findUserAchievements(
    userId: string,
    paginationQuery: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<UserAchievement>> {
    const { page = 1, limit = 10 } = paginationQuery;
    const skip = (page - 1) * limit;

    const [userAchievements, total] =
      await this.userAchievementRepository.findAndCount({
        where: { user: { id: userId } },
        relations: ['achievement', 'user'],
        skip,
        take: limit,
        order: { createdAt: 'DESC' },
      });

    if (!userAchievements.length) {
      // If no user achievements found, return all achievements with locked status
      const [allAchievements, totalAchievements] =
        await this.achievementRepository.findAndCount({
          skip,
          take: limit,
          order: { rarity: 'ASC', points: 'DESC', name: 'ASC' },
        });

      const lockedAchievements = allAchievements.map((achievement) => {
        const userAchievement = new UserAchievement();
        userAchievement.achievement = achievement;
        userAchievement.progress = 0;
        userAchievement.status = USER_ACHIEVEMENT_STATUS.LOCKED;
        return userAchievement;
      });

      return new PaginatedResponseDto(
        lockedAchievements,
        totalAchievements,
        page,
        limit,
      );
    }

    return new PaginatedResponseDto(userAchievements, total, page, limit);
  }

  async findOne(id: string): Promise<Achievement> {
    const achievement = await this.achievementRepository.findOne({
      where: { id },
    });

    if (!achievement) {
      throw new NotFoundException(`Achievement with ID ${id} not found`);
    }

    return achievement;
  }
}

