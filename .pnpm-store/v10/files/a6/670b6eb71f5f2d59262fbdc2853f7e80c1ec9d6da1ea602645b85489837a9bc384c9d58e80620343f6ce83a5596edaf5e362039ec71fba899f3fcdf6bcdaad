import { BaseDatabase } from 'adminjs';
import { Resource } from './Resource.js';
export class Database extends BaseDatabase {
    dataSource;
    constructor(dataSource) {
        super(dataSource);
        this.dataSource = dataSource;
    }
    resources() {
        const resources = [];
        // eslint-disable-next-line no-restricted-syntax
        for (const entityMetadata of this.dataSource.entityMetadatas) {
            resources.push(new Resource(entityMetadata.target));
        }
        return resources;
    }
    static isAdapterFor(dataSource) {
        return !!dataSource.entityMetadatas;
    }
}
//# sourceMappingURL=Database.js.map