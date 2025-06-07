import { SetMetadata } from '@nestjs/common';
import { UserRole } from 'src/user/types/user-role.type';

export const ROLES_KEY = 'Roles';
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
