import React from 'react';
import { Box, CardTitle, Label } from "../../index.js";
import { ButtonGroup } from "./index.js";
export const Default = {
  render: ({
    onClick,
    size,
    rounded
  }) => {
    const handleClick = (event, source) => {
      event.preventDefault();
      onClick(event, source);
    };
    const buttons = [{
      label: 'Edit',
      onClick: handleClick,
      icon: 'Edit'
    }, {
      label: 'Not Clickable',
      source: 'thisWillGoBack',
      icon: 'Copy',
      variant: 'light',
      buttons: [{
        label: 'Option 1',
        onClick: handleClick,
        icon: 'Copy',
        variant: 'primary'
      }, {
        label: 'Option 2',
        onClick: handleClick,
        icon: 'Copy',
        buttons: [{
          label: 'Option 2.1',
          onClick: handleClick,
          icon: 'Copy'
        }, {
          label: 'Option 2.2',
          onClick: handleClick,
          icon: 'Copy'
        }]
      }, {
        label: 'Option 3',
        icon: 'Copy'
      }]
    }, {
      label: 'Delete',
      onClick: handleClick,
      variant: 'danger',
      icon: 'Trash2'
    }, {
      label: null,
      variant: 'light',
      icon: 'MenuHorizontal',
      buttons: [{
        label: 'Edit',
        onClick: handleClick,
        icon: 'Edit',
        variant: 'light'
      }, {
        label: 'Duplicate',
        onClick: handleClick,
        icon: 'Copy'
      }, {
        label: 'Delete',
        onClick: handleClick,
        variant: 'danger',
        icon: 'Trash2'
      }]
    }];
    return /*#__PURE__*/React.createElement(Box, {
      variant: "grey"
    }, /*#__PURE__*/React.createElement(Label, null, "ButtonGroup"), /*#__PURE__*/React.createElement(Box, {
      variant: "card",
      mb: "xxl"
    }, /*#__PURE__*/React.createElement(CardTitle, null, "Big buttons"), /*#__PURE__*/React.createElement(ButtonGroup, {
      buttons: buttons,
      size: size,
      rounded: rounded
    })));
  }
};
const meta = {
  title: 'DesignSystem/Organisms/ButtonGroup',
  component: ButtonGroup,
  args: {
    size: 'default',
    rounded: false
  },
  argTypes: {
    size: {
      options: ['sm', 'default', 'lg'],
      control: {
        type: 'select'
      }
    },
    rounded: {
      control: {
        type: 'boolean'
      }
    }
  }
};
export default meta;