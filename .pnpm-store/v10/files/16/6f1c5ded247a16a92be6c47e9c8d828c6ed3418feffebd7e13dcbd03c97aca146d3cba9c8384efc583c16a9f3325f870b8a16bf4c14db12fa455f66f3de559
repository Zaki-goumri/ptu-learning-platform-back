function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from 'react';
import { Box } from "../../index.js";
import StoryWrapper from "../../utils/story-wrapper.js";
import { NavigationElement } from "./index.js";
export const Default = {
  render: props => {
    const [isOpen, setOpen] = useState(false);
    const handleClick = event => {
      event.stopPropagation();
      event.preventDefault();
      setOpen(!isOpen);
    };
    return /*#__PURE__*/React.createElement(StoryWrapper, {
      label: "Navigation Element"
    }, /*#__PURE__*/React.createElement(Box, {
      px: "xl",
      py: "xxl",
      width: "300px",
      border: "bg"
    }, /*#__PURE__*/React.createElement(NavigationElement, _extends({}, props, {
      href: "#",
      isOpen: isOpen,
      onClick: handleClick
    }))));
  }
};
const meta = {
  title: 'DesignSystem/Molecules/NavigationElement',
  args: {
    label: 'Dashboard',
    icon: 'Activity',
    isSelected: false
  },
  argTypes: {
    isSelected: {
      control: {
        type: 'boolean'
      }
    },
    icon: {
      control: {
        type: 'text'
      }
    },
    label: {
      control: {
        type: 'text'
      }
    }
  }
};
export default meta;