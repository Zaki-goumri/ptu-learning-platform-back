function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { memo } from 'react';
import { CheckBox, FormGroup, FormMessage } from '@adminjs/design-system';
import { recordPropertyIsEqual } from '../record-property-is-equal.js';
import { PropertyLabel } from '../utils/property-label/index.js';
import allowOverride from '../../../hoc/allow-override.js';
import { useTranslation } from '../../../hooks/index.js';
const parseValue = value => !(!value || value === 'false');
const Edit = props => {
  const {
    property,
    onChange,
    record
  } = props;
  const value = parseValue(record.params && record.params[property.path]);
  const error = record.errors && record.errors[property.path];
  const {
    tm
  } = useTranslation();
  const handleChange = () => {
    if (!property.isDisabled) {
      onChange(property.path, !value);
    }
  };
  return /*#__PURE__*/React.createElement(FormGroup, {
    error: !!error
  }, /*#__PURE__*/React.createElement(CheckBox, _extends({
    id: property.path,
    name: property.path,
    onChange: handleChange,
    checked: value,
    disabled: property.isDisabled
  }, property.props)), /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property,
    props: {
      inline: true
    }
  }), /*#__PURE__*/React.createElement(FormMessage, null, error && tm(error.message, property.resourceId)));
};
export default allowOverride( /*#__PURE__*/memo(Edit, recordPropertyIsEqual), 'DefaultBooleanEditProperty');