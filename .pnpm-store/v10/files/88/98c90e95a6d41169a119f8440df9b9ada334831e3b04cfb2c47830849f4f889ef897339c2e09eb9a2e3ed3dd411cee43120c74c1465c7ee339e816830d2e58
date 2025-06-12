import { SpaceProps, LayoutProps } from 'styled-system';
import { css } from "../../utils/styled";
/**
 * Prop Types of an Input component.
 * Apart from variant it extends all {@link LayoutProps} and {@link SpaceProps}
 *
 * @memberof Input
 * @alias InputProps
 * @property {string} [...] Other props from {@link LayoutProps}, {@link SpaceProps}
 */
export type InputProps = SpaceProps & LayoutProps & {
    borderless?: boolean;
    variant?: 'sm' | 'lg' | 'xl' | 'default' | 'xxl';
};
/**
 * Input CSS Styles which can be reused in another input component with styled-components
 *
 * ### Usage:
 *
 * ```
 * import { InputCSS } from '@adminjs/design-system'
 *
 * const MyStyledInput = styled.input`
 *   ${InputCSS}
 * `
 * ```
 * @memberof Input
 * @alias InputCSS
 */
export declare const InputCSS: ReturnType<typeof css>;
/**
 * @classdesc
 *
 * <img src="components/input.png" />
 *
 * Wrapped `input` html element.
 *
 * ### Usage
 *
 * ```javascript
 * import { Input, InputProps, InputCSS } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see InputProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-input--default Storybook}
 * @hideconstructor
 * @example
 * return (
 *   <Box p="xl">
 *      <Label htmlFor="input1">Some example label</Label>
 *      <Input id="input1" width={1/2} />
 *   </Box>
 * )
 * @section design-system
 */
declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    borderless?: boolean | undefined;
    variant?: "default" | "sm" | "lg" | "xl" | "xxl" | undefined;
}, never>;
export { Input };
export default Input;
