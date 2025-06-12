import { DELIMITER } from './constants.js';
import { convertParam } from './convert-param.js';
const convertNestedParam = (parentValue, subProperty) => {
  const path = subProperty.propertyPath.split(DELIMITER).slice(-1)[0];
  const {
    type = 'string'
  } = subProperty;
  let value = parentValue[path];
  if (type === 'mixed' && value) {
    const nestedSubProperties = subProperty.subProperties;
    for (const nestedSubProperty of nestedSubProperties) {
      if (subProperty.isArray) {
        value = [...value].map(element => convertNestedParam(element, nestedSubProperty));
      } else {
        value = convertNestedParam(value, nestedSubProperty);
      }
    }
  } else {
    value = convertParam(value, subProperty.type);
  }
  return {
    ...parentValue,
    [path]: value
  };
};
export { convertNestedParam };