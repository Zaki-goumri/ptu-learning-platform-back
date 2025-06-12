import React from 'react';
import { FormGroup, Select } from '@adminjs/design-system';
import mapValue from './map-value.js';
import allowOverride from '../../../hoc/allow-override.js';
import PropertyLabel from '../utils/property-label/property-label.js';
import { useTranslation } from '../../../hooks/index.js';
const boolValue = s => {
  if (/true/i.test(s)) {
    return true;
  }
  return false;
};
const Filter = props => {
  const {
    property,
    filter = {},
    onChange
  } = props;
  const {
    tl
  } = useTranslation();
  const value = typeof filter[property.path] === 'undefined' ? '' : boolValue(filter[property.path]);
  const options = [{
    value: true,
    label: tl(`${property.path}.true`, property.resourceId, {
      defaultValue: mapValue(true)
    })
  }, {
    value: false,
    label: tl(`${property.path}.false`, property.resourceId, {
      defaultValue: mapValue(false)
    })
  }];
  const selected = options.find(o => o.value === value);
  const handleChange = s => {
    const newValue = s ? s.value : undefined;
    onChange(property.path, newValue);
  };
  return /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property,
    filter: true
  }), /*#__PURE__*/React.createElement(Select, {
    variant: "filter",
    value: typeof selected === 'undefined' ? '' : selected,
    isClearable: true,
    options: options,
    onChange: handleChange
  }));
};
export default allowOverride(Filter, 'DefaultBooleanFilterProperty');