function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { CurrencyInput } from '@adminjs/design-system';
import React, { useState } from 'react';
import allowOverride from '../../../hoc/allow-override.js';
const CurrencyInputWrapper = props => {
  const {
    id,
    initial,
    onChange,
    options
  } = props;
  const [value, setValue] = useState(initial);
  const onValueChange = currentValue => {
    setValue(currentValue);
    onChange(currentValue);
  };
  return /*#__PURE__*/React.createElement(CurrencyInput, _extends({
    id: id,
    name: id,
    value: value,
    onValueChange: onValueChange
  }, options));
};
const OverridableCurrencyInputWrapper = allowOverride(CurrencyInputWrapper, 'CurrencyPropertyInputWrapper');
export { OverridableCurrencyInputWrapper as CurrencyInputWrapper, OverridableCurrencyInputWrapper as default };