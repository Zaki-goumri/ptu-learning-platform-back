import React from 'react';
import StoryWrapper from "../../utils/story-wrapper.js";
import { Box, Header, Text as TextComponent } from "../index.js";
import { Badge } from "./index.js";
var BadgeVariant = /*#__PURE__*/function (BadgeVariant) {
  BadgeVariant["Default"] = "default";
  BadgeVariant["Primary"] = "primary";
  BadgeVariant["Danger"] = "danger";
  BadgeVariant["Success"] = "success";
  BadgeVariant["Info"] = "info";
  BadgeVariant["Secondary"] = "secondary";
  return BadgeVariant;
}(BadgeVariant || {});
var BadgeSize = /*#__PURE__*/function (BadgeSize) {
  BadgeSize["Small"] = "sm";
  BadgeSize["Default"] = "default";
  BadgeSize["Large"] = "lg";
  return BadgeSize;
}(BadgeSize || {});
const variants = Object.values(BadgeVariant);
const sizes = Object.values(BadgeSize);
export const Default = {
  render: args => /*#__PURE__*/React.createElement(Badge, args, "Badge example")
};
export const Examples = () => /*#__PURE__*/React.createElement(Box, {
  width: 1
}, /*#__PURE__*/React.createElement(StoryWrapper, {
  label: "Badge regular"
}, /*#__PURE__*/React.createElement(Badge, {
  variant: "primary",
  mr: "default"
}, "primary"), variants.map(variant => /*#__PURE__*/React.createElement(Badge, {
  variant: variant,
  key: variant,
  mr: "default"
}, variant))), /*#__PURE__*/React.createElement(StoryWrapper, {
  label: "Badge outlined"
}, variants.map(variant => /*#__PURE__*/React.createElement(Badge, {
  variant: variant,
  key: variant,
  mr: "default",
  outline: true
}, variant))), /*#__PURE__*/React.createElement(StoryWrapper, {
  label: "Badge sizes"
}, sizes.map(size => /*#__PURE__*/React.createElement(Badge, {
  variant: "primary",
  size: size,
  key: size,
  mr: "default"
}, size))), /*#__PURE__*/React.createElement(StoryWrapper, {
  label: "With other elements"
}, /*#__PURE__*/React.createElement(Header.H1, null, "H1. Header", /*#__PURE__*/React.createElement(Badge, {
  ml: "default"
}, "Badge")), /*#__PURE__*/React.createElement(Header.H2, null, "H1. Header", /*#__PURE__*/React.createElement(Badge, {
  ml: "default",
  size: "sm",
  variant: "primary"
}, "Small badge")), /*#__PURE__*/React.createElement(TextComponent, {
  mt: "xxl"
}, "Inside text", /*#__PURE__*/React.createElement(Badge, {
  mx: "default"
}, "Is something"))));
const meta = {
  title: 'DesignSystem/Atoms/Badge',
  component: Badge,
  args: {
    variant: BadgeVariant.Primary,
    size: BadgeSize.Default,
    outline: false
  },
  argTypes: {
    variant: {
      options: variants,
      control: {
        type: 'select'
      }
    },
    size: {
      options: sizes,
      control: {
        type: 'select'
      }
    },
    outline: {
      control: {
        type: 'boolean'
      }
    }
  }
};
export default meta;