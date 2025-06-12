import { FormGroup, FormMessage } from '@adminjs/design-system';
import React, { memo } from 'react';
import { recordPropertyIsEqual } from '../record-property-is-equal.js';
import { PropertyLabel } from '../utils/property-label/index.js';
import allowOverride from '../../../hoc/allow-override.js';
import { CurrencyInputWrapper } from './currency-input-wrapper.js';
import { useTranslation } from '../../../hooks/index.js';
const Edit = props => {
  const {
    onChange,
    property,
    record
  } = props;
  const propValue = record.params?.[property.path] ?? '';
  const error = record.errors?.[property.path];
  const {
    tm
  } = useTranslation();
  return /*#__PURE__*/React.createElement(FormGroup, {
    error: Boolean(error)
  }, /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property
  }), /*#__PURE__*/React.createElement(CurrencyInputWrapper, {
    id: property.path,
    initial: propValue,
    options: property.props,
    onChange: value => onChange(property.path, value)
  }), /*#__PURE__*/React.createElement(FormMessage, null, error && tm(error.message, property.resourceId)));
};
export default allowOverride( /*#__PURE__*/memo(Edit, recordPropertyIsEqual), 'DefaultCurrencyEditProperty');