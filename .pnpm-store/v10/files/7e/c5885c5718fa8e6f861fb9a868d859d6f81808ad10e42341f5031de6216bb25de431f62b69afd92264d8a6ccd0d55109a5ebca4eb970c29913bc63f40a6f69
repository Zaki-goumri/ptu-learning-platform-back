function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Box, CardTitle, Text } from "../../index.js";
import StoryWrapper from "../../utils/story-wrapper.js";
import { ValueGroup } from "./index.js";
export const Default = {
  render: ({
    onClick
  }) => {
    const handleClick = event => {
      event.preventDefault();
      onClick(event);
    };
    const objects = [{
      label: 'First Name',
      onClick: handleClick,
      value: 'Wojtek'
    }, {
      label: 'Last Name',
      onClick: handleClick,
      value: 'Krysiak'
    }];
    return /*#__PURE__*/React.createElement(StoryWrapper, {
      label: "ValueGroup default settings"
    }, /*#__PURE__*/React.createElement(Box, null, objects.map(field => /*#__PURE__*/React.createElement(ValueGroup, _extends({
      key: field.label
    }, field))), /*#__PURE__*/React.createElement(ValueGroup, {
      label: "value with styled children"
    }, /*#__PURE__*/React.createElement(CardTitle, null, "With children which are wrapped with CardTitle")), /*#__PURE__*/React.createElement(ValueGroup, {
      label: "With Multiline Content"
    }, /*#__PURE__*/React.createElement(Box, {
      variant: "white",
      border: "default"
    }, /*#__PURE__*/React.createElement(Text, null, /*#__PURE__*/React.createElement("h4", null, "I am header"), /*#__PURE__*/React.createElement("p", null, "And I am content"))))));
  }
};
const meta = {
  title: 'DesignSystem/Molecules/ValueGroup',
  component: ValueGroup
};
export default meta;