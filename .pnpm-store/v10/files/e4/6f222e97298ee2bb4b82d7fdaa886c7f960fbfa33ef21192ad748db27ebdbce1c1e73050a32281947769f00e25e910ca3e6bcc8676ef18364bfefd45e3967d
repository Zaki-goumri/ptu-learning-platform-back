import React from 'react';
import { FormGroup } from "../../index.js";
import StoryWrapper from "../../utils/story-wrapper.js";
import { Box, Button } from "../index.js";
import { CurrencyInput } from "./index.js";
export const Default = {
  render: props => /*#__PURE__*/React.createElement(Box, {
    width: 1
  }, /*#__PURE__*/React.createElement(StoryWrapper, {
    label: "Currency input example"
  }, /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(CurrencyInput, props), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    mt: "lg"
  }, "Submit"))))
};
export const Examples = () => /*#__PURE__*/React.createElement(Box, {
  width: 1
}, /*#__PURE__*/React.createElement(StoryWrapper, {
  label: "Euro input"
}, /*#__PURE__*/React.createElement(CurrencyInput, {
  id: "input1",
  placeholder: "Simple input field...",
  intlConfig: {
    locale: 'de-DE',
    currency: 'EUR'
  }
})));
const meta = {
  title: 'DesignSystem/Atoms/CurrencyInput',
  component: CurrencyInput,
  args: {
    variant: 'default',
    borderless: false,
    disabled: false,
    prefix: '$',
    suffix: '',
    decimalSeparator: '.',
    groupSeparator: ' ',
    allowDecimals: true,
    width: 1 / 2,
    decimalsLimit: 2
  },
  argTypes: {
    variant: {
      options: ['sm', 'lg', 'xl', 'default'],
      control: {
        type: 'select'
      }
    },
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
    width: {
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.1
      }
    },
    prefix: {
      control: {
        type: 'text'
      }
    },
    suffix: {
      control: {
        type: 'text'
      }
    },
    decimalSeparator: {
      control: {
        type: 'text'
      }
    },
    groupSeparator: {
      control: {
        type: 'text'
      }
    },
    allowDecimals: {
      control: {
        type: 'boolean'
      }
    },
    decimalsLimit: {
      control: {
        type: 'number',
        min: 0,
        max: 5,
        step: 1
      }
    }
  }
};
export default meta;