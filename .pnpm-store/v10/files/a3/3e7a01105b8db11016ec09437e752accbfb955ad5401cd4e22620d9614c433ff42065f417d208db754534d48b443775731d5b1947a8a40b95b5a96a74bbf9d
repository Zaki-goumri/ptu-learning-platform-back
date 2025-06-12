function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { BUTTON_IN_GROUP_CLASS_NAME, StyledButtonGroup } from "./button-group.styled.js";
import { ButtonInGroup } from "./button-in-group.js";

/**
 * @load ./button-group.doc.md
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-button-group--default Storybook}
 * @component
 * @subcategory Organisms
 * @section design-system
 * @new in version 3.3
 */
export const ButtonGroup = props => {
  const {
    buttons,
    size,
    rounded
  } = props;
  if (!buttons || !buttons.length) {
    return null;
  }
  return /*#__PURE__*/React.createElement(StyledButtonGroup, props, buttons.map((button, i) => /*#__PURE__*/React.createElement(ButtonInGroup, _extends({
    key: `${button.label || ''}-${i}`,
    size: size,
    rounded: rounded
  }, button, {
    className: BUTTON_IN_GROUP_CLASS_NAME
  }))));
};
ButtonGroup.displayName = 'ButtonGroup';
export default ButtonGroup;