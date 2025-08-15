import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsObject } from 'class-validator';

export class SearchJobDataDto {
  @ApiProperty({ description: 'The index name' })
  @IsString()
  index: string;

  @ApiProperty({ description: 'Document ID', required: false })
  @IsOptional()
  @IsString()
  id?: string;

  @ApiProperty({ description: 'Document body' })
  @IsOptional()
  @IsObject()
  document?: any;
}
