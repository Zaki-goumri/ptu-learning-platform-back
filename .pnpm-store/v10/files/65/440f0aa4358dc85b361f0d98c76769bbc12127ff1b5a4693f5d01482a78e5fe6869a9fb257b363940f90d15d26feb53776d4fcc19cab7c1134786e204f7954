import React from 'react';
import * as FeatherIcons from 'react-feather';
import { Box, Label } from "../index.js";
import { Icon } from "./icon.js";
const icons = Object.keys(FeatherIcons).filter(name => name !== 'default');
export const Default = {};
export const Icons = () => /*#__PURE__*/React.createElement(Box, {
  display: "grid",
  style: {
    gridTemplateColumns: 'repeat(10, 1fr)',
    gap: 16
  }
}, icons.map(key => /*#__PURE__*/React.createElement(Box, {
  key: key,
  flex: true,
  alignItems: "center",
  flexDirection: "column"
}, /*#__PURE__*/React.createElement(Label, null, key), /*#__PURE__*/React.createElement(Icon, {
  icon: key,
  size: 24
}))));
const meta = {
  title: 'DesignSystem/Atoms/Icon',
  component: Icon,
  args: {
    icon: icons[0],
    size: 48,
    rounded: false,
    spin: false
  },
  argTypes: {
    icon: {
      description: 'CamelCased name of an icon from https://www.npmjs.com/package/react-feather',
      control: {
        type: 'select'
      },
      options: icons
    },
    size: {
      control: {
        type: 'number',
        min: 16,
        max: 48,
        step: 4
      }
    },
    color: {
      control: {
        type: 'color'
      }
    },
    bg: {
      control: {
        type: 'color'
      }
    },
    rounded: {
      control: {
        type: 'boolean'
      }
    },
    spin: {
      control: {
        type: 'boolean'
      }
    }
  }
};
export default meta;