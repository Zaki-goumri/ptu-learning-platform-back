function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Box, Label } from "../index.js";
const StoryWrapper = props => {
  const {
    label,
    children,
    gap = 16,
    ...other
  } = props;
  return /*#__PURE__*/React.createElement(Box, {
    variant: "grey"
  }, /*#__PURE__*/React.createElement(Label, null, label), /*#__PURE__*/React.createElement(Box, _extends({
    bg: "white",
    p: "xxl",
    width: 1,
    style: {
      gap
    }
  }, other), children));
};
export default StoryWrapper;