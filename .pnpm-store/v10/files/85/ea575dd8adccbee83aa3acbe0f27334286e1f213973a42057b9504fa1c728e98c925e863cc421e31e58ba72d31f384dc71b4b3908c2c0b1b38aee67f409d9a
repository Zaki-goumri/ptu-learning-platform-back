import { DELIMITER } from '../../../../utils/flat/constants.js';
export function convertToSubProperty(property, subProperty) {
  const [subPropertyPath] = subProperty.name.split(DELIMITER).slice(-1);
  return {
    ...subProperty,
    path: [property.path, subPropertyPath].join(DELIMITER)
  };
}