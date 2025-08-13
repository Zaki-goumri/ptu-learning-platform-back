import { LoggerService } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as WinstonLogstash from 'winston-logstash';

export class LoggerBuilder {
  private jobName: string;

  setJobName(jobName: string) {
    this.jobName = jobName;
    return this;
  }

  build(): LoggerService {
    return WinstonModule.createLogger({
      transports: [
        new WinstonLogstash({
          port: parseInt(process.env.LOGSTASH_PORT ?? '5000', 10),
          host: process.env.LOGSTASH_HOST ?? 'localhost',
          protocol: 'tcp',
          max_connect_retries: -1,
          node_name: this.jobName || 'nestjs-app',
        }),
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
            winston.format.timestamp(),
            winston.format.printf(({ timestamp, level, message }) => {
              return `${timestamp} ${level}: ${message}`;
            }),
          ),
          level: process.env.LOG_LEVEL || 'info',
        }),
      ],
    });
  }
}
