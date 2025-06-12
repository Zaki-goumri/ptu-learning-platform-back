function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, memo, useEffect } from 'react';
import { Input, FormMessage, FormGroup, Select } from '@adminjs/design-system';
import { recordPropertyIsEqual } from '../record-property-is-equal.js';
import { PropertyLabel } from '../utils/property-label/index.js';
import allowOverride from '../../../hoc/allow-override.js';
import { useTranslation } from '../../../hooks/index.js';
const Edit = props => {
  const {
    property,
    record
  } = props;
  const error = record.errors?.[property.path];
  const {
    tm
  } = useTranslation();
  return /*#__PURE__*/React.createElement(FormGroup, {
    error: Boolean(error)
  }, /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property
  }), property.availableValues ? /*#__PURE__*/React.createElement(SelectEdit, props) : /*#__PURE__*/React.createElement(TextEdit, props), /*#__PURE__*/React.createElement(FormMessage, null, error && tm(error.message, property.resourceId)));
};
const SelectEdit = props => {
  const {
    record,
    property,
    onChange
  } = props;
  const {
    tl
  } = useTranslation();
  if (!property.availableValues) {
    return null;
  }
  const propValue = record.params?.[property.path] ?? property.props.value ?? '';
  // eslint-disable-next-line max-len
  const availableValues = property.availableValues.map(v => ({
    ...v,
    label: tl(`${property.path}.${v.value}`, property.resourceId, {
      defaultValue: v.label ?? v.value
    })
  }));
  // eslint-disable-next-line eqeqeq
  const selected = availableValues.find(av => av.value == propValue);
  return /*#__PURE__*/React.createElement(Select, _extends({
    value: selected,
    options: availableValues,
    onChange: s => onChange(property.path, s?.value ?? ''),
    isDisabled: property.isDisabled
  }, property.props));
};
const TextEdit = props => {
  const {
    property,
    record,
    onChange
  } = props;
  const propValue = record.params?.[property.path] ?? property.props.value ?? '';
  const [value, setValue] = useState(propValue);
  useEffect(() => {
    if (value !== propValue) {
      setValue(propValue);
    }
  }, [propValue]);
  return /*#__PURE__*/React.createElement(Input, _extends({
    id: property.path,
    name: property.path,
    required: property.isRequired,
    onChange: e => setValue(e.target.value),
    onBlur: () => onChange(property.path, value)
    // handle clicking ENTER
    ,
    onKeyDown: e => e.keyCode === 13 && onChange(property.path, value),
    value: value,
    disabled: property.isDisabled
  }, property.props));
};
export default allowOverride( /*#__PURE__*/memo(Edit, recordPropertyIsEqual), 'DefaultEditProperty');