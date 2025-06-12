import { ValueGroup } from '@adminjs/design-system';
import React from 'react';
import formatValue from './format-value.js';
import allowOverride from '../../../hoc/allow-override.js';
import { useTranslation } from '../../../hooks/index.js';
const Show = props => {
  const {
    property,
    record
  } = props;
  const value = `${record.params[property.path]}`;
  const {
    translateProperty
  } = useTranslation();
  return /*#__PURE__*/React.createElement(ValueGroup, {
    label: translateProperty(property.label, property.resourceId)
  }, formatValue(value, property.props));
};
export default allowOverride(Show, 'DefaultCurrencyShowProperty');