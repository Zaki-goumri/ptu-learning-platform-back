import { styled, css } from "../../../build/utils/styled.js";
import { cssClass } from "../../utils/index.js";
import ButtonCSS from "./button-css.js";
const addContent = css`
  &:before {
    content: '${({
  label
}) => label}';
  }
`;

/**
 * @load ./button.doc.md
 * @component
 * @see ButtonProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-button--default StoryBook}
 * @hideconstructor
 * @subcategory Atoms
 * @section design-system
 */

const Button = styled.button.attrs(props => ({
  className: cssClass('Button', props.className)
}))`
  ${ButtonCSS};
  ${({
  label
}) => label ? addContent : ''};
`;
Button.defaultProps = {
  variant: 'text',
  color: 'primary',
  size: 'md'
};
Button.displayName = 'Button';
export { Button };
export default Button;