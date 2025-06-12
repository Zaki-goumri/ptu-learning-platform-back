import { propertyKeyRegex } from './property-key-regex.js';
/**
 * @load ./filter-out-params.doc.md
 * @memberof module:flat
 * @param {FlattenParams} params
 * @param {string | Array<string>} properties
 * @returns {FlattenParams}
 */
const filterOutParams = (params, properties) => {
  const propertyArray = Array.isArray(properties) ? properties : [properties];
  return propertyArray.filter(propertyPath => !!propertyPath).reduce((globalFiltered, propertyPath) => {
    const regex = propertyKeyRegex(propertyPath);
    return Object.keys(globalFiltered).filter(key => !key.match(regex)).reduce((memo, key) => {
      memo[key] = params[key];
      return memo;
    }, {});
  }, params);
};
export { filterOutParams };