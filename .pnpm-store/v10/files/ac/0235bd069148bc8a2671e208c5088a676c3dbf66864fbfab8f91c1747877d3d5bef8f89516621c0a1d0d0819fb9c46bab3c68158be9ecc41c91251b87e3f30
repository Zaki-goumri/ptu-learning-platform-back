import { BaseProperty } from 'adminjs';
import { DATA_TYPES } from './utils/data-types.js';
export class Property extends BaseProperty {
    column;
    columnPosition;
    constructor(column, columnPosition = 0) {
        const path = column.propertyPath;
        super({ path });
        this.column = column;
        this.columnPosition = columnPosition;
    }
    isEditable() {
        return !this.column.isGenerated
            && !this.column.isCreateDate
            && !this.column.isUpdateDate;
    }
    isId() {
        return this.column.isPrimary;
    }
    isSortable() {
        return this.type() !== 'reference';
    }
    reference() {
        const ref = this.column.referencedColumn;
        if (ref)
            return ref.entityMetadata.name;
        return null;
    }
    availableValues() {
        const values = this.column.enum;
        if (values) {
            return values.map((val) => val.toString());
        }
        return null;
    }
    position() {
        return this.columnPosition || 0;
    }
    type() {
        let type = DATA_TYPES[this.column.type];
        if (typeof this.column.type === 'function') {
            if (this.column.type === Number) {
                type = 'number';
            }
            if (this.column.type === String) {
                type = 'string';
            }
            if (this.column.type === Date) {
                type = 'datetime';
            }
            if (this.column.type === Boolean) {
                type = 'boolean';
            }
        }
        if (this.reference()) {
            type = 'reference';
        }
        // eslint-disable-next-line no-console
        if (!type) {
            console.warn(`Unhandled type: ${this.column.type}`);
        }
        return type;
    }
    isArray() {
        return this.column.isArray;
    }
}
//# sourceMappingURL=Property.js.map