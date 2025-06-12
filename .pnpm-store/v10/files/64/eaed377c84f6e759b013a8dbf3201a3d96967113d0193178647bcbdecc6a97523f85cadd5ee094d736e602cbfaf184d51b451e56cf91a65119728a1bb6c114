import { color, space, typography, variant } from 'styled-system';
import { styled, css } from "../../../build/utils/styled.js";
import { cssClass } from "../../utils/css-class.js";
import themeGet from "../../utils/theme-get.js";
const labelVariants = variant({
  variants: {
    primary: {
      color: 'primary100',
      [`& .${cssClass('Icon')} svg`]: {
        stroke: 'primary100'
      }
    },
    danger: {
      color: 'error',
      [`& .${cssClass('Icon')} svg`]: {
        stroke: 'error'
      }
    },
    success: {
      color: 'success',
      [`& .${cssClass('Icon')} svg`]: {
        stroke: 'success'
      }
    },
    info: {
      color: 'info',
      [`& .${cssClass('Icon')} svg`]: {
        stroke: 'info'
      }
    },
    secondary: {
      color: 'accent',
      [`& .${cssClass('Icon')} svg`]: {
        stroke: 'accent'
      }
    },
    light: {
      color: 'grey60',
      mb: 'sm',
      fontWeight: 'light',
      [`& .${cssClass('Icon')} svg`]: {
        stroke: 'grey60'
      }
    },
    default: {}
  }
});

/**
 * Prop Types of a Label component.
 * Apart from those explicitly specified below it extends all {@link ColorProps},
 * {@link SpaceProps} and {@link TypographyProps}
 *
 * @memberof Label
 * @alias LabelProps
 * @property {string} [...] All props default to _label_ html component like `htmlFor`,
 *                          `id` etc.
 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
 *                          and {@link TypographyProps}
 */

const setDisabled = ({
  disabled,
  theme
}) => disabled ? css`
    color: ${theme.colors.grey40};
    & .${cssClass('Icon')} svg {
      stroke: ${theme.colors.grey40};
    }
  ` : css``;

/**
 * @classdesc
 *
 * <img src="components/label.png" />
 *
 * Styled form of **label** element.
 *
 * ### Usage
 *
 * ```javascript
 * import { Label, LabelProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see LabelProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-label--default Storybook}
 * @hideconstructor
 * @example <caption>2 Different versions</caption>
 * return (
 * <Box p="xl">
 *   <Text>
 *     <Label uppercase>Some uppercase label</Label>
 *   </Text>
 *   <Text mt="default">
 *     <Label required>Label for required field</Label>
 *   </Text>
 * </Box>
 * )
 * @section design-system
 */
const Label = styled.label`
  display: ${({
  inline
}) => inline ? 'inline-block' : 'block'};
  font-family: ${themeGet('font')};
  font-size: ${props => themeGet('fontSizes', props.size === 'lg' ? 'md' : 'sm')(props)};
  line-height: ${themeGet('lineHeights', 'default')};
  margin-bottom: ${({
  theme,
  inline
}) => inline ? '0' : theme.space.default};

  &:before {
    content: "${({
  required
}) => required ? '*' : ''}";
    color: ${themeGet('colors', 'primary100')};
    margin-right: ${themeGet('space', 'sm')};
    display: ${({
  required
}) => required ? 'block-inline' : 'none'};
  }

  & > .${cssClass('Icon')}:first-child {
    margin-right: ${themeGet('space', 'md')};
  }

  ${({
  uppercase
}) => uppercase ? 'text-transform: uppercase;' : ''}
  ${color};
  ${typography};
  ${space};
  ${labelVariants};
  ${props => setDisabled(props)};
`;
Label.defaultProps = {
  className: cssClass('Label')
};
Label.displayName = 'Label';
export { Label };
export default Label;