import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SearchJobDataDto {
  @ApiProperty({ description: 'The index of the search operation' })
  @IsString()
  index: string;
  body: any;
}
