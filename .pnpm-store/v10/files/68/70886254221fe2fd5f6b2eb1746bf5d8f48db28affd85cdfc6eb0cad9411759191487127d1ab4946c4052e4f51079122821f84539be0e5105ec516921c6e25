import { PropsWithChildren } from 'react';
import { SpaceProps } from 'styled-system';
import { NewColorProps as ColorProps } from '../../utils/color-props.js';
/**
 * Prop Types of a Link component.
 * Apart from those explicitly specified below it extends all {@link ColorProps},
 * and {@link SpaceProps}
 *
 * @memberof Link
 * @alias LinkProps
 * @property {string} [...] All props default to _a_ html component like `href`,
 *                          `onClick` etc.
 * @property {string} [...] Other props from {@link ColorProps} and {@link SpaceProps}
 */
export type LinkProps = ColorProps & SpaceProps & {
    /** Defines if link should be uppercase */
    uppercase?: boolean;
    /** Color variant */
    variant?: 'primary' | 'danger' | 'success' | 'info' | 'secondary';
    /** Size variant */
    size?: 'sm' | 'lg';
} & PropsWithChildren;
/**
 * @classdesc
 *
 * <img src="components/link.png" />
 *
 * Styled form of Link element.
 *
 * ### Usage
 *
 * ```javascript
 * import { Link, LinkProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see LinkProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-link--default Storybook}
 * @hideconstructor
 * @example <caption>All color variants</caption>
 * const variants = ['primary', 'danger', 'success', 'info', 'secondary']
 * return (
 * <Box py="xl">
 *   {variants.map(variant => (
 *      <Link href="#" variant={variant} mr="xl">{variant}</Link>
 *   ))}
 * </Box>
 * )
 * @example <caption>With icons</caption>
 * return (
 * <Box py="xl">
 *   <Link href="#" mr="xl">
 *     <Icon icon="Plus" />
 *     With an icon
 *   </Link>
 * </Box>
 * )
 * @section design-system
 */
declare const Link: import("styled-components").StyledComponent<"a", import("styled-components").DefaultTheme, Omit<import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol>, "color"> & {
    color?: string | undefined;
} & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    /** Defines if link should be uppercase */
    uppercase?: boolean | undefined;
    /** Color variant */
    variant?: "success" | "info" | "primary" | "secondary" | "danger" | undefined;
    /** Size variant */
    size?: "sm" | "lg" | undefined;
} & {
    children?: import("react").ReactNode;
}, never>;
export { Link };
export default Link;
