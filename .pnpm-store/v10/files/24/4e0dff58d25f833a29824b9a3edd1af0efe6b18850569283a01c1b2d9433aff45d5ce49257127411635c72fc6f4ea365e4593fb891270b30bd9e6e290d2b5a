import { ApiClient } from '../../utils/index.js';
const api = new ApiClient();
export function callActionApi(action, params, search) {
  let promise;
  const {
    recordId,
    recordIds,
    resourceId
  } = params;

  /* Temporary workaround to avoid breaking changes.
    TODO: For v8 release, rewrite actions to support PUT & DELETE methods.
    Actions should have an option to configure a default method for action buttons. */
  let method = 'get';
  if (action.name === 'delete') {
    method = 'post';
  }
  switch (action.actionType) {
    case 'record':
      if (!recordId) {
        throw new Error('You have to specify "recordId" for record action');
      }
      promise = api.recordAction({
        resourceId,
        actionName: action.name,
        recordId,
        search,
        method
      });
      break;
    case 'resource':
      promise = api.resourceAction({
        resourceId,
        actionName: action.name,
        method
      });
      break;
    case 'bulk':
      if (!recordIds) {
        throw new Error('You have to specify "recordIds" for bulk action');
      }
      promise = api.bulkAction({
        resourceId,
        actionName: action.name,
        recordIds,
        search,
        method
      });
      break;
    default:
      throw new Error('"actionType" should be either record, resource or bulk');
  }
  return promise;
}