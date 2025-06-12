import React from 'react';
import { FormGroup, Input, Select } from '@adminjs/design-system';
import allowOverride from '../../../hoc/allow-override.js';
import PropertyLabel from '../utils/property-label/property-label.js';
import { useTranslation } from '../../../hooks/use-translation.js';
const Filter = props => {
  const {
    property,
    onChange,
    filter
  } = props;
  const {
    tl
  } = useTranslation();
  const handleInputChange = event => {
    onChange(property.path, event.target.value);
  };
  const handleSelectChange = selected => {
    const value = selected ? selected.value : '';
    onChange(property.path, value);
  };
  const renderInput = () => {
    const filterKey = `filter-${property.path}`;
    const value = filter[property.path] || '';
    if (property.availableValues) {
      const availableValues = property.availableValues.map(v => ({
        ...v,
        label: tl(`${property.path}.${v.value}`, property.resourceId, {
          defaultValue: v.label ?? v.value
        })
      }));
      const selected = availableValues.find(av => av.value === value);
      return /*#__PURE__*/React.createElement(Select, {
        variant: "filter",
        value: typeof selected === 'undefined' ? '' : selected,
        isClearable: true,
        options: availableValues,
        onChange: handleSelectChange
      });
    }
    return /*#__PURE__*/React.createElement(Input, {
      name: filterKey,
      onChange: handleInputChange,
      value: value
    });
  };
  return /*#__PURE__*/React.createElement(FormGroup, {
    variant: "filter"
  }, /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property,
    filter: true
  }), renderInput());
};
export default allowOverride(Filter, 'DefaultFilterProperty');