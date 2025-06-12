import { Box, Icon, Tooltip } from '@adminjs/design-system';
import React from 'react';
import allowOverride from '../../../../hoc/allow-override.js';
import { useTranslation } from '../../../../hooks/index.js';
const PropertyDescription = props => {
  const {
    property
  } = props;
  const {
    tm
  } = useTranslation();
  if (!property.description) {
    return null;
  }
  const direction = property.custom?.tooltipDirection || 'top';
  const translatedDescription = tm(property.description, property.resourceId);
  return /*#__PURE__*/React.createElement(Box, {
    mx: "sm",
    display: "inline-flex"
  }, /*#__PURE__*/React.createElement(Tooltip, {
    direction: direction,
    title: translatedDescription,
    size: "lg"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Icon, {
    icon: "HelpCircle",
    color: "info"
  }))));
};
const OverridablePropertyDescription = allowOverride(PropertyDescription, 'PropertyDescription');
export { OverridablePropertyDescription as default, OverridablePropertyDescription as PropertyDescription };