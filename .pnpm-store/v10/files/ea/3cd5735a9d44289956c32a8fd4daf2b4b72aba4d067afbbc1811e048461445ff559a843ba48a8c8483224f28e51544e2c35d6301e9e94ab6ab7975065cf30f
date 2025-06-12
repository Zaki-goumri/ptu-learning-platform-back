/* eslint-disable react/require-default-props */

import React from 'react';
import { MenuBarWrapper } from "../rich-text-editor.styled.js";
import useTiptapCommands from "../useTiptapCommands.js";
import HeadingSelect from "./heading-select.js";
import ImageButton from "./image-button.js";
import MenuButton from "./menu-button.js";
const MenuBar = ({
  editor
}) => {
  const commands = useTiptapCommands({
    editor
  });
  if (!editor) return null;
  return /*#__PURE__*/React.createElement(MenuBarWrapper, null, /*#__PURE__*/React.createElement(HeadingSelect, {
    editor: editor
  }), commands.map(({
    name,
    onClick,
    icon
  }) => /*#__PURE__*/React.createElement(MenuButton, {
    editor: editor,
    key: name,
    name: name,
    onClick: onClick,
    icon: icon
  })), /*#__PURE__*/React.createElement(ImageButton, {
    editor: editor
  }));
};
export default MenuBar;