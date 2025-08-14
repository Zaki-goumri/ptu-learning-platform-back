import { LoggerService } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

export class LoggerBuilder {
  private jobName: string;

  setJobName(jobName: string) {
    this.jobName = jobName;
    return this;
  }

  build(): LoggerService {
    return WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
            winston.format.timestamp(),
            winston.format.printf(({ timestamp, level, message }) => {
              return `${timestamp as string} ${level}: ${message as string}`;
            }),
          ),
          level: process.env.LOG_LEVEL || 'info',
        }),
        new winston.transports.File({
          filename: 'logs/application.log',
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
          ),
          level: 'info',
        }),
        new winston.transports.File({
          filename: 'logs/error.log',
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
          ),
          level: 'error',
        }),
      ],
    });
  }
}
