import { PartialType } from '@nestjs/swagger';
import { CreateDepartementDto } from './create-departement.dto';

export class UpdateDepartementDto extends PartialType(CreateDepartementDto) {}
