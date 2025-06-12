import { propertyKeyRegex } from './property-key-regex.js';
/**
 * @load ./select-params.doc.md
 * @memberof module:flat
 * @param {FlattenParams} params
 * @param {string | Array<string>} properties
 * @param {GetOptions} [options]
 * @returns {FlattenParams}
 */
const selectParams = (params, properties, options) => {
  const propertyArray = Array.isArray(properties) ? properties : [properties];
  const selected = propertyArray.filter(propertyPath => !!propertyPath).reduce((globalMemo, propertyPath) => {
    const regex = propertyKeyRegex(propertyPath, options);
    const filtered = Object.keys(params)
    // filter all keys which starts with property path
    .filter(key => key.match(regex)).reduce((memo, key) => {
      memo[key] = params[key];
      return memo;
    }, {});
    return {
      ...globalMemo,
      ...filtered
    };
  }, {});
  return selected;
};
export { selectParams };