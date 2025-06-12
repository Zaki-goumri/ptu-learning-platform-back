import React from 'react';
import mapValue from './map-value.js';
import allowOverride from '../../../hoc/allow-override.js';
const List = props => {
  const {
    property,
    record
  } = props;
  const value = mapValue(record.params[property.path], property.type);
  return /*#__PURE__*/React.createElement("span", null, value);
};
export default allowOverride(List, 'DefaultDatetimeListProperty');