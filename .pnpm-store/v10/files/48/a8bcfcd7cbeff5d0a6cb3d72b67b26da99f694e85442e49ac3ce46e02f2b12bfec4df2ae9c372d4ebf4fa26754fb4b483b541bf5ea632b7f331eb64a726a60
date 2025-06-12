import { color, space, typography, variant } from 'styled-system';
import { styled } from "../../../build/utils/styled.js";
import { cssClass } from "../../utils/css-class.js";

/**
 * @load ./badge-props.doc.md
 * @memberof Badge
 * @alias BadgeProps
 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
 *                          and {@link TypographyProps}
 */

const variantStyle = (variantColor, props) => ({
  bg: variantColor,
  borderColor: variantColor,
  color: props.outline ? variantColor : 'white'
});
const colorVariant = props => variant({
  variants: {
    primary: variantStyle('primary100', props),
    danger: variantStyle('error', props),
    success: variantStyle('success', props),
    info: variantStyle('info', props),
    secondary: variantStyle('accent', props),
    light: variantStyle('light', props),
    default: {}
  }
});
const sizeVariants = variant({
  prop: 'size',
  variants: {
    sm: {
      py: 'xs'
    },
    lg: {
      py: '11px',
      px: '14px'
    },
    default: {}
  }
});

/**
 * @load ./badge.doc.md
 * @see BadgeProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-badge--default StoryBook}
 * @component
 * @hideconstructor
 * @section design-system
 * @subcategory Atoms
 */
const Badge = styled.span`
  border-radius: 20px;
  border: 1px solid ${({
  theme
}) => theme.colors.grey40};
  color: ${({
  outline,
  theme
}) => outline ? theme.colors.grey60 : theme.colors.white};
  vertical-align: middle;
  font-family: ${({
  theme
}) => theme.font};
  display: inline;
  white-space: nowrap;

  ${space};
  ${color};
  ${typography};
  ${props => colorVariant(props)};
  ${sizeVariants};
  ${({
  outline
}) => outline ? 'background: transparent;' : ''}
`;
Badge.defaultProps = {
  px: 'default',
  py: 'sm',
  fontSize: 'sm',
  bg: 'grey40',
  className: cssClass('Badge')
};
Badge.displayName = 'Badge';
export { Badge };
export default Badge;