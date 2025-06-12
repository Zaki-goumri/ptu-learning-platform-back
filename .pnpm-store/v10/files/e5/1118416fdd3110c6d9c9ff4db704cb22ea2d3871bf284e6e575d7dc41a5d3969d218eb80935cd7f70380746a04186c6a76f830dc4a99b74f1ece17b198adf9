/* eslint-disable arrow-parens */

import { callActionApi } from './call-action-api.js';
export const buildActionCallApiTrigger = options => {
  const {
    action,
    params,
    actionResponseHandler,
    search
  } = options;
  const callApi = () => {
    const promise = callActionApi(action, params, search);
    promise.then(actionResponseHandler).catch(error => {
      throw error;
    });
    return promise;
  };
  return callApi;
};