import React from 'react';
import { PhoneInputProps as ReactPhoneInputProps } from 'react-phone-input-2';
import { TypographyProps } from 'styled-system';
import { InputProps } from '../input/index.js';
/**
 * Prop Types of a PhoneInput component.
 * CurrencyInput is based on `react-currency-input-field` @see {@link https://github.com/bl00mber/react-phone-input-2 React Phone Input Field Component}
 * It extends all {@link SpaceProps}, {@link TypographyProps} and {@link LayoutProps} and {@link https://github.com/bl00mber/react-phone-input-2#options React Phone Input Field Component Props}
 * @memberof PhoneInput
 * @alias PhoneInputProps
 * @property {string} [...] All props default to _phoneinput_ html component like `onChange`,
 *                          `value` etc.
 * @property {string} [...] Props from {@link SpaceProps}, {@link TypographyProps}
 *                          and {@link LayoutProps} + they extend {@link InputProps}
 */
export type PhoneInputProps = ReactPhoneInputProps & TypographyProps & InputProps & React.HTMLAttributes<HTMLDivElement>;
/**
 * @classdesc
 *
 * Wrapped `phoneinput` html element.
 *
 * ### Usage
 *
 * ```ts
 * import { PhoneInput, PhoneInputProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-phoneinput--default Storybook}
 * @see PhoneInputProps
 * @hideconstructor
 * @example
 * return (
 *   <Box p="xl">
 *      <Label htmlFor="phoneinput1">Some example label</Label>
 *      <PhoneInput id="phoneinput1" onChange={...} />;
 *   </Box>
 * )
 * @section design-system
 */
declare const PhoneInput: import("styled-components").StyledComponent<any, import("styled-components").DefaultTheme, object & ReactPhoneInputProps & TypographyProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    borderless?: boolean | undefined;
    variant?: "default" | "sm" | "lg" | "xl" | "xxl" | undefined;
} & React.HTMLAttributes<HTMLDivElement>, string | number | symbol>;
export { PhoneInput };
export default PhoneInput;
