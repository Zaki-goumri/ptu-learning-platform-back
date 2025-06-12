import React from 'react';
import MenuButton from "./menu-button.js";
const HeadingSelect = props => {
  const {
    editor
  } = props;
  const headingLevels = [1, 2, 3, 4, 5, 6];
  return /*#__PURE__*/React.createElement(React.Fragment, null, headingLevels.map(level => {
    const name = `heading.${level}`;
    return /*#__PURE__*/React.createElement(MenuButton, {
      editor: editor,
      key: name,
      name: name,
      onClick: () => editor.chain().focus().toggleHeading({
        level
      }).run(),
      icon: "FontSize",
      attributes: {
        level
      }
    }, ` ${level}`);
  }), /*#__PURE__*/React.createElement(MenuButton, {
    editor: editor,
    name: "paragraph",
    onClick: () => editor.chain().focus().setParagraph().run(),
    icon: "Paragraph"
  }));
};
export default HeadingSelect;