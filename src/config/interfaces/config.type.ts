import { Idb } from './db.type';
import { IRedis } from './redis.interface';
import { IJwt } from './jwt.type';
import { ISearch } from './search.type';
export interface IConfig {
  db: Idb;
  redis: IRedis;
  jwt: IJwt;
  elasticSearch: ISearch;
}
