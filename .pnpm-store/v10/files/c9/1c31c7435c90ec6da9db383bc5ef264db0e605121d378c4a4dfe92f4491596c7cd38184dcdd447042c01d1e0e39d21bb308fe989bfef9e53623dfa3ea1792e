import React from 'react';
import { ValueGroup } from '@adminjs/design-system';
import ReferenceValue from './reference-value.js';
import allowOverride from '../../../hoc/allow-override.js';
import { useTranslation } from '../../../hooks/index.js';
const Show = props => {
  const {
    property,
    record
  } = props;
  const {
    translateProperty
  } = useTranslation();
  return /*#__PURE__*/React.createElement(ValueGroup, {
    label: translateProperty(property.label, property.resourceId)
  }, /*#__PURE__*/React.createElement(ReferenceValue, {
    property: property,
    record: record
  }));
};
export default allowOverride(Show, 'DefaultReferenceShowProperty');