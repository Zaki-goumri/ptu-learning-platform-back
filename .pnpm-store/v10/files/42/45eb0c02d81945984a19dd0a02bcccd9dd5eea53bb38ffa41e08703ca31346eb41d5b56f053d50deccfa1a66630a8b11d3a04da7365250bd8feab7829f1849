import React from 'react';
import { ValueGroup } from '@adminjs/design-system';
import DefaultPropertyValue from '../default-type/default-property-value.js';
import allowOverride from '../../../hoc/allow-override.js';
import { useTranslation } from '../../../hooks/index.js';
const Show = props => {
  const {
    property
  } = props;
  const {
    translateProperty
  } = useTranslation();
  return /*#__PURE__*/React.createElement(ValueGroup, {
    label: translateProperty(property.label, property.resourceId)
  }, /*#__PURE__*/React.createElement(DefaultPropertyValue, props));
};
export default allowOverride(Show, 'DefaultPhoneShowProperty');