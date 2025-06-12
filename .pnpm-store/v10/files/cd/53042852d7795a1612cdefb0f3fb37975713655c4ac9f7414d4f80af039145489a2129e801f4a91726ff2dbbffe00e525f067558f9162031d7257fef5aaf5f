import React from 'react';
import { FormGroup, Label, DatePicker } from '@adminjs/design-system';
import * as BackendFilter from '../../../../backend/utils/filter/filter.js';
import { useTranslation } from '../../../hooks/use-translation.js';
import allowOverride from '../../../hoc/allow-override.js';
import PropertyLabel from '../utils/property-label/property-label.js';
const {
  PARAM_SEPARATOR
} = BackendFilter;
const Filter = props => {
  const {
    property,
    filter,
    onChange
  } = props;
  const {
    translateProperty
  } = useTranslation();
  const fromKey = `${property.path}${PARAM_SEPARATOR}from`;
  const toKey = `${property.path}${PARAM_SEPARATOR}to`;
  const fromValue = filter[fromKey];
  const toValue = filter[toKey];
  return /*#__PURE__*/React.createElement(FormGroup, {
    variant: "filter"
  }, /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property,
    filter: true
  }), /*#__PURE__*/React.createElement(Label, null, `- ${translateProperty('from')}: `), /*#__PURE__*/React.createElement(DatePicker, {
    value: fromValue,
    onChange: date => onChange(fromKey, date),
    propertyType: property.type
  }), /*#__PURE__*/React.createElement(Label, {
    mt: "default"
  }, `- ${translateProperty('to')}: `), /*#__PURE__*/React.createElement(DatePicker, {
    value: toValue,
    onChange: date => onChange(toKey, date),
    propertyType: property.type
  }));
};
export default allowOverride(Filter, 'DefaultDatetimeFilterProperty');