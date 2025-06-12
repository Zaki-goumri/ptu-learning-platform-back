import { styled } from "../../../build/utils/styled.js";
import { Box } from "../../atoms/box/index.js";
import { InputCSS } from "../../atoms/input/index.js";
import { Text } from "../../atoms/text/index.js";
import { cssClass, themeGet } from "../../utils/index.js";
export const EditorWrapper = styled(Text)`
  position: relative;
  ${InputCSS}

  .ProseMirror-focused {
    outline: none;
  }

  .characterCount {
    position: absolute;
    bottom: ${themeGet('space', 'md')};
    right: ${themeGet('space', 'lg')};
    color: ${themeGet('colors', 'grey40')};
  }
`;
EditorWrapper.defaultProps = {
  px: 'xl',
  py: 'xl',
  className: cssClass('EditorWrapper')
};
export const MenuBarWrapper = styled(Box)`
  border: 1px solid ${themeGet('colors', 'inputBorder')};
  border-bottom: none;

  & .${cssClass('Icon')}:hover {
    cursor: pointer;
  }

  & .${cssClass('Icon')} {
    stroke: ${themeGet('colors', 'grey100')};
  }

  & .active .${cssClass('Icon')} {
    stroke: ${themeGet('colors', 'primary100')};
  }
`;
MenuBarWrapper.defaultProps = {
  px: 'md',
  py: 'md',
  className: cssClass('MenuBarWrapper')
};