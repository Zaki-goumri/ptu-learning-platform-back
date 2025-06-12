function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { DropDown, DropDownMenu, DropDownTrigger } from "../../molecules/drop-down/index.js";
import { SingleButtonInGroup } from "./single-button-in-group.js";
import { DropDownItemWithButtons } from "./drop-down-item-with-buttons.js";
export const ButtonInGroup = props => {
  const {
    buttons,
    className,
    ...buttonProps
  } = props;
  if (buttons && buttons.length) {
    return /*#__PURE__*/React.createElement(DropDown, {
      stick: "right",
      className: className
    }, /*#__PURE__*/React.createElement(DropDownTrigger, null, /*#__PURE__*/React.createElement(SingleButtonInGroup, props)), /*#__PURE__*/React.createElement(DropDownMenu, null, buttons.map(button => /*#__PURE__*/React.createElement(DropDownItemWithButtons, _extends({}, button, {
      key: `${button.label}-${button.icon}`
    })))));
  }
  return /*#__PURE__*/React.createElement(SingleButtonInGroup, _extends({}, buttonProps, {
    className: className
  }));
};
ButtonInGroup.displayName = 'ButtonInGroup';
export default ButtonInGroup;