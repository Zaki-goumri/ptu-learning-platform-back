import { SpaceProps, TypographyProps } from 'styled-system';
import { VariantType } from '../../theme.js';
import { NewColorProps as ColorProps } from '../../utils/color-props.js';
/**
 * @load ./badge-props.doc.md
 * @memberof Badge
 * @alias BadgeProps
 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
 *                          and {@link TypographyProps}
 */
export type BadgeProps = SpaceProps & TypographyProps & ColorProps & {
    /**
     * Color variant
     */
    variant?: VariantType;
    /**
     * Outline version
     */
    outline?: boolean;
    /**
     * Size variant
     */
    size?: 'sm' | 'lg' | 'default';
};
/**
 * @load ./badge.doc.md
 * @see BadgeProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-badge--default StoryBook}
 * @component
 * @hideconstructor
 * @section design-system
 * @subcategory Atoms
 */
declare const Badge: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & TypographyProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & Omit<import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol>, "color"> & {
    color?: string | undefined;
} & {
    /**
     * Color variant
     */
    variant?: VariantType | undefined;
    /**
     * Outline version
     */
    outline?: boolean | undefined;
    /**
     * Size variant
     */
    size?: "default" | "sm" | "lg" | undefined;
}, never>;
export { Badge };
export default Badge;
