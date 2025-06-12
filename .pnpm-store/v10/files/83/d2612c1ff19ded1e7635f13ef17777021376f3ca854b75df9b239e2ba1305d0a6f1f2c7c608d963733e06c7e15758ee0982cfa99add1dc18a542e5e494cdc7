import { flat } from '../../../utils/flat/index.js';
export const filterRecordParams = function (record, options = {}) {
  if (options.includeParams && record) {
    return {
      ...record,
      params: flat.selectParams(record.params || {}, options.includeParams)
    };
  }
  return record;
};
export const isPropertyPermitted = (propertyName, options = {}) => {
  const {
    includeParams
  } = options;
  if (includeParams) {
    const parts = flat.pathToParts(propertyName, {
      skipArrayIndexes: true
    });
    return parts.some(part => includeParams.includes(part));
  }
  return true;
};