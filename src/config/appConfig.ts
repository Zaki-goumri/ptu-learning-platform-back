import { IConfig } from './interfaces/config.type';
export default (): IConfig => {
  return {
    db: {
      type: 'postgres' as const,
      host: process.env.DB_HOST || '',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME || '',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || '',
      synchronize: process.env.NODE_ENV !== 'production',
      logging: process.env.NODE_ENV === 'development',
      logger: 'advanced-console',
    },
  };
};
