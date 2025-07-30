import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Department {
  @ApiProperty({ example: 1, description: 'The unique identifier of the user' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'computer science',
    description: ' department is the major or speciality ',
  })
  @Column({ type: 'varchar', length: 20, unique: true })
  label: string;

  @ApiProperty({
    example: '2025-06-05T16:03:00Z',
    description: 'The creation timestamp of the user',
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty({
    example: '2025-06-05T16:03:00Z',
    description: 'The last update timestamp of the user',
  })
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
