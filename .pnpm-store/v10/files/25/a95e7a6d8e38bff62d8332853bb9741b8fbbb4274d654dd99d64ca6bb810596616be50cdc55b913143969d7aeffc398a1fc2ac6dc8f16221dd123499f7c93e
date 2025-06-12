function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Label } from '@adminjs/design-system';
import React from 'react';
import { PropertyDescription } from '../property-description/index.js';
import allowOverride from '../../../../hoc/allow-override.js';
import { useTranslation } from '../../../../hooks/index.js';
const PropertyLabel = props => {
  const {
    property,
    props: labelProps,
    filter = false
  } = props;
  const {
    translateProperty
  } = useTranslation();
  if (property.hideLabel) {
    return null;
  }
  return /*#__PURE__*/React.createElement(Label, _extends({
    htmlFor: filter ? ['filter', property.path].join('-') : property.path,
    required: !filter && property.isRequired
  }, labelProps), translateProperty(property.label, property.resourceId), property.description && /*#__PURE__*/React.createElement(PropertyDescription, {
    property: property
  }));
};
const OverridablePropertyLabel = allowOverride(PropertyLabel, 'PropertyLabel');
export { OverridablePropertyLabel as default, OverridablePropertyLabel as PropertyLabel };