import React from 'react';
import { styled } from "../../../build/utils/styled.js";
import { Box } from "../../atoms/box/index.js";
import { Icon } from "../../atoms/icon/index.js";
import { Link } from "../../atoms/link/index.js";
import { Text } from "../../atoms/text/index.js";
import { themeGet } from "../../utils/index.js";
const StyledWrapper = styled(Box)`
  user-select: none;
  & > * {
    padding: 0 ${themeGet('space', 'xs')};
  }
`;
StyledWrapper.defaultProps = {
  color: 'grey60',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const StyledLink = styled(Link)`
  font-size: ${themeGet('fontSizes', 'sm')};
  font-weight: 300;
  &:hover {
    color: ${themeGet('colors', 'love')};
    text-decoration: none;
  }
`;
export const MadeWithLove = () => /*#__PURE__*/React.createElement(StyledWrapper, null, /*#__PURE__*/React.createElement(Text, {
  as: "span",
  variant: "sm"
}, "Made with"), /*#__PURE__*/React.createElement(Icon, {
  icon: "Heart",
  color: "love"
}), /*#__PURE__*/React.createElement(Text, {
  as: "span",
  variant: "sm"
}, "by"), /*#__PURE__*/React.createElement(StyledLink, {
  href: "https://adminjs.co/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "AdminJS Team"));
MadeWithLove.displayName = 'MadeWithLove';
export default MadeWithLove;