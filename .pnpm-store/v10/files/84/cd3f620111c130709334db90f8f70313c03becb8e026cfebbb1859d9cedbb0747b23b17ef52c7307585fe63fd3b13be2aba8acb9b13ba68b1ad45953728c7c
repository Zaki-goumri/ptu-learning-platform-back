import { ResourceJSON } from '../../../../frontend/interfaces/index.js';
import { ResourceOptions } from '../resource-options.interface.js';
import { BaseResource, SupportedDatabasesType } from '../../../adapters/index.js';
export type DatabaseData = {
    databaseName: BaseResource['databaseName'];
    databaseType: BaseResource['databaseType'];
};
export declare const DEFAULT_ICON = "Archive";
export declare const getIcon: (icon?: SupportedDatabasesType | string) => string;
export declare const getNavigation: (options: ResourceOptions, database: DatabaseData) => ResourceJSON['navigation'];
