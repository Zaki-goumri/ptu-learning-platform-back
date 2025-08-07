import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Room {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique identifier for the room (UUID)',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Computer Lab A',
    description: 'The name of the room',
  })
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ApiProperty({
    example: 30,
    description: 'The capacity of the room (number of students it can accommodate)',
  })
  @Column({ type: 'int' })
  capacity: number;

  @ApiProperty({
    example: true,
    description: 'Indicates if the room is currently available',
  })
  @Column({ type: 'boolean', default: true })
  isAvailable: boolean;

  @ApiProperty({
    example: '2024-01-15T08:30:00.000Z',
    description: 'Timestamp when the room was created',
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty({
    example: '2024-02-20T14:45:00.000Z',
    description: 'Timestamp when the room was last updated',
  })
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

} 