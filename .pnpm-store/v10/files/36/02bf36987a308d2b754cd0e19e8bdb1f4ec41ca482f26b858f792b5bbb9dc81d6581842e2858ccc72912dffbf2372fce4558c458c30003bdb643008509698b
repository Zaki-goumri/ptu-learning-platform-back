function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import * as DesignSystem from '@adminjs/design-system';
import BasePropertyComponent from '../../property-type/index.js';
export const LayoutElementRenderer = props => {
  const {
    layoutElement,
    resource,
    where,
    record,
    onChange
  } = props;
  const {
    props: layoutProps,
    properties: propertyNames,
    layoutElements: innerLayoutElements,
    component
  } = layoutElement;
  const {
    children,
    ...other
  } = layoutProps;
  const properties = propertyNames.map(name => resource.properties[name]);
  const Component = DesignSystem[component];
  if (!Component) {
    return /*#__PURE__*/React.createElement(DesignSystem.MessageBox, {
      size: "sm",
      message: "Javascript Error",
      variant: "danger",
      py: "xl"
    }, "There is no component by the name of", /*#__PURE__*/React.createElement(DesignSystem.Badge, {
      size: "sm",
      variant: "danger",
      mx: "default"
    }, component), "in @adminjs/design-system. Change", /*#__PURE__*/React.createElement(DesignSystem.Badge, {
      size: "sm",
      variant: "danger",
      mx: "default"
    }, `@${component}`), "to available component like @Header");
  }
  return /*#__PURE__*/React.createElement(Component, other, properties.map(property => /*#__PURE__*/React.createElement(DesignSystem.Box, {
    flexGrow: 1,
    key: property.propertyPath
  }, /*#__PURE__*/React.createElement(BasePropertyComponent, {
    key: property.propertyPath,
    where: where,
    property: property,
    resource: resource,
    record: record,
    onChange: onChange
  }))), innerLayoutElements.map((innerLayoutElement, i) => /*#__PURE__*/React.createElement(LayoutElementRenderer, _extends({}, props, {
    // eslint-disable-next-line react/no-array-index-key
    key: i,
    layoutElement: innerLayoutElement
  }))), children);
};
export default LayoutElementRenderer;