function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Link } from "./index.js";
var LinkVariant = /*#__PURE__*/function (LinkVariant) {
  LinkVariant["Primary"] = "primary";
  LinkVariant["Danger"] = "danger";
  LinkVariant["Success"] = "success";
  LinkVariant["Info"] = "info";
  LinkVariant["Secondary"] = "secondary";
  return LinkVariant;
}(LinkVariant || {});
var LinkSize = /*#__PURE__*/function (LinkSize) {
  LinkSize["Sm"] = "sm";
  LinkSize["Lg"] = "lg";
  return LinkSize;
}(LinkSize || {});
const variants = Object.values(LinkVariant);
const sizes = Object.values(LinkSize);
export const Default = {
  render: props => /*#__PURE__*/React.createElement(Link, _extends({}, props, {
    href: "/"
  }), "just a link")
};
const meta = {
  title: 'DesignSystem/Atoms/Link',
  component: Link,
  args: {
    uppercase: false,
    variant: LinkVariant.Primary,
    size: LinkSize.Sm
  },
  argTypes: {
    uppercase: {
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
      options: sizes,
      control: {
        type: 'select'
      }
    }
  }
};
export default meta;