import { Injectable } from '@nestjs/common';
import csv from 'csv-parser';
import { Readable } from 'stream';

@Injectable()
export class CsvParserService {
  async parseCsv<T>(csvString: string): Promise<T[]> {
    return new Promise((resolve, reject) => {
      try {
        const results: T[] = [];
        Readable.from(csvString)
          .pipe(csv())
          .on('data', (data: T) => {
            results.push(data);
          })
          .on('end', () => {
            resolve(results);
          });
      } catch (error: unknown) {
        console.error('Error parsing CSV file:', error);
        reject(new Error('Error parsing CSV file'));
      }
    });
  }
}
