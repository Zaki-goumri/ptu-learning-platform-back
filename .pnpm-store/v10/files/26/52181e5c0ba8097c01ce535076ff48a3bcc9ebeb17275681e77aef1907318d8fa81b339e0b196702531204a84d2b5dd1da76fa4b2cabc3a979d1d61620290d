import ConfigurationError from '../../utils/errors/configuration-error.js';
const DEFAULT_DIRECTION = 'asc';
/**
 * Sets sort parameters for a list.
 *
 * @private
 *
 * @param {object}  query
 * @param {string}  [query.direction]   either `asc` or `desc`
 * @param {string}  [query.sortBy]      sort by field passed in query
 * @param {string}  firstPropertyName   property name which will be taken as a default
 * @param {ResourceOptions} resourceOptions={}  options passed along with given resource
 * @return {Sort}
 */
const sortSetter = ({
  direction,
  sortBy
} = {}, firstPropertyName, resourceOptions = {}) => {
  const options = resourceOptions.sort || {};
  if (resourceOptions && resourceOptions.sort && resourceOptions.sort.direction && !['asc', 'desc'].includes(resourceOptions.sort.direction)) {
    throw new ConfigurationError(`
    Sort direction should be either "asc" or "desc",
    "${resourceOptions.sort.direction} was given"`, 'global.html#ResourceOptions');
  }
  const computedDirection = direction || options.direction || DEFAULT_DIRECTION;
  const params = {
    direction: computedDirection === 'asc' ? 'asc' : 'desc',
    sortBy: sortBy || options.sortBy || firstPropertyName
  };
  return params;
};
sortSetter.DEFAULT_DIRECTION = DEFAULT_DIRECTION;
export { DEFAULT_DIRECTION };
export default sortSetter;