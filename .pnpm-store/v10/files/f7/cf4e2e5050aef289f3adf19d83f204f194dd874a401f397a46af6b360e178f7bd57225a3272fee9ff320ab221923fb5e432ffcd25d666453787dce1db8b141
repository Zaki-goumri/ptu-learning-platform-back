function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useMemo } from 'react';
import { BasePropertyComponent } from './base-property-component.js';
/**
 * This component is the same as `BasePropertyComponent` but it will not render
 * custom components. Use this in your custom components to render the default
 * property component.
 *
 * This is useful if you want your custom component to appear custom only for
 * specific `where` value and default for all others.
 */
const CleanPropertyComponent = props => {
  const {
    property
  } = props;
  const cleanProperty = useMemo(() => ({
    ...property,
    components: {}
  }), [property]);
  return /*#__PURE__*/React.createElement(BasePropertyComponent, _extends({}, props, {
    property: cleanProperty
  }));
};
export default CleanPropertyComponent;