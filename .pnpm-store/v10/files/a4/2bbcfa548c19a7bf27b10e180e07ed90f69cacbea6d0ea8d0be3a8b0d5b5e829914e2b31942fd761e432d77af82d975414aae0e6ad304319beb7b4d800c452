import { space, color, layout, flexbox, border, position, variant, grid, shadow, borderRadius } from 'styled-system';
import { styled } from "../../../build/utils/styled.js";
import { cssClass } from "../../utils/css-class.js";

/**
 * @load ./box-props.doc.md
 * @memberof Box
 * @alias BoxProps
 * @property {string} [...] Other props from {@link SpaceProps}, {@link ColorProps},
 *                          {@link LayoutProps}, {@link FlexboxProps},
 *                          {@link PositionProps} and {@link BorderProps}.
 */

const variants = variant({
  variants: {
    grey: {
      flexGrow: 1,
      bg: 'bg',
      py: 'xl',
      px: ['0', 'xl'],
      className: cssClass(['Box', 'Box_Grey'])
    },
    container: {
      flexGrow: 1,
      bg: 'container',
      py: 'xl',
      px: ['0', 'xl'],
      className: cssClass(['Box', 'Box_Container']),
      borderRadius: 8
    },
    white: {
      px: ['default', 'xxl'],
      py: 'xxl',
      bg: 'white',
      className: cssClass(['Box', 'Box_White'])
    },
    card: {
      p: 'xxl',
      bg: 'white',
      className: cssClass(['Box', 'Box_Card']),
      boxShadow: 'card'
    },
    transparent: {
      px: ['default', 'xxl'],
      py: 'xxl',
      bg: 'transparent',
      className: cssClass(['Box', 'Box_Transparent'])
    }
  }
});

/**
 * @load ./box.doc.md
 * @hideconstructor
 * @component
 * @subcategory Atoms
 * @section design-system
 * @see BoxProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-box--simple-white-gray-wrapper StoryBook}
 */
const Box = styled.section`
  box-sizing: border-box;
  min-width: 0;
  ${({
  flex
}) => flex && typeof flex === 'boolean' ? 'display: flex;' : ''}
  font-family: ${({
  theme
}) => theme.font};
  line-height: ${({
  theme
}) => theme.lineHeights.default};
  font-size: ${({
  theme
}) => theme.fontSizes.default};
  font-weight: normal;
  ${({
  animate
}) => animate ? 'transition: all 500ms;' : ''};

  ${space};
  ${color};
  ${layout};
  ${flexbox};
  ${grid};
  ${border};
  ${borderRadius}
  ${shadow};
  ${position};
  ${variants};
`;
Box.defaultProps = {
  className: cssClass('Box')
};
Box.displayName = 'Box';
export { Box };
export default Box;