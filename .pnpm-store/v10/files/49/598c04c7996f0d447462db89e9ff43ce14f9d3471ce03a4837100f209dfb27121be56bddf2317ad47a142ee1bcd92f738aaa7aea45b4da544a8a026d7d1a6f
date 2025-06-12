function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { DrawerContent } from '@adminjs/design-system';
import React from 'react';
import allowOverride from '../../hoc/allow-override.js';
import { getActionElementCss } from '../../utils/index.js';
import ActionHeader from '../app/action-header/action-header.js';
import BasePropertyComponent from '../property-type/index.js';
import LayoutElementRenderer from './utils/layout-element-renderer.js';

/**
 * @name ShowAction
 * @category Actions
 * @description Shows a given record.
 * @component
 * @private
 */
const Show = props => {
  const {
    resource,
    record,
    action
  } = props;
  const properties = resource.showProperties;
  const contentTag = getActionElementCss(resource.id, action.name, 'drawer-content');
  return /*#__PURE__*/React.createElement(DrawerContent, {
    "data-css": contentTag
  }, action?.showInDrawer ? /*#__PURE__*/React.createElement(ActionHeader, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/React.createElement(LayoutElementRenderer
  // eslint-disable-next-line react/no-array-index-key
  , _extends({
    key: i,
    layoutElement: layoutElement
  }, props, {
    where: "show"
  }))) : properties.map(property => /*#__PURE__*/React.createElement(BasePropertyComponent, {
    key: property.propertyPath,
    where: "show",
    property: property,
    resource: resource,
    record: record
  })));
};
const OverridableShow = allowOverride(Show, 'DefaultShowAction');
export { OverridableShow as default, OverridableShow as Show, Show as OriginalShow };