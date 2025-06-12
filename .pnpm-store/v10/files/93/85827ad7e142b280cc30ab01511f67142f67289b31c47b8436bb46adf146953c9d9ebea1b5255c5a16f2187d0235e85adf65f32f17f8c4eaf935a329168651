function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { memo, useState, useEffect } from 'react';
import { Input, FormGroup, FormMessage } from '@adminjs/design-system';
import { recordPropertyIsEqual } from '../record-property-is-equal.js';
import { PropertyLabel } from '../utils/property-label/index.js';
import allowOverride from '../../../hoc/allow-override.js';
import { useTranslation } from '../../../hooks/index.js';
const Edit = props => {
  const {
    onChange,
    property,
    record
  } = props;
  const propValue = record.params?.[property.path] ?? '';
  const [value, setValue] = useState(propValue);
  const error = record.errors?.[property.path];
  const {
    tm
  } = useTranslation();
  useEffect(() => {
    if (value !== propValue) {
      setValue(propValue);
    }
  }, [propValue]);
  return /*#__PURE__*/React.createElement(FormGroup, {
    error: Boolean(error)
  }, /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property
  }), /*#__PURE__*/React.createElement(Input, _extends({
    as: "textarea",
    rows: (value.match(/\n/g) || []).length + 1,
    id: property.path,
    name: property.path,
    onChange: e => setValue(e.target.value),
    onBlur: () => onChange(property.path, value),
    value: value,
    disabled: property.isDisabled
  }, property.props)), /*#__PURE__*/React.createElement(FormMessage, null, error && tm(error.message, property.resourceId)));
};
export default allowOverride( /*#__PURE__*/memo(Edit, recordPropertyIsEqual), 'DefaultTextareaEditProperty');