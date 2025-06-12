import ResourceDecorator from '../resource-decorator.js';
import AdminJS from '../../../../adminjs.js';
import { BaseResource } from '../../../adapters/index.js';
import { PropertyDecorator } from '../../property/index.js';
export type DecoratedProperties = {
    [key: string]: PropertyDecorator;
};
/**
 * Initializes PropertyDecorator for all properties within a resource. When
 * user passes new property in the options - it will be created as well.
 *
 * @returns {Object<string,PropertyDecorator>}
 * @private
 */
export declare function decorateProperties(resource: BaseResource, admin: AdminJS, decorator: ResourceDecorator): DecoratedProperties;
