function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Box } from "../../index.js";
import { MessageBox } from "./message-box.js";
export const Default = {
  render: ({
    withInsideText,
    ...props
  }) => /*#__PURE__*/React.createElement(Box, {
    py: "lg"
  }, /*#__PURE__*/React.createElement(MessageBox, _extends({
    onCloseClick: () => {/** noop */}
  }, props), withInsideText && 'With inside text'))
};
const meta = {
  title: 'DesignSystem/Molecules/MessageBox',
  component: MessageBox,
  args: {
    variant: 'info',
    size: 'sm',
    message: 'Some message'
  },
  argTypes: {
    variant: {
      options: ['danger', 'info', 'success', 'warning'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select'
      }
    },
    message: {
      control: {
        type: 'text'
      }
    }
  }
};
export default meta;