import { typography, space, variant, color, layout } from 'styled-system';
import { styled } from "../../../build/utils/styled.js";
import contentCSS from "../../utils/content-styles.js";
import { cssClass } from "../../utils/css-class.js";
const variants = variant({
  variants: {
    xs: {
      fontSize: 'xs'
    },
    sm: {
      fontSize: 'sm'
    },
    lg: {
      fontSize: 'lg'
    }
  }
});

/**
 * Prop Types of a Text component.
 * Apart from variant it extends all {@link ColorProps}, {@link SpaceProps} and
 * {@link TypographyProps}
 *
 * @memberof Text
 * @alias TextProps
 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
 *                          and {@link TypographyProps}
 */

/**
 * @classdesc
 *
 * <img src="components/text.png" />
 *
 * Use the Text component to control font size, weight, alignment, and color.
 * By default it is rendered as a `div` but you can change this to other (like `span`)
 * by using `as` prop,
 *
 * ### Usage
 *
 * ```javascript
 * import { Text, TextProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see TextProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-text--default Storybook}
 * @hideconstructor
 * @example <caption>Lorem ipsum</caption>
 * return (
 * <Box>
 *   <Text>
 *    In publishing and graphic design,
 *    Lorem ipsum is a <b>placeholder</b> text commonly used to demonstrate the
 *    visual form of a document or a typeface without relying on meaningful
 *    content.
 *   </Text>
 *   <Text mt="default" variant="sm">This text was from Wikipedia</Text>
 * </Box>
 * )
 * @section design-system
 */
const Text = styled.div`
  ${contentCSS};
  ${typography};
  ${space};
  ${layout};
  ${color};
  ${variants};
`;
Text.defaultProps = {
  className: cssClass('Text')
};
Text.displayName = 'Text';
export { Text };
export default Text;