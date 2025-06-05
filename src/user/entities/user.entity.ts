import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { USER_ROLES, UserRole } from '../types/user-role.type';
export const userRole = {
  ADMIN: 'ADMIN',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT',
} as const;

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  email!: string;

  @Column({ type: 'varchar', length: 100 })
  password!: string;
  @Column({ type: 'varchar', length: 100 })
  firstName!: string;

  @Column({ type: 'varchar', length: 100 })
  lastName!: string;

  @Column({ type: 'varchar', length: 20, unique: true })
  phoneNumber!: string;

  @Column({ type: 'enum', enum: USER_ROLES })
  role!: UserRole;

  @Column({ type: 'varchar', length: 100, nullable: true })
  department: string | null;

  @Column({ type: 'varchar', length: 50, nullable: true })
  yearGroup: string | null;
}
