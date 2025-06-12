import React from 'react';
import { Button, Header, Text } from "../index.js";
import { Box } from "./index.js";
export const Default = {
  render: props => /*#__PURE__*/React.createElement(Box, props, "Box example")
};
const variants = ['card', 'container', 'grey', 'transparent', 'white'];
export const simpleWhiteGrayWrapper = () => /*#__PURE__*/React.createElement(Box, {
  variant: "grey"
}, /*#__PURE__*/React.createElement(Box, {
  variant: "white"
}, /*#__PURE__*/React.createElement(Text, null, "This is the default wrapper in the application")));
export const positioningButtons = () => /*#__PURE__*/React.createElement(Box, {
  variant: "grey"
}, /*#__PURE__*/React.createElement(Box, {
  variant: "white",
  flex: true,
  flexDirection: "row"
}, /*#__PURE__*/React.createElement(Box, {
  flexGrow: 1
}, /*#__PURE__*/React.createElement(Header.H3, null, "Some header")), /*#__PURE__*/React.createElement(Box, {
  flexShrink: 0
}, /*#__PURE__*/React.createElement(Button, null, "Example Button On The Right"))));
const meta = {
  title: 'DesignSystem/Atoms/Box',
  component: Box,
  parameters: {
    controls: {
      include: ['variant']
    }
  },
  argTypes: {
    variant: {
      options: variants,
      control: {
        type: 'select'
      }
    }
  }
};
export default meta;