function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable max-len */
import { styled } from "../../../build/utils/styled.js";
import React from 'react';
import { variant as styledVariant } from 'styled-system';
import { Box } from "../../atoms/box/index.js";
import { Button } from "../../atoms/button/index.js";
import { Icon } from "../../atoms/icon/index.js";
import { Text } from "../../atoms/text/index.js";
import { cssClass } from "../../utils/css-class.js";

/**
 * Prop Types of a MessageBox component.
 * Apart from those defined below it extends all {@link SpaceProps}
 *
 * @memberof MessageBox
 * @alias MessageBoxProps
 */

const sizeVariants = styledVariant({
  prop: 'size',
  variants: {
    sm: {
      boxShadow: 'none',
      [`& > ${cssClass('Button')}`]: {
        margin: '0px'
      }
    }
  }
});
const StyledMessageBox = styled(Box)`
  line-height: ${({
  theme
}) => theme.lineHeights.default};
  border-radius: 4px;
  color: ${({
  theme
}) => theme.colors.text};
  padding: 12px 22px;
  white-space: pre-wrap;

  & .${cssClass('Icon')} {
    display: flex;
  }

  ${sizeVariants};
`;

/**
 * @classdesc
 *
 * <img src="components/message-box.png" />
 *
 * Component responsible for rendering standard danger/info/success
 * messages.
 *
 * It has 2 size versions: default and small. Also it can either contain or
 * don't contain children, which causes different look.
 *
 * ### Usage
 *
 * ```javascript
 * import { MessageBox, MessageBoxProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see MessageBoxProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-messagebox--default Storybook}
 * @example <caption>Different variants</caption>
 * return (
 *  <Box py="lg">
 *   <MessageBox message="Some default message" onCloseClick={() => alert('close clicked')} />
 *   <MessageBox message="Error message" mt="default" variant="danger" onCloseClick={() => alert('close clicked')} />
 *   <MessageBox message="Info message" mt="default" variant="info" onCloseClick={() => alert('close clicked')} />
 *  </Box>
 * )
 * @example <caption>Different variants with children</caption>
 * return (
 *  <Box py="lg">
 *   <MessageBox message="Some default message" onCloseClick={() => alert('close clicked')}>
 *     With inside text
 *   </MessageBox>
 *   <MessageBox message="Error message" mt="default" variant="danger" onCloseClick={() => alert('close clicked')}>
 *     With inside text
 *   </MessageBox>
 *   <MessageBox message="Info message" mt="default" variant="info" onCloseClick={() => alert('close clicked')}>
 *     With inside text
 *   </MessageBox>
 *  </Box>
 * )
 * @example <caption>Small with an icon and inside text</caption>
 * return (
 *  <Box py="lg">
 *   <MessageBox
 *     size="sm"
 *     message="Info message"
 *     mt="default"
 *     variant="info"
 *     icon="MessageCircle"
 *     onCloseClick={() => alert('close clicked')}
 *   >
 *     With inside text
 *   </MessageBox>
 *  </Box>
 * )
 * @section design-system
 */
export const MessageBox = props => {
  const {
    onCloseClick,
    message,
    icon,
    children,
    variant = 'info',
    size,
    ...other
  } = props;
  const variantIcon = {
    success: 'Check',
    danger: 'XCircle',
    info: 'Info',
    warning: 'AlertCircle'
  };
  const variantBg = {
    success: 'successLight',
    danger: 'errorLight',
    info: 'infoLight',
    warning: 'warningLight'
  };
  const variantIconBg = {
    success: 'success',
    danger: 'error',
    info: 'info',
    warning: 'warning'
  };
  return /*#__PURE__*/React.createElement(Box, _extends({
    className: cssClass('MessageBox')
  }, other), /*#__PURE__*/React.createElement(StyledMessageBox, {
    as: "div",
    bg: variantBg[variant],
    size: size
  }, /*#__PURE__*/React.createElement(Box, {
    flex: true,
    alignItems: "center"
  }, variantIcon && /*#__PURE__*/React.createElement(Icon, {
    icon: icon || variantIcon[variant],
    bg: variantIconBg[variant],
    color: "white",
    p: "sm",
    marginRight: "xl",
    borderRadius: "50%"
  }), /*#__PURE__*/React.createElement(Box, {
    as: "div",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Text, {
    fontWeight: children ? 500 : 400
  }, message)), onCloseClick && /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    size: "icon",
    onClick: onCloseClick,
    rounded: true,
    color: variant,
    ml: "xl"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "X"
  }))), /*#__PURE__*/React.createElement(Box, {
    marginLeft: "x3"
  }, /*#__PURE__*/React.createElement(Text, null, children))));
};
MessageBox.displayName = 'MessageBox';
export default MessageBox;