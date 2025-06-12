import React from 'react';
import StoryWrapper from "../../utils/story-wrapper.js";
import { Box, Label, Text } from "../index.js";
import { Input } from "./index.js";
const inputTypes = ['email', 'file', 'hidden', 'month', 'number', 'tel', 'text', 'time', 'url', 'week'];
const inputVariants = ['sm', 'lg', 'xl', 'default'];
export const Default = {};
export const Examples = () => /*#__PURE__*/React.createElement(Box, {
  width: 1
}, /*#__PURE__*/React.createElement(StoryWrapper, {
  label: "Regular input"
}, /*#__PURE__*/React.createElement(Input, {
  width: "300px",
  id: "input1",
  placeholder: "Simple input field..."
})), /*#__PURE__*/React.createElement(StoryWrapper, {
  label: "Disabled"
}, /*#__PURE__*/React.createElement(Input, {
  width: "300px",
  id: "input2",
  value: "I am disabled...",
  disabled: true
})), /*#__PURE__*/React.createElement(StoryWrapper, {
  label: "Without a border"
}, /*#__PURE__*/React.createElement(Text, {
  as: "span"
}, "Write your name: "), /*#__PURE__*/React.createElement(Input, {
  width: "300px",
  id: "input3",
  value: "Write something",
  borderless: true
})), /*#__PURE__*/React.createElement(StoryWrapper, {
  label: "different sizes"
}, /*#__PURE__*/React.createElement(Box, {
  mb: "xl",
  width: 1
}, /*#__PURE__*/React.createElement(Label, null, "Small:"), /*#__PURE__*/React.createElement(Input, {
  width: "300px",
  id: "input4",
  placeholder: "sm",
  variant: "sm"
})), /*#__PURE__*/React.createElement(Box, {
  mb: "xl",
  width: 1
}, /*#__PURE__*/React.createElement(Label, null, "Large:"), /*#__PURE__*/React.createElement(Input, {
  width: "300px",
  id: "input4",
  placeholder: "lg",
  variant: "lg"
})), /*#__PURE__*/React.createElement(Box, {
  mb: "xl",
  width: 1
}, /*#__PURE__*/React.createElement(Label, null, "Extra Large:"), /*#__PURE__*/React.createElement(Input, {
  width: "300px",
  id: "input4",
  placeholder: "lg",
  variant: "xl"
})), /*#__PURE__*/React.createElement(Box, {
  width: 1
}, /*#__PURE__*/React.createElement(Label, null, "Extra Large without a border:"), /*#__PURE__*/React.createElement(Input, {
  width: "300px",
  id: "input5",
  placeholder: "Title",
  variant: "xl",
  borderless: true
}))));
const meta = {
  title: 'DesignSystem/Atoms/Input',
  component: Input,
  args: {
    type: 'text',
    disabled: false,
    borderless: false,
    variant: 'default'
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
      options: inputVariants,
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
    },
    type: {
      options: inputTypes,
      control: {
        type: 'select'
      }
    }
  }
};
export default meta;