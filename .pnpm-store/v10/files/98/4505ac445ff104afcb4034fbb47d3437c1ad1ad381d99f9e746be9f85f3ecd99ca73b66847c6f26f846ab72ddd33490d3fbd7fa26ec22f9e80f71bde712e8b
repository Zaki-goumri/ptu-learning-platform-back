function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from 'react';
import { Box, Label } from "../../index.js";
import { Navigation } from "./index.js";
export const Default = {
  render: ({
    onClick,
    label
  }) => {
    const [postgresOpen, setPostgresOpen] = useState(false);
    const [mongooseOpen, setMongooseOpen] = useState(false);
    const handleClick = event => {
      event.preventDefault();
      onClick(event);
    };
    const props = {
      label: 'Navigation',
      elements: [{
        label: 'Dashboard',
        icon: 'Database',
        isSelected: true,
        href: '/',
        onClick: handleClick,
        id: 'dashboard'
      }, {
        label: 'Postgres with long name and spaces',
        icon: 'Database',
        onClick: event => {
          event.preventDefault();
          setPostgresOpen(!postgresOpen);
        },
        isOpen: postgresOpen,
        elements: [{
          label: 'Users',
          href: '/resources/Users/list',
          onClick: handleClick,
          id: 'users'
        }, {
          label: 'Posts',
          href: '/resources/Posts/list',
          onClick: handleClick,
          id: 'posts'
        }, {
          label: 'Messages',
          href: '/resources/Messages/list',
          onClick: handleClick,
          id: 'messages'
        }, {
          label: 'Calendar',
          href: '/resources/Calendar/list',
          onClick: handleClick,
          id: 'calendar'
        }]
      }, {
        label: 'MongooseWithLongNameAndWithoutSpaces',
        icon: 'Database',
        isOpen: mongooseOpen,
        onClick: event => {
          event.preventDefault();
          setMongooseOpen(!mongooseOpen);
        },
        elements: [{
          label: 'Car',
          href: '/resources/Cars/list',
          onClick: handleClick,
          id: 'car'
        }, {
          label: 'Dealers',
          href: '/resources/Dealers/list',
          onClick: handleClick,
          id: 'dealers'
        }, {
          label: 'Owners',
          href: '/resources/Owners/list',
          onClick: handleClick,
          id: 'owners'
        }, {
          label: 'Orders',
          href: '/resources/Orders/list',
          onClick: handleClick,
          id: 'orders'
        }]
      }]
    };
    return /*#__PURE__*/React.createElement(Box, {
      variant: "grey"
    }, /*#__PURE__*/React.createElement(Label, null, "Navigation example"), /*#__PURE__*/React.createElement(Box, {
      width: "sidebarWidth",
      border: "bg",
      bg: "white"
    }, /*#__PURE__*/React.createElement(Navigation, _extends({}, props, {
      label: label
    }))));
  }
};
const meta = {
  title: 'DesignSystem/Organisms/Navigation',
  component: Navigation,
  args: {
    label: 'Navigation'
  },
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    }
  }
};
export default meta;