import { DataSource } from 'typeorm';
import { BaseDatabase } from 'adminjs';
import { Resource } from './Resource.js';
export declare class Database extends BaseDatabase {
    readonly dataSource: DataSource;
    constructor(dataSource: DataSource);
    resources(): Array<Resource>;
    static isAdapterFor(dataSource: DataSource): boolean;
}
