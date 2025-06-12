import React from 'react';
import StoryWrapper from "../../utils/story-wrapper.js";
import { Box, Button, H4, Text } from "../index.js";
import { Tooltip, TooltipContent } from "./index.js";
const Direction = {
  right: 'right',
  left: 'left',
  top: 'top',
  bottom: 'bottom'
};
const Size = ['default', 'lg'];
export const Default = {
  render: args => /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(StoryWrapper, {
    label: "Regular example"
  }, /*#__PURE__*/React.createElement(Tooltip, args, /*#__PURE__*/React.createElement(Button, null, "Standard text"))), /*#__PURE__*/React.createElement(StoryWrapper, {
    label: "Custom component as tooltip"
  }, /*#__PURE__*/React.createElement(Tooltip, args, /*#__PURE__*/React.createElement(TooltipContent, null, /*#__PURE__*/React.createElement(H4, null, "Header"), /*#__PURE__*/React.createElement(Text, null, "Some text inside the tooltip?")), /*#__PURE__*/React.createElement(Button, null, "Header with sth"))))
};
const meta = {
  title: 'DesignSystem/Atoms/Tooltip',
  component: Tooltip,
  args: {
    direction: Direction.top,
    size: Size[0],
    title: 'Example info'
  },
  argTypes: {
    direction: {
      options: Object.values(Direction),
      control: {
        type: 'select'
      }
    },
    size: {
      options: Size,
      control: {
        type: 'select'
      }
    },
    title: {
      control: {
        type: 'text'
      }
    }
  }
};
export default meta;