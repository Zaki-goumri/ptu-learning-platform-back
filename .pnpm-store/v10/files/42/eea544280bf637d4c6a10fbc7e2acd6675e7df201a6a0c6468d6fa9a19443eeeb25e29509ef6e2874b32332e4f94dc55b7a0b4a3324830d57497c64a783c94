function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from 'react';
import { styled } from "../../../build/utils/styled.js";
import focusShadowStyle from "../../utils/focus-shadow.style.js";
import { CheckboxRadioContainer } from "../check-box/index.js";
const Circle = styled.span`
  display: block;
  width: 8px;
  height: 8px;
  margin-left: -4px;
  margin-top: -4px;
  border-radius: 9999px;
  background: ${({
  theme
}) => theme.colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenRadio = styled.input.attrs({
  type: 'radio'
})`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const radioBackground = (theme, checked, disabled) => {
  if (checked) {
    return disabled ? theme.colors.grey40 : theme.colors.primary100;
  }
  return theme.colors.white;
};
const StyledRadio = styled.span`
  display: inline-block;
  width: 16px;
  cursor: pointer;
  border: 1px solid ${({
  theme,
  checked,
  disabled
}) => checked && !disabled ? theme.colors.primary100 : theme.colors.grey40};
  border-radius: 1000px;
  height: 16px;
  transition: all 150ms;
  position: relative;

  ${HiddenRadio}:focus + & {
    ${({
  theme
}) => `box-shadow: ${focusShadowStyle(theme)}`};
  }
  ${HiddenRadio}:hover + & {
    border-color: ${({
  theme
}) => theme.colors.grey60};
  }
  ${Circle} {
    visibility: ${({
  checked
}) => checked ? 'visible' : 'hidden'};
  }

  background: ${({
  checked,
  theme,
  disabled
}) => radioBackground(theme, checked, disabled)};
`;
/**
 * @typedef {object} RadioProps
 * @alias RadioProps
 * @memberof Radio
 * @property {string} [...] All props default to _radio_ html input like `onChange`,
 *                          `checked` etc.
 */
/**
 /**
 * @classdesc
 *
 * <img src="components/radio.png" />
 *
 * HTML Radio
 *
 * ### Usage
 *
 * ```javascript
 * import { Radio, RadioProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @see RadioProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-radio--default StoryBook}
 * @hideconstructor
 * @subcategory Atoms
 * @example
 * return (
 *   <Box p="xl">
 *      <Radio id="radio1"/>
 *      <Label inline htmlFor="radio1" ml="default">Some example label</Label>
 *   </Box>
 * )
 * @section design-system
 */
const Radio = props => {
  const {
    className,
    checked,
    onChange,
    disabled,
    ...restProps
  } = props;
  const [isChecked, setChecked] = useState(checked ?? false);
  const actuallyChecked = checked ?? isChecked;
  const handleChange = event => {
    setChecked(!event.target.checked);
    if (onChange) {
      onChange(event);
    }
  };
  return /*#__PURE__*/React.createElement(CheckboxRadioContainer, {
    className: className
  }, /*#__PURE__*/React.createElement(HiddenRadio, _extends({
    checked: actuallyChecked,
    onChange: handleChange
    // eslint-disable-next-line @typescript-eslint/ban-types
  }, restProps, {
    disabled: disabled
  })), /*#__PURE__*/React.createElement(StyledRadio, {
    checked: actuallyChecked,
    onClick: event => handleChange && handleChange(event),
    disabled: disabled
  }, /*#__PURE__*/React.createElement(Circle, null)));
};
Radio.displayName = 'Radio';
export { Radio };
export default Radio;