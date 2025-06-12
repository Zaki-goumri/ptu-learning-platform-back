import React from 'react';
import StoryWrapper from "../../utils/story-wrapper.js";
import { Box, Icon, Label } from "../index.js";
import { Button } from "./index.js";
const ButtonVariant = ['text', 'outlined', 'contained', 'light'];
const ButtonSize = ['default', 'sm', 'lg', 'icon'];
const ButtonColor = ['primary', 'secondary', 'danger', 'success', 'info'];
export const Default = {
  render: args => /*#__PURE__*/React.createElement(Button, args, "Example button")
};
export const Examples = () => /*#__PURE__*/React.createElement(Box, {
  width: 1
}, /*#__PURE__*/React.createElement(StoryWrapper, {
  label: "Variants",
  flex: true
}, ButtonVariant.map(variant => /*#__PURE__*/React.createElement(Box, {
  key: variant
}, /*#__PURE__*/React.createElement(Label, null, variant), /*#__PURE__*/React.createElement(Button, {
  variant: variant
}, variant)))), /*#__PURE__*/React.createElement(StoryWrapper, {
  label: "Sizes"
}, ButtonSize.map(size => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Label, null, size), /*#__PURE__*/React.createElement(Box, {
  key: size,
  flex: true,
  style: {
    gap: 16
  }
}, ButtonVariant.map(variant => /*#__PURE__*/React.createElement(Button, {
  key: variant,
  size: size,
  variant: variant
}, variant, " ", size)))))), /*#__PURE__*/React.createElement(StoryWrapper, {
  label: "Colors"
}, ButtonColor.map(color => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Label, null, color), /*#__PURE__*/React.createElement(Box, {
  key: color,
  flex: true,
  style: {
    gap: 16
  }
}, ButtonVariant.map(variant => /*#__PURE__*/React.createElement(Button, {
  key: variant,
  color: color,
  variant: variant
}, variant, " ", color)))))), /*#__PURE__*/React.createElement(StoryWrapper, {
  label: "Rounded"
}, ButtonSize.map(size => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Label, null, size), /*#__PURE__*/React.createElement(Box, {
  key: size,
  flex: true,
  style: {
    gap: 16
  }
}, ButtonVariant.map(variant => /*#__PURE__*/React.createElement(Button, {
  key: variant,
  size: size,
  variant: variant,
  rounded: true
}, variant, " rounded")))))), /*#__PURE__*/React.createElement(StoryWrapper, {
  label: "With icons"
}, ButtonSize.map(size => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Label, null, size), /*#__PURE__*/React.createElement(Box, {
  key: size,
  flex: true,
  style: {
    gap: 16
  }
}, ButtonVariant.map(variant => /*#__PURE__*/React.createElement(Button, {
  key: variant,
  size: size,
  variant: variant
}, /*#__PURE__*/React.createElement(Icon, {
  icon: "Plus"
}), size !== 'icon' && [variant, size].join(' '))))))));
const meta = {
  title: 'DesignSystem/Atoms/Button',
  component: Button,
  args: {
    variant: ButtonVariant[0],
    size: ButtonSize[0],
    color: ButtonColor[0],
    disabled: false,
    rounded: false
  },
  parameters: {
    controls: {
      include: ['variant', 'disabled', 'rounded', 'size', 'color']
    }
  },
  argTypes: {
    onClick: {
      action: 'clicked'
    },
    variant: {
      options: ButtonVariant,
      control: {
        type: 'select'
      }
    },
    size: {
      options: ButtonSize,
      control: {
        type: 'select'
      }
    },
    color: {
      options: ButtonColor,
      control: {
        type: 'select'
      }
    }
  }
};
export default meta;