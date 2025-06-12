function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyledNavigation } from "./navigation-styled.js";
import { NavigationElementWrapper } from "./navigation-element-wrapper.js";
import { Label } from "../../atoms/label/index.js";

/**
 * @load ./navigation.doc.md
 * @component
 * @subcategory Organisms
 * @hideconstructor
 * @see NavigationProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-organisms-navigation--default Storybook}
 * @new In version 3.3
 * @section design-system
 */
export const Navigation = props => {
  const {
    label,
    elements
  } = props;
  return /*#__PURE__*/React.createElement(StyledNavigation, {
    px: "xl",
    py: "lg"
  }, !!label?.length && /*#__PURE__*/React.createElement(Label, {
    pl: "lg",
    mb: "md",
    uppercase: true
  }, label), /*#__PURE__*/React.createElement("ul", null, elements.map((element, id) => /*#__PURE__*/React.createElement(NavigationElementWrapper, _extends({
    key: [id, element.href].join('-')
  }, element)))));
};
Navigation.displayName = 'Navigation';
export default Navigation;