import { NavigateFunction, Location } from 'react-router';
import { DifferentActionParams, useActionResponseHandler } from '../../hooks/index.js';
import { ActionJSON } from './action-json.interface.js';
import { TranslateFunctions } from '../../../utils/index.js';
import { ModalFunctions } from '../modal.interface.js';
export type BuildActionClickOptions = {
    action: ActionJSON;
    params: DifferentActionParams;
    actionResponseHandler: ReturnType<typeof useActionResponseHandler>;
    navigate: NavigateFunction;
    translateFunctions: TranslateFunctions;
    modalFunctions: ModalFunctions;
    location?: Location;
};
export type BuildActionClickReturn = (event: any) => any | Promise<any>;
export declare const buildActionClickHandler: (options: BuildActionClickOptions) => BuildActionClickReturn;
