import React from 'react';
import { space } from 'styled-system';
import { styled } from "../../../build/utils/styled.js";
import { Icon } from "../../atoms/icon/index.js";
import { Text } from "../../atoms/text/index.js";
import { Box } from "../../atoms/box/index.js";
import { cssClass } from "../../utils/css-class.js";

/**
 * Handler which is invoked when user clicks given step
 *
 * @alias OnStepClickHandler
 * @memberof Step
 */

/**
 * @alias StepProps
 * @memberof Step
 */

const Circle = styled(Box)`
  border-width: 1px;
  border-style: solid;
  border-radius: 9999px;
  text-align: center;
`;
Circle.defaultProps = {
  py: 'default',
  px: 'default',
  minWidth: '34px',
  height: '34px'
};
const StyledStep = styled.div`
  flex: 1 1 0px;
  display: flex;
  flex-direction: row;

  & > ${Box} {
    ${({
  disabled
}) => !disabled ? 'cursor: pointer' : ''};
    border-bottom: 2px solid ${({
  active,
  theme
}) => active ? theme.colors.primary100 : 'transparent'};
  }
  
  ${space};
`;

/**
 * @classdesc
 *
 * <img src="components/step.png" />
 *
 * Step represents one of the tab in placed inside {@link Stepper} component.
 * You can use it alone or with before-mentioned {@link Stepper}.
 *
 * ### Usage
 *
 * ```javascript
 * import { Step, StepProps } from '@adminjs/design-system'
 * ```
 *
 *
 * @hideconstructor
 * @see Stepper
 * @see StepProps
 * @see OnStepClickHandler
 * @subcategory Molecules
 * @component
 * @example <caption>Regular step</caption>
 * return (
 *   <Box p="default">
 *     <Step number="1">Normal Step</Step>
 *  </Box>
 * )
 *
 * @example <caption>Active steps</caption>
 * return (
 *   <Box p="default">
 *     <Step number="1" active>I am active</Step>
 *  </Box>
 * )
 *
 * @example <caption>Active steps</caption>
 * return (
 *   <Box p="default">
 *     <Step number="1" completed>This was done !!!</Step>
 *  </Box>
 * )
 *
 * @example <caption>Clickable step</caption>
 * const onClick = () => alert('Why did you click me?')
 *
 * return (
 *   <Box p="default">
 *     <Step number="1" onClick={onClick}>Click me if you dare</Step>
 *  </Box>
 * )
 * @section design-system
 */
const Step = props => {
  const {
    number,
    completed,
    children,
    active,
    disabled,
    onClick,
    className
  } = props;
  return /*#__PURE__*/React.createElement(StyledStep, {
    active: active,
    disabled: disabled || !onClick,
    className: cssClass('Step', className)
  }, /*#__PURE__*/React.createElement(Box, {
    flexShrink: 1,
    flexGrow: 0,
    flex: true,
    flexDirection: "row",
    pt: "lg",
    pb: "default",
    onClick: () => !disabled && onClick && onClick(number)
  }, /*#__PURE__*/React.createElement(Circle, {
    bg: completed ? 'grey40' : 'transparent',
    borderColor: active ? 'primary100' : 'grey40',
    color: active ? 'primary100' : 'grey40'
  }, completed ? /*#__PURE__*/React.createElement(Icon, {
    icon: "Check",
    color: "white"
  }) : number), /*#__PURE__*/React.createElement(Text, {
    my: "sm",
    pl: "default",
    py: "sm",
    color: active || completed ? 'grey100' : 'grey40'
  }, children)));
};
Step.displayName = 'Step';
export { Step };
export default Step;