/* eslint-disable react/jsx-closing-tag-location */

import React from 'react';
import StoryWrapper from "../../utils/story-wrapper.js";
import { Box } from "../index.js";
import { Label } from "./index.js";
const variants = ['primary', 'danger', 'success', 'info', 'secondary'];
export const Default = {
  render: args => /*#__PURE__*/React.createElement(Box, {
    width: 1
  }, /*#__PURE__*/React.createElement(StoryWrapper, {
    label: "Label"
  }, /*#__PURE__*/React.createElement(Label, args, "Example label")))
};
const meta = {
  title: 'DesignSystem/Atoms/Label',
  component: Label,
  args: {
    required: false,
    uppercase: false,
    disabled: false,
    inline: false,
    variant: 'default',
    size: 'default'
  },
  argTypes: {
    required: {
      control: {
        type: 'boolean'
      }
    },
    uppercase: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    inline: {
      control: {
        type: 'boolean'
      }
    },
    variant: {
      options: variants,
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['default', 'lg'],
      control: {
        type: 'select'
      }
    }
  }
};
export default meta;