import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AchievementRarity, ACHIEVEMENT_RARITY_VALUES } from '../types/achievement-rarity.type';

@Entity()
export class Achievement {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique identifier for the achievement (UUID)',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'First Quiz Master',
    description: 'The name of the achievement',
  })
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ApiProperty({
    example: 'Complete your first quiz with a perfect score',
    description: 'The description of the achievement',
  })
  @Column({ type: 'text' })
  description: string;

  @ApiProperty({
    example: 'rare',
    description: 'The rarity level of the achievement',
    enum: ACHIEVEMENT_RARITY_VALUES,
  })
  @Column({ type: 'enum', enum: ACHIEVEMENT_RARITY_VALUES })
  rarity: AchievementRarity;

  @ApiProperty({
    example: 100,
    description: 'The points awarded for this achievement',
  })
  @Column({ type: 'int' })
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
} 