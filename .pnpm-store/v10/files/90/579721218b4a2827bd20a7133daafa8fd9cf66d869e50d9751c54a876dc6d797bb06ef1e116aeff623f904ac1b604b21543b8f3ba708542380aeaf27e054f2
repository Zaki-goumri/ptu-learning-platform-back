import React from 'react';
import { Box } from "../../atoms/box/index.js";
import { Button } from "../../atoms/button/index.js";
import { Icon } from "../../atoms/icon/index.js";
import { SmallText, Title } from "../../atoms/typography/index.js";
import { DropDown, DropDownItem, DropDownMenu, DropDownTrigger } from "../../molecules/drop-down/index.js";
import StyledCurrentUserNav from "./current-user-nav-styled.js";
import { Avatar } from "../../atoms/avatar/index.js";

/**
 * @load ./current-user-nav.doc.md
 * @component
 * @subcategory Organisms
 * @hideconstructor
 * @see CurrentUserNavProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-organisms-current-user-nav--default Storybook}
 * @new In version 3.3
 * @section design-system
 */
export const CurrentUserNav = props => {
  const {
    name = '',
    title = '',
    avatarUrl,
    dropActions,
    lineActions
  } = props;
  return /*#__PURE__*/React.createElement(StyledCurrentUserNav, null, lineActions && lineActions.length && /*#__PURE__*/React.createElement(Box, {
    flex: true,
    flexDirection: "row",
    alignItems: "center"
  }, lineActions.map(action => /*#__PURE__*/React.createElement(Button, {
    size: "icon",
    variant: "text",
    title: action.label,
    key: action.label,
    href: action.href,
    as: "a",
    className: "line-action",
    onClick: action.onClick
  }, action.icon && /*#__PURE__*/React.createElement(Icon, {
    icon: action.icon
  })))), /*#__PURE__*/React.createElement(DropDown, {
    stick: "right",
    display: "flex"
  }, /*#__PURE__*/React.createElement(DropDownTrigger, null, /*#__PURE__*/React.createElement(Box, {
    flex: true,
    flexDirection: "row",
    px: "xl",
    alignItems: "center",
    height: "navbarHeight"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Title, null, name), title && /*#__PURE__*/React.createElement(SmallText, null, title)), /*#__PURE__*/React.createElement(Avatar, {
    src: avatarUrl,
    alt: name,
    marginLeft: "lg"
  }, name.slice(0, 1).toUpperCase()))), dropActions && dropActions.length && /*#__PURE__*/React.createElement(DropDownMenu, {
    minWidth: "100%"
  }, dropActions.map(action => /*#__PURE__*/React.createElement(DropDownItem, {
    key: action.label,
    as: "a",
    onClick: action.onClick,
    href: action.href
  }, action.icon && /*#__PURE__*/React.createElement(Icon, {
    icon: action.icon
  }), action.label)))));
};
CurrentUserNav.displayName = 'CurrentUserNav';
export default CurrentUserNav;