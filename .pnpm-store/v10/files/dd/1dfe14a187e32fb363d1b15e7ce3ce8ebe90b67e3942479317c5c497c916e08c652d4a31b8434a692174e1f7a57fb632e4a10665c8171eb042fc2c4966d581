import React, { useState } from 'react';
import { FormGroup, SelectAsync } from '@adminjs/design-system';
import ApiClient from '../../../utils/api-client.js';
import allowOverride from '../../../hoc/allow-override.js';
import PropertyLabel from '../utils/property-label/property-label.js';
const Filter = props => {
  const {
    property,
    filter,
    onChange
  } = props;
  const [options, setOptions] = useState([]);
  const api = new ApiClient();
  const handleChange = selected => {
    onChange(property.path, selected ? selected.value : '');
  };
  const loadOptions = async inputValue => {
    const records = await api.searchRecords({
      resourceId: property.reference,
      query: inputValue
    });
    const loadedOptions = records.map(r => ({
      value: r.id,
      label: r.title
    }));
    setOptions(loadedOptions);
    return loadedOptions;
  };
  const value = typeof filter[property.path] === 'undefined' ? '' : filter[property.path];
  const selected = (options || []).find(o => String(o.value) === String(value));
  return /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property,
    filter: true
  }), /*#__PURE__*/React.createElement(SelectAsync, {
    variant: "filter",
    value: typeof selected === 'undefined' ? '' : selected,
    isClearable: true,
    cacheOptions: true,
    loadOptions: loadOptions,
    onChange: handleChange,
    defaultOptions: true
  }));
};
export default allowOverride(Filter, 'DefaultReferenceFilterProperty');