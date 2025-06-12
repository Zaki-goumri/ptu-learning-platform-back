function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Box } from "../../index.js";
import StoryWrapper from "../../utils/story-wrapper.js";
import { CurrentUserNav } from "./index.js";
export const Default = {
  render: ({
    onClick,
    ...props
  }) => {
    const handleClick = event => {
      event.preventDefault();
      onClick(event);
    };
    const dropActions = [{
      label: 'My Profile',
      onClick: handleClick,
      icon: 'User'
    }, {
      label: 'Log out',
      onClick: handleClick,
      icon: 'LogOut'
    }];
    const lineActions = [{
      label: 'Notification',
      onClick: handleClick,
      icon: 'Bell'
    }, {
      label: 'Settings',
      onClick: handleClick,
      icon: 'Settings'
    }];
    return /*#__PURE__*/React.createElement(StoryWrapper, {
      label: "Current user navigation"
    }, /*#__PURE__*/React.createElement(Box, {
      height: "250px"
    }, /*#__PURE__*/React.createElement(Box, {
      border: "default",
      flex: true,
      flexDirection: "row-reverse",
      height: "navbarHeight"
    }, /*#__PURE__*/React.createElement(CurrentUserNav, _extends({}, props, {
      dropActions: dropActions,
      lineActions: lineActions
    })))));
  }
};
const meta = {
  title: 'DesignSystem/Organisms/CurrentUserNav',
  component: CurrentUserNav,
  args: {
    name: 'John Doe',
    title: 'Admin',
    avatarUrl: 'https://images.unsplash.com/photo-1612144431180-2d672779556c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  argTypes: {
    name: {
      control: {
        type: 'text'
      }
    },
    title: {
      control: {
        type: 'text'
      }
    },
    avatarUrl: {
      control: {
        type: 'text'
      }
    }
  }
};
export default meta;