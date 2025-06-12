import { AxiosResponse } from 'axios';
import { ActionResponse } from '../../../backend/index.js';
import { DifferentActionParams, useActionResponseHandler } from '../../hooks/index.js';
import { ActionJSON } from './action-json.interface.js';
export type CallApiFunction<K extends ActionResponse> = () => Promise<AxiosResponse<K>>;
export type BuildActionCallApiTriggerOptions = {
    action: ActionJSON;
    params: DifferentActionParams;
    actionResponseHandler: ReturnType<typeof useActionResponseHandler>;
    search?: Location['search'];
};
export declare const buildActionCallApiTrigger: <K extends ActionResponse>(options: BuildActionCallApiTriggerOptions) => CallApiFunction<K>;
