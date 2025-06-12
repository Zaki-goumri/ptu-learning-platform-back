import React from 'react';
import { FormGroup } from "../../index.js";
import StoryWrapper from "../../utils/story-wrapper.js";
import { Box, Button } from "../index.js";
import { PhoneInput } from "./index.js";
export const Default = {
  render: args => /*#__PURE__*/React.createElement(Box, {
    width: 1
  }, /*#__PURE__*/React.createElement(StoryWrapper, {
    label: "Phone input example (https://github.com/bl00mber/react-phone-input-2)"
  }, /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(PhoneInput, args), /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Submit"))))
};
export const Examples = () => /*#__PURE__*/React.createElement(Box, {
  width: 1
}, /*#__PURE__*/React.createElement(StoryWrapper, {
  label: "Phone input"
}, /*#__PURE__*/React.createElement(PhoneInput, {
  id: "input1",
  placeholder: "Simple phone field..."
})));
const meta = {
  title: 'DesignSystem/Atoms/PhoneInput',
  component: PhoneInput,
  args: {
    borderless: false,
    disabled: false,
    variant: 'default',
    width: 0.5
  },
  argTypes: {
    borderless: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    variant: {
      options: ['sm', 'lg', 'xl', 'default'],
      control: {
        type: 'select'
      }
    },
    width: {
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.1
      }
    }
  }
};
export default meta;