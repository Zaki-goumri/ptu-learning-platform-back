import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { UserAchievement } from './user-achievement.entity';

export enum AchievementRarity {
  COMMON = 'common',
  UNCOMMON = 'uncommon',
  RARE = 'rare',
  EPIC = 'epic',
  LEGENDARY = 'legendary',
}

@Entity()
export class Achievement {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique identifier for the achievement (UUID)',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'First Course Completion',
    description: 'The name of the achievement',
  })
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ApiProperty({
    example: 'Complete your first course successfully',
    description: 'Detailed description of the achievement',
  })
  @Column({ type: 'text' })
  description: string;

  @ApiProperty({
    example: 'common',
    description: 'The rarity level of the achievement',
    enum: AchievementRarity,
  })
  @Column({
    type: 'enum',
    enum: AchievementRarity,
    default: AchievementRarity.COMMON,
  })
  rarity: AchievementRarity;

  @ApiProperty({
    example: 100,
    description: 'Points awarded for earning this achievement',
  })
  @Column({ type: 'int', default: 0 })
  points: number;

  @ApiProperty({
    example: '2024-01-15T08:30:00.000Z',
    description: 'Timestamp when the achievement was created',
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty({
    example: '2024-02-20T14:45:00.000Z',
    description: 'Timestamp when the achievement was last updated',
  })
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @OneToMany(() => UserAchievement, (userAchievement) => userAchievement.achievement)
  userAchievements: UserAchievement[];
} 