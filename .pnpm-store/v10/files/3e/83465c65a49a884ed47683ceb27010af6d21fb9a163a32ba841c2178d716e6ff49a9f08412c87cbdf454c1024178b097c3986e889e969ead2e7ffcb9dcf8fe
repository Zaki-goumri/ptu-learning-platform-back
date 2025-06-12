function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { NavigationElement } from "../../molecules/navigation-element/index.js";
export const NavigationElementWrapper = props => {
  const {
    elements,
    isOpen
  } = props;
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(NavigationElement, props), elements?.length && isOpen ? /*#__PURE__*/React.createElement("ul", null, elements.map((element, id) => /*#__PURE__*/React.createElement(NavigationElementWrapper, _extends({}, element, {
    key: [id, element.href].join('-')
  })))) : '');
};
NavigationElementWrapper.displayName = 'NavigationElementWrapper';
export default NavigationElementWrapper;