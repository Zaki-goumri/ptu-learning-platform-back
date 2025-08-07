import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { Achievement } from './achievement.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserAchievementStatus {
  EARNED = 'earned',
  IN_PROGRESS = 'in-progress',
  LOCKED = 'locked',
}

@Entity()
export class UserAchievement {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique identifier for the user achievement record (UUID)',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 75,
    description: 'Progress percentage towards earning the achievement (0-100)',
  })
  @Column({ type: 'int', default: 0 })
  progress: number;

  @ApiProperty({
    example: 'in-progress',
    description: 'The status of the achievement for this user',
    enum: UserAchievementStatus,
  })
  @Column({
    type: 'enum',
    enum: UserAchievementStatus,
    default: UserAchievementStatus.LOCKED,
  })
  status: UserAchievementStatus;

  @ApiProperty({
    example: '2024-01-15T08:30:00.000Z',
    description: 'Timestamp when the user achievement record was created',
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty({
    example: '2024-02-20T14:45:00.000Z',
    description: 'Timestamp when the user achievement record was last updated',
  })
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'The user who has this achievement',
    type: () => User,
  })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ApiProperty({
    description: 'The achievement associated with this user',
    type: () => Achievement,
  })
  @ManyToOne(() => Achievement)
  @JoinColumn({ name: 'achievementId' })
  achievement: Achievement;
} 