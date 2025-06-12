import React from 'react';
import { Badge, Box, Button, Icon, Text } from "../../index.js";
import StoryWrapper from "../../utils/story-wrapper.js";
import { DropDown, DropDownItem, DropDownMenu, DropDownTrigger } from "./index.js";
export const Default = {
  render: ({
    onClick,
    ...props
  }) => {
    const handleClick = event => {
      event.preventDefault();
      onClick(event);
    };
    return /*#__PURE__*/React.createElement(StoryWrapper, {
      label: "Button trigger with nested DropDownItems"
    }, /*#__PURE__*/React.createElement(Box, {
      height: "200px"
    }, /*#__PURE__*/React.createElement(DropDown, props, /*#__PURE__*/React.createElement(DropDownTrigger, null, /*#__PURE__*/React.createElement(Button, null, "Get your cursor here!")), /*#__PURE__*/React.createElement(DropDownMenu, null, /*#__PURE__*/React.createElement(DropDownItem, {
      onClick: handleClick
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: "Video"
    }), "Some menu item"), /*#__PURE__*/React.createElement(DropDownItem, {
      onClick: handleClick
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: "Headphones"
    }), "Other item", /*#__PURE__*/React.createElement(DropDownMenu, null, /*#__PURE__*/React.createElement(DropDownItem, {
      onClick: handleClick,
      color: "danger"
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: "Edit"
    }), "Some danger item")))))));
  }
};
export const Custom = {
  render: ({
    onClick
  }) => {
    const handleClick = event => {
      event.preventDefault();
      onClick(event);
    };
    return /*#__PURE__*/React.createElement(StoryWrapper, {
      label: "Badge trigger with TextContent"
    }, /*#__PURE__*/React.createElement(DropDown, null, /*#__PURE__*/React.createElement(DropDownTrigger, null, /*#__PURE__*/React.createElement(Badge, null, "Get your cursor here!")), /*#__PURE__*/React.createElement(DropDownMenu, null, /*#__PURE__*/React.createElement(Box, {
      p: "xxl",
      width: 300
    }, /*#__PURE__*/React.createElement(Text, null, /*#__PURE__*/React.createElement("h3", null, "I am inside dropdown Menu"), /*#__PURE__*/React.createElement(Button, {
      onClick: handleClick
    }, "Click me if you dare"))))));
  }
};
const meta = {
  title: 'DesignSystem/Molecules/DropDown',
  args: {
    stick: 'left'
  },
  argTypes: {
    stick: {
      options: ['left', 'right'],
      control: {
        type: 'select'
      }
    }
  }
};
export default meta;