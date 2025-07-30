import { Injectable, BadRequestException } from '@nestjs/common';
import { FileValidator } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { CsvRowDto } from '../dto/requests/csv-row.dto';

@Injectable()
export class CsvValidationPipe extends FileValidator<Record<string, any>> {
  constructor() {
    super({});
  }

  async isValid(file: Express.Multer.File): Promise<boolean> {
    if (!file) {
      return false;
    }

    const requiredFields = ['email', 'firstName', 'lastName', 'phoneNumber', 'role'];
    const optionalFields = ['department', 'yearGroup','password'];

    const csvContent = file.buffer.toString('utf-8');
    const lines = csvContent.split('\n');
    const headers = lines[0].split(',').map(header => header.trim());

    const missingRequiredHeaders = requiredFields.filter(
      field => !headers.includes(field)
    );
    if (missingRequiredHeaders.length > 0) {
      throw new BadRequestException(
        `Missing required headers: ${missingRequiredHeaders.join(', ')}`
      );
    }

    const errors: string[] = [];
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue; 

      const values = lines[i].split(',').map(value => value.trim());
      const row: Record<string, string> = {};
      headers.forEach((header, index) => {
        row[header] = values[index] || '';
      });

      const rowDto = plainToClass(CsvRowDto, row);
      const validationErrors = await validate(rowDto);
      
      if (validationErrors.length > 0) {
        const rowErrors = validationErrors.map(error => {
          const constraints = Object.values(error.constraints || {});
          return `Row ${i}: ${constraints.join(', ')}`;
        });
        errors.push(...rowErrors);
      }
    }

    if (errors.length > 0) {
      throw new BadRequestException({
        message: 'CSV validation failed check the errors to fix them',
        errors,
      });
    }

    return true;
  }

  buildErrorMessage(): string {
    return 'CSV validation failed. Please ensure all required fields are present and valid.';
  }
} 