function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, memo, useEffect } from 'react';
import { Input, FormGroup, InputGroup, FormMessage, Button, Icon } from '@adminjs/design-system';
import { recordPropertyIsEqual } from '../record-property-is-equal.js';
import { PropertyLabel } from '../utils/property-label/index.js';
import allowOverride from '../../../hoc/allow-override.js';
import { useTranslation } from '../../../hooks/index.js';
const Edit = props => {
  const {
    property,
    record,
    onChange
  } = props;
  const propValue = record.params[property.path];
  const [value, setValue] = useState(propValue);
  const error = record.errors && record.errors[property.path];
  const [isInput, setIsInput] = useState(false);
  const {
    tm
  } = useTranslation();
  useEffect(() => {
    if (value !== propValue) {
      setValue(propValue);
    }
  }, [propValue]);
  return /*#__PURE__*/React.createElement(FormGroup, {
    error: !!error
  }, /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property
  }), /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(Input, _extends({
    type: isInput ? 'input' : 'password',
    className: "input",
    id: property.path,
    name: property.path,
    onChange: event => setValue(event.target.value),
    onBlur: () => onChange(property.path, value),
    onKeyDown: e => e.keyCode === 13 && onChange(property.path, value),
    value: value ?? '',
    disabled: property.isDisabled
  }, property.props)), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    size: "icon",
    onClick: () => setIsInput(!isInput)
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Eye"
  }))), /*#__PURE__*/React.createElement(FormMessage, null, error && tm(error.message, property.resourceId)));
};
export default allowOverride( /*#__PURE__*/memo(Edit, recordPropertyIsEqual), 'DefaultPasswordEditProperty');