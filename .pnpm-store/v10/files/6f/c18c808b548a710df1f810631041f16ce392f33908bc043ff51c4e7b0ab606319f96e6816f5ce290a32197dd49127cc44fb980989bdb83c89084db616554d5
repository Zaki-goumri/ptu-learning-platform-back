/// <reference types="react" resolution-mode="require"/>
/**
 * @classdesc
 *
 * <img src="components/stepper.png" />
 *
 * It provides wizard workflow where user can go through a couple of steps.
 * Stepper makes sense when you use it along with {@link Step} component.
 *
 * It receives all the same props as {@link Box} - {@link BoxProps}.
 *
 * ### Usage
 *
 * ```javascript
 * import { Stepper, StepperProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-stepper--clickable-steps Storybook}
 * @example <caption>Clickable steps</caption>
 * const { useState } = React
 * const steps = [{
 *   number: 1, label: "Do this first",
 * }, {
 *   number: 2, label: "Don't forget this",
 * }, {
 *   number: 3, label: "And finally this",
 * }]
 * const ComponentWithStepper = () => {
 *   const [currentStep, setCurrentStep] = useState(1)
 *   return (
 *   <Box>
 *     <Stepper>
 *     {steps.map(step => (
 *        <Step
 *          active={currentStep === step.number}
 *          completed={currentStep > step.number}
 *          onClick={setCurrentStep}
 *          number={step.number}
 *        >
 *          {step.label}
 *        </Step>
 *     ))}
 *     </Stepper>
 *   </Box>
 *   )
 * }
 *
 * return (<ComponentWithStepper />)
 *
 * @example <caption>Steps with bottom navigation</caption>
 * const { useState } = React
 * const steps = [{
 *   number: 1, label: "Do this first",
 * }, {
 *   number: 2, label: "Don't forget this",
 * }, {
 *   number: 3, label: "And finally this",
 * }]
 * const ComponentWithStepper = () => {
 *   const [currentStep, setCurrentStep] = useState(1)
 *   return (
 *   <Box>
 *     <Stepper>
 *     {steps.map(step => (
 *        <Step
 *          active={currentStep === step.number}
 *          completed={currentStep > step.number}
 *          number={step.number}
 *        >
 *          {step.label}
 *        </Step>
 *     ))}
 *     </Stepper>
 *     <Box mt="xl">
 *       <Button
 *         disabled={currentStep === 1}
 *         mr="default"
 *         onClick={() => setCurrentStep(currentStep - 1)}
 *       >
 *         Previous Step
 *       </Button>
 *       <Button
 *         disabled={currentStep === 3}
 *         variant="primary"
 *         onClick={() => setCurrentStep(currentStep + 1)}
 *       >
 *         Next Step
 *       </Button>
 *     </Box>
 *   </Box>
 *   )
 * }
 *
 * return (<ComponentWithStepper />)
 *
 * @section design-system
 */
declare const Stepper: import("styled-components").StyledComponent<"section", import("styled-components").DefaultTheme, {
    children?: import("react").ReactNode;
} & import("styled-system").BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & import("styled-system").BorderRadiusProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & Omit<import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol>, "color"> & {
    color?: string | undefined;
} & import("styled-system").LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & Omit<import("styled-system").FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>, "flex"> & import("styled-system").PositionProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").ShadowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    flex?: boolean | import("styled-system").ResponsiveValue<import("csstype").Property.Flex<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    variant?: "grey" | "transparent" | "white" | "card" | "container" | undefined;
    animate?: boolean | undefined;
    className?: string | undefined;
}, never>;
export { Stepper };
export default Stepper;
