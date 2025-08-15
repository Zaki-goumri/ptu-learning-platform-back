import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class BulkSignupDto {
  @ApiProperty({ required: false, default: false, description: 'Skip users with duplicate emails or phone numbers' })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  skipDuplicates?: boolean = false;

  @ApiProperty({ required: false, default: false, description: 'Send welcome email to new users' })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  welcomeEmail?: boolean = false;

  @ApiProperty({ required: false, default: false, description: 'Generate temporary password for users without one' })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  temporaryPassword?: boolean = false;
}
