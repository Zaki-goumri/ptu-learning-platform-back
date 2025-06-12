function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Box } from "../../atoms/box/index.js";
import { Button } from "../../atoms/button/index.js";
import { Icon } from "../../atoms/icon/index.js";
import { Label } from "../../atoms/label/index.js";
import { Text } from "../../atoms/text/index.js";
import { H5 } from "../../atoms/typography/index.js";
import { ModalStyled } from "./modal-styled.js";

/**
 * Modal which can be rendered inline instead of a "modal"
 *
 * @memberof Modal
 * @component
 * @hideconstructor
 * @private
 * @section design-system
 */
export const ModalInline = props => {
  const {
    title,
    subTitle,
    variant,
    onClose,
    children,
    buttons,
    label,
    icon,
    ...boxProps
  } = props;
  return /*#__PURE__*/React.createElement(ModalStyled, _extends({
    variant: variant
  }, boxProps), label && /*#__PURE__*/React.createElement(Label, {
    size: "lg",
    variant: variant,
    className: "modal-label"
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    icon: icon
  }), label), title && /*#__PURE__*/React.createElement(H5, null, title), onClose && /*#__PURE__*/React.createElement(Button, {
    className: "close-button",
    size: "icon",
    variant: "text",
    onClick: onClose,
    rounded: true
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "X"
  })), subTitle && /*#__PURE__*/React.createElement(Text, null, subTitle), children, buttons && buttons.length && /*#__PURE__*/React.createElement(Box, {
    flex: true,
    flexDirection: "row",
    justifyContent: "flex-end",
    mt: "xl"
  }, buttons.map((buttonProps, key) =>
  /*#__PURE__*/
  // eslint-disable-next-line react/no-array-index-key
  React.createElement(Button, _extends({
    key: key,
    mr: "md",
    mt: "sm"
  }, buttonProps)))));
};
ModalInline.displayName = 'ModalInline';
export default ModalInline;