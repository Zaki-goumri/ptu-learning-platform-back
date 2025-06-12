import React, { useMemo } from 'react';
import { styled } from "../../../../build/utils/styled.js";
import { Text } from "../../../atoms/text/index.js";
import * as EditorIcons from "../icons/index.js";
const StyledText = styled(Text)`
  cursor: pointer;
  color: ${({
  theme
}) => theme.colors.grey80};
  & svg path {
    fill: ${({
  theme
}) => theme.colors.grey80};
  }
`;
const MenuButton = props => {
  const {
    name,
    editor,
    onClick,
    icon,
    attributes,
    children
  } = props;
  const isActive = useMemo(() => editor.isActive(attributes || name) ? 'active' : '', [name, attributes]);

  // Using icons from: https://github.com/Keyamoon/IcoMoon-Free
  const Icon = icon ? EditorIcons[icon] : null;
  return /*#__PURE__*/React.createElement(StyledText, {
    as: "span",
    onClick: onClick,
    className: isActive,
    size: "icon",
    mx: "md"
  }, Icon ? /*#__PURE__*/React.createElement(Icon, null) : name, children);
};
export default MenuButton;