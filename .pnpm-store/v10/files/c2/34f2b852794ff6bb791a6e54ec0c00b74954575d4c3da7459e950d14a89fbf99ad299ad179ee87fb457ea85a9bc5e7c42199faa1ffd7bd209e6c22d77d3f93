/* eslint-disable no-param-reassign */
import { BaseRecord, BaseResource, flat, ValidationError } from 'adminjs';
import { In } from 'typeorm';
import { Property } from './Property.js';
import { convertFilter } from './utils/filter/filter.converter.js';
import safeParseNumber from './utils/safe-parse-number.js';
export class Resource extends BaseResource {
    static validate;
    model;
    propsObject = {};
    constructor(model) {
        super(model);
        this.model = model;
        this.propsObject = this.prepareProps();
    }
    databaseName() {
        return this.model.getRepository().metadata.connection.options.database || 'typeorm';
    }
    databaseType() {
        return this.model.getRepository().metadata.connection.options.type || 'typeorm';
    }
    name() {
        return this.model.name;
    }
    id() {
        return this.model.name;
    }
    idName() {
        return this.model.getRepository().metadata.primaryColumns[0].propertyName;
    }
    properties() {
        return [...Object.values(this.propsObject)];
    }
    property(path) {
        return this.propsObject[path];
    }
    async count(filter) {
        return this.model.count(({
            where: convertFilter(filter),
        }));
    }
    async find(filter, 
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    params) {
        const { limit = 10, offset = 0, sort = {} } = params;
        const { direction, sortBy } = sort;
        const instances = await this.model.find({
            where: convertFilter(filter),
            take: limit,
            skip: offset,
            order: {
                [sortBy]: (direction || 'asc').toUpperCase(),
            },
        });
        return instances.map((instance) => new BaseRecord(instance, this));
    }
    async findOne(id) {
        const reference = {};
        reference[this.idName()] = id;
        const instance = await this.model.findOneBy(reference);
        if (!instance) {
            return null;
        }
        return new BaseRecord(instance, this);
    }
    async findMany(ids) {
        const reference = {};
        reference[this.idName()] = In(ids);
        const instances = await this.model.findBy(reference);
        return instances.map((instance) => new BaseRecord(instance, this));
    }
    async create(params) {
        const unflattenedParams = flat.unflatten(this.prepareParams(params));
        const instance = this.model.create(unflattenedParams);
        await this.validateAndSave(instance);
        return instance;
    }
    async update(pk, params = {}) {
        const reference = {};
        reference[this.idName()] = pk;
        const instance = await this.model.findOneBy(reference);
        if (instance) {
            const preparedParams = flat.unflatten(this.prepareParams(params));
            Object.keys(preparedParams).forEach((paramName) => {
                instance[paramName] = preparedParams[paramName];
            });
            await this.validateAndSave(instance);
            return instance;
        }
        throw new Error('Instance not found.');
    }
    async delete(pk) {
        const reference = {};
        reference[this.idName()] = pk;
        try {
            const instance = await this.model.findOneBy(reference);
            if (instance) {
                await instance.remove();
            }
        }
        catch (error) {
            if (error.name === 'QueryFailedError') {
                throw new ValidationError({}, {
                    type: 'QueryFailedError',
                    message: error.message,
                });
            }
            throw error;
        }
    }
    prepareProps() {
        const { columns } = this.model.getRepository().metadata;
        return columns.reduce((memo, col, index) => {
            const property = new Property(col, index);
            return {
                ...memo,
                [property.path()]: property,
            };
        }, {});
    }
    /** Converts params from string to final type */
    prepareParams(params) {
        const preparedParams = { ...params };
        this.properties().forEach((property) => {
            const param = flat.get(preparedParams, property.path());
            const key = property.path();
            // eslint-disable-next-line no-continue
            if (param === undefined) {
                return;
            }
            const type = property.type();
            if (type === 'mixed') {
                preparedParams[key] = param;
            }
            if (type === 'number') {
                if (property.isArray()) {
                    preparedParams[key] = param ? param.map((p) => safeParseNumber(p)) : param;
                }
                else {
                    preparedParams[key] = safeParseNumber(param);
                }
            }
            if (type === 'reference') {
                if (param === null) {
                    preparedParams[property.column.propertyName] = null;
                }
                else {
                    const [ref, foreignKey] = property.column.propertyPath.split('.');
                    const id = (property.column.type === Number) ? Number(param) : param;
                    preparedParams[ref] = foreignKey ? {
                        [foreignKey]: id,
                    } : id;
                }
            }
        });
        return preparedParams;
    }
    // eslint-disable-next-line class-methods-use-this
    async validateAndSave(instance) {
        if (Resource.validate) {
            const errors = await Resource.validate(instance);
            if (errors && errors.length) {
                const validationErrors = errors.reduce((memo, error) => ({
                    ...memo,
                    [error.property]: {
                        type: Object.keys(error.constraints)[0],
                        message: Object.values(error.constraints)[0],
                    },
                }), {});
                throw new ValidationError(validationErrors);
            }
        }
        try {
            await instance.save();
        }
        catch (error) {
            if (error.name === 'QueryFailedError') {
                throw new ValidationError({
                    [error.column]: {
                        type: 'QueryFailedError',
                        message: error.message,
                    },
                });
            }
        }
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static isAdapterFor(rawResource) {
        try {
            return !!rawResource.getRepository().metadata;
        }
        catch (e) {
            return false;
        }
    }
}
//# sourceMappingURL=Resource.js.map