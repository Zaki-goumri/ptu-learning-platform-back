function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable import/no-named-default */
import noop from 'lodash/noop.js';
import React from 'react';
import { default as ReactAsyncSelect } from 'react-select/async';
import useSelectTheme from "./select-theme.js";
import { cssClass, filterStyles, selectStyles } from "../../utils/index.js";
let SelectComponent;
if (ReactAsyncSelect.default) {
  SelectComponent = ReactAsyncSelect.default;
} else {
  SelectComponent = ReactAsyncSelect;
}
export const SelectAsync = props => {
  const {
    value,
    onChange,
    variant,
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
    theme: selectTheme,
    value: value,
    styles: styles,
    onChange: handleChange,
    isClearable: true
  }, selectProps));
};
SelectAsync.defaultProps = {
  variant: 'default',
  onChange: noop
};
SelectAsync.displayName = 'SelectAsync';
export default SelectAsync;