import { IApp } from './app.type';
import { Idb } from './db.type';
import { IRedis } from './redis.interface';
import { IJwt } from './jwt.type';
import { ISearch } from './search.type';
export interface IConfig {
  app: IApp;
  db: Idb;
  redis: IRedis;
  jwt: IJwt;
  elasticSearch: ISearch;
}
