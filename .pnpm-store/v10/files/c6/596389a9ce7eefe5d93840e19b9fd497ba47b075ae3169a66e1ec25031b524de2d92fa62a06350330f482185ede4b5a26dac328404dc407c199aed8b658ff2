import React from 'react';
import { ActionResponse } from '../../../../backend/actions/action.interface.js';
import { ActionJSON } from '../../../interfaces/index.js';
/**
 * @alias ActionButtonProps
 * @memberof ActionButton
 */
export type ActionButtonProps = {
    /** Action to which button should redirect */
    action: ActionJSON;
    /** Id of a resource of an action */
    resourceId: string;
    /** Optional recordId for _record_ action */
    recordId?: string;
    /** Optional recordIds for _bulk_ action */
    recordIds?: Array<string>;
    /** optional callback function which will be triggered when action is performed */
    actionPerformed?: (action: ActionResponse) => any;
    children?: React.ReactNode;
    search?: string;
    queryParams?: Record<string, unknown>;
};
/**
 * Renders Button which redirects to given action
 *
 * ### Usage
 *
 * ```
 * import { ActionButton } from 'adminjs'
 * ```
 *
 * @component
 * @subcategory Application
 */
declare const ActionButton: React.FC<ActionButtonProps>;
declare const OverridableActionButton: React.ComponentType<ActionButtonProps & {
    /** Optional recordId for _record_ action */
    OriginalComponent?: React.ComponentType<ActionButtonProps> | undefined;
}>;
export { OverridableActionButton as default, OverridableActionButton as ActionButton, ActionButton as OriginalActionButton, };
