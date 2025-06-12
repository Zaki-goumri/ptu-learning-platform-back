import React from 'react';
import { Badge } from '@adminjs/design-system';
import { useTranslation } from '../../../hooks/index.js';
import mapValue from './map-value.js';
import allowOverride from '../../../hoc/allow-override.js';
const BooleanPropertyValue = props => {
  const {
    record,
    property,
    resource
  } = props;
  const {
    tl
  } = useTranslation();
  const rawValue = record?.params[property.path];
  if (typeof rawValue === 'undefined' || rawValue === '') {
    return null;
  }
  const base = mapValue(rawValue);
  const translation = tl(`${property.path}.${rawValue}`, resource.id, {
    defaultValue: base
  });
  return /*#__PURE__*/React.createElement(Badge, {
    outline: true,
    size: "sm"
  }, translation);
};
export default allowOverride(BooleanPropertyValue, 'BooleanPropertyValue');