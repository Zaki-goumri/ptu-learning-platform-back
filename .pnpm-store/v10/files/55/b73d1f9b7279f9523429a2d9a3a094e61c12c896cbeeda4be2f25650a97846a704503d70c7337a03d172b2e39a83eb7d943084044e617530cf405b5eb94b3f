import React from 'react';
import { TableCell } from '@adminjs/design-system';
import SortLink from '../sort-link.js';
import allowOverride from '../../../hoc/allow-override.js';
import { useTranslation } from '../../../hooks/index.js';
const PropertyHeader = props => {
  const {
    property,
    titleProperty,
    display
  } = props;
  const {
    translateProperty
  } = useTranslation();
  const isMain = property.propertyPath === titleProperty.propertyPath;
  return /*#__PURE__*/React.createElement(TableCell, {
    className: isMain ? 'main' : undefined,
    display: display
  }, property.isSortable ? /*#__PURE__*/React.createElement(SortLink, props) : translateProperty(property.label, property.resourceId));
};
const OverridablePropertyHeader = allowOverride(PropertyHeader, 'PropertyHeader');
export { OverridablePropertyHeader as default, OverridablePropertyHeader as PropertyHeader, PropertyHeader as OriginalPropertyHeader };