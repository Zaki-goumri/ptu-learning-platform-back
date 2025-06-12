import { ViewHelpers } from '../../../backend/utils/view-helpers/index.js';
const h = new ViewHelpers();
export const actionHref = (action, params) => {
  const actionName = action.name;
  if (!action.component && !action.hasHandler) {
    return null;
  }
  if (params.recordIds?.length) {
    params.recordIds = [...new Set(params.recordIds)];
  }
  const hrefMap = {
    record: () => h.recordActionUrl({
      ...params,
      actionName
    }),
    resource: () => h.resourceActionUrl({
      resourceId: params.resourceId,
      actionName,
      search: params.search
    }),
    bulk: () => h.bulkActionUrl({
      ...params,
      actionName
    })
  };
  if (hrefMap[action.actionType]) {
    return hrefMap[action.actionType]();
  }
  throw new Error('"actionType" should be either record, resource or bulk');
};