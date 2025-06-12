import ResourceDecorator from '../resource-decorator.js';
import AdminJS from '../../../../adminjs.js';
import { BaseResource } from '../../../adapters/index.js';
import { ActionDecorator } from '../../action/index.js';
export type DecoratedActions = {
    [key: string]: ActionDecorator;
};
/**
 * Used to create an {@link ActionDecorator} based on both
 * {@link AdminJS.ACTIONS default actions} and actions specified by the user
 * via {@link AdminJSOptions}
 *
 * @returns {Record<string, ActionDecorator>}
 * @private
 */
export declare function decorateActions(resource: BaseResource, admin: AdminJS, decorator: ResourceDecorator): DecoratedActions;
