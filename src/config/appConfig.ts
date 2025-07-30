import { IConfig } from './interfaces/config.type';
export default (): IConfig => {
  return {
    db: {
      type: 'postgres' as const,
      host: process.env.DB_HOST || '',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'postgres',
      synchronize: process.env.NODE_ENV !== 'production',
      logging: process.env.NODE_ENV === 'development',
      logger: 'advanced-console',
    },
    redis: {
      url: process.env.REDIS_URL || 'redis://redis:6379',
      host: process.env.REDIS_HOST || 'redis',
      port: parseInt(process.env.REDIS_PORT || '6379'),
    },
    jwt: {
      secret: process.env.JWT_SECRET || '',
    },
  };
};
