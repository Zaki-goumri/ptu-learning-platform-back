function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useEffect, useState } from 'react';
import { styled, css } from "../../../build/utils/styled.js";
import focusShadowStyle from "../../utils/focus-shadow.style.js";
import { Label } from "../label/index.js";
const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
export const CheckboxRadioContainer = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  & + ${Label} {
    margin-left: ${({
  theme
}) => theme.space.default};
    vertical-align: middle;
    margin-bottom: ${({
  theme
}) => theme.space.sm};
  }
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({
  type: 'checkbox'
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
const checkboxBackground = (theme, checked, disabled) => {
  if (checked) {
    return disabled ? theme.colors.grey40 : theme.colors.primary100;
  }
  return 'transparent';
};
const StyledCheckbox = styled.a`
  display: inline-block;
  width: 16px;
  /* when it is placed within a container setting different font size */
  font-size: 12px;
  border: 1px solid ${({
  theme,
  checked,
  disabled
}) => checked && !disabled ? theme.colors.primary100 : theme.colors.inputBorder};
  height: 16px;
  background: ${({
  checked,
  theme,
  disabled
}) => checkboxBackground(theme, checked, disabled)};
  transition: all 150ms;
  position: relative;
  border-radius: 2px;

  ${HiddenCheckbox}:focus + & {
    ${({
  theme
}) => `box-shadow: ${focusShadowStyle(theme)};`};
  }
  ${HiddenCheckbox}:hover + & {
    border-color: ${({
  theme
}) => theme.colors.grey60};
  }
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
  }

  ${({
  disabled
}) => !disabled && css`
    cursor: pointer;
  `}

  &:after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 24px;
    height: 24px;
    opacity: 0;
    background: ${({
  theme
}) => theme.colors.primary100};
  }
  &:after:before {
    opacity: 0.1;
  }
`;
/**
 * @typedef {object} CheckBoxProps
 * @alias CheckBoxProps
 * @memberof module:@adminjs/design-system.CheckBox
 * @property {string} [...] All props default to _checkbox_ html input like `onChange`,
 *                          `checked` etc.
 */
/**
 * @classdesc
 *
 * <img src="components/checkbox.png" />
 *
 * HTML CheckBox
 *
 * ### Usage
 *
 * ```javascript
 * import { CheckBox, CheckBoxProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-checkbox--default StoryBook}
 * @hideconstructor
 * @subcategory Atoms
 * @example
 * return (
 *   <Box p="xl">
 *      <CheckBox id="checkbox1"/>
 *      <Label inline htmlFor="checkbox1" ml="default">Some example label</Label>
 *   </Box>
 * )
 * @section design-system
 */
const CheckBox = props => {
  const {
    className,
    checked,
    onChange,
    disabled,
    ...restProps
  } = props;
  const [isChecked, setChecked] = useState(checked ?? false);
  const handleChange = event => {
    if (disabled) return;
    if (onChange) {
      onChange(event);
    } else {
      setChecked(!event.target.checked);
    }
  };
  useEffect(() => {
    setChecked(checked ?? false);
  }, [checked]);
  return /*#__PURE__*/React.createElement(CheckboxRadioContainer, {
    className: [className ?? '', 'adminjs_Checkbox'].join(' ')
  }, /*#__PURE__*/React.createElement(HiddenCheckbox, _extends({
    checked: isChecked,
    onChange: handleChange
    // eslint-disable-next-line @typescript-eslint/ban-types
  }, restProps, {
    disabled: disabled
  })), /*#__PURE__*/React.createElement(StyledCheckbox, {
    checked: isChecked,
    disabled: disabled,
    onClick: event => handleChange && handleChange(event)
  }, /*#__PURE__*/React.createElement(Icon, {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))));
};
CheckBox.displayName = 'CheckBox';
export { CheckBox };
export default CheckBox;