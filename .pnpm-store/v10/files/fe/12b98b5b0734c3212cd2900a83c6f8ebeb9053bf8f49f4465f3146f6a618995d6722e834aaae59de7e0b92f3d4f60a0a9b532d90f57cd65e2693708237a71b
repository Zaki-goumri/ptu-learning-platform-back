import React from 'react';
import * as illustrations from "../illustrations/index.js";
import { Box, Label } from "../index.js";
import { Illustration } from "./index.js";
const illustrationVariants = Object.keys(illustrations);
export const Default = {
  render: ({
    variant
  }) => /*#__PURE__*/React.createElement(Illustration, {
    variant: variant
  })
};
export const Illustrations = () => /*#__PURE__*/React.createElement(Box, {
  display: "grid",
  style: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 16
  }
}, illustrationVariants.map(key => /*#__PURE__*/React.createElement(Box, {
  key: key,
  flex: true,
  alignItems: "center",
  flexDirection: "column"
}, /*#__PURE__*/React.createElement(Label, null, key), /*#__PURE__*/React.createElement(Illustration, {
  variant: key,
  width: 150,
  height: 150
}))));
const meta = {
  title: 'DesignSystem/Atoms/Illustration',
  args: {
    variant: illustrationVariants[0],
    width: 150,
    height: 150
  },
  argTypes: {
    variant: {
      options: illustrationVariants,
      control: {
        type: 'select'
      }
    },
    width: {
      control: {
        type: 'number'
      }
    },
    height: {
      control: {
        type: 'number'
      }
    }
  }
};
export default meta;