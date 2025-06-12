import { PropsWithChildren } from 'react';
import { SpaceProps, LayoutProps, FlexboxProps, BorderProps, PositionProps, ShadowProps, BorderRadiusProps } from 'styled-system';
import { NewColorProps as ColorProps } from '../../utils/color-props.js';
type FlexboxFlexProp = boolean | FlexboxProps['flex'];
/**
 * @load ./box-props.doc.md
 * @memberof Box
 * @alias BoxProps
 * @property {string} [...] Other props from {@link SpaceProps}, {@link ColorProps},
 *                          {@link LayoutProps}, {@link FlexboxProps},
 *                          {@link PositionProps} and {@link BorderProps}.
 */
export type BoxProps = PropsWithChildren & BorderProps & BorderRadiusProps & ColorProps & LayoutProps & Omit<FlexboxProps, 'flex'> & PositionProps & ShadowProps & SpaceProps & {
    /** If box should be rendered as flex. You can pass boolean or FlexboxProps['flex'] */
    flex?: FlexboxFlexProp;
    /** Box variants */
    variant?: 'grey' | 'white' | 'card' | 'transparent' | 'container';
    /** If set to true it makes css changes as 500ms transitions */
    animate?: boolean;
    /** Optional class name passed down to the wrapper */
    className?: string;
};
/**
 * @load ./box.doc.md
 * @hideconstructor
 * @component
 * @subcategory Atoms
 * @section design-system
 * @see BoxProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-box--simple-white-gray-wrapper StoryBook}
 */
declare const Box: import("styled-components").StyledComponent<"section", import("styled-components").DefaultTheme, {
    children?: import("react").ReactNode;
} & BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & BorderRadiusProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & Omit<import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol>, "color"> & {
    color?: string | undefined;
} & LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & Omit<FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>, "flex"> & PositionProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & ShadowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    /** If box should be rendered as flex. You can pass boolean or FlexboxProps['flex'] */
    flex?: FlexboxFlexProp;
    /** Box variants */
    variant?: "grey" | "transparent" | "white" | "card" | "container" | undefined;
    /** If set to true it makes css changes as 500ms transitions */
    animate?: boolean | undefined;
    /** Optional class name passed down to the wrapper */
    className?: string | undefined;
}, never>;
export { Box };
export default Box;
