import React from 'react';
import { ValueGroup } from '@adminjs/design-system';
import allowOverride from '../../../hoc/allow-override.js';
import mapValue from './map-value.js';
import { useTranslation } from '../../../hooks/index.js';
const Show = props => {
  const {
    property,
    record
  } = props;
  const {
    translateProperty
  } = useTranslation();
  const value = mapValue(record.params[property.path], property.type);
  return /*#__PURE__*/React.createElement(ValueGroup, {
    label: translateProperty(property.label, property.resourceId)
  }, value);
};
export default allowOverride(Show, 'DefaultDatetimeShowProperty');