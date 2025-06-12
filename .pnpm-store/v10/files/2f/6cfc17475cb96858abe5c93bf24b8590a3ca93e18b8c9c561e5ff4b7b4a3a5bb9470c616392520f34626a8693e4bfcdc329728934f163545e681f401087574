function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable import/no-named-default */
import noop from 'lodash/noop.js';
import React from 'react';
import { default as ReactSelect } from 'react-select';
import { cssClass, filterStyles, selectStyles } from "../../utils/index.js";
import useSelectTheme from "./select-theme.js";
let SelectComponent;
if (ReactSelect.default) {
  SelectComponent = ReactSelect.default;
} else {
  SelectComponent = ReactSelect;
}
export const Select = props => {
  const {
    value,
    onChange,
    variant,
    isMulti,
    ...selectProps
  } = props;
  const {
    theme,
    selectTheme
  } = useSelectTheme();
  const styles = variant === 'filter' ? filterStyles(theme) : selectStyles(theme);
  const handleChange = selected => {
    if (typeof onChange === 'function') onChange(selected);
  };
  return /*#__PURE__*/React.createElement(SelectComponent, _extends({
    className: cssClass('Select'),
    value: value,
    theme: selectTheme,
    styles: styles,
    onChange: handleChange,
    isClearable: true,
    isMulti: isMulti
  }, selectProps));
};
Select.defaultProps = {
  variant: 'default',
  onChange: noop
};
Select.displayName = 'Select';
export default Select;