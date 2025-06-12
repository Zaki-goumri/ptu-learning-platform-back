import { useSelector } from 'react-redux';
/**
 * @load ./use-resource.doc.md
 * @subcategory Hooks
 * @class
 * @hideconstructor
 * @bundle
 * @param {string} resourceId    Id of a resource you want to get
 */
const useResource = resourceId => {
  const resources = useSelector(state => state.resources);
  const foundResource = resources.find(resource => resource.id === resourceId);
  return foundResource;
};
export { useResource as default, useResource };