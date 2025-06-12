function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useEffect, useMemo, memo } from 'react';
import { FormGroup, FormMessage, SelectAsync } from '@adminjs/design-system';
import ApiClient from '../../../utils/api-client.js';
import { PropertyLabel } from '../utils/property-label/index.js';
import { flat } from '../../../../utils/flat/index.js';
import { recordPropertyIsEqual } from '../record-property-is-equal.js';
import allowOverride from '../../../hoc/allow-override.js';
const Edit = props => {
  const {
    onChange,
    property,
    record
  } = props;
  const {
    reference: resourceId
  } = property;
  if (!resourceId) {
    throw new Error(`Cannot reference resource in property '${property.path}'`);
  }
  const handleChange = selected => {
    if (selected) {
      onChange(property.path, selected.value, selected.record);
    } else {
      onChange(property.path, null);
    }
  };
  const loadOptions = async inputValue => {
    const api = new ApiClient();
    const optionRecords = await api.searchRecords({
      resourceId,
      query: inputValue
    });
    return optionRecords.map(optionRecord => ({
      value: optionRecord.id,
      label: optionRecord.title,
      record: optionRecord
    }));
  };
  const error = record?.errors[property.path];
  const selectedId = useMemo(() => flat.get(record?.params, property.path), [record]);
  const [loadedRecord, setLoadedRecord] = useState();
  const [loadingRecord, setLoadingRecord] = useState(0);
  useEffect(() => {
    if (selectedId) {
      setLoadingRecord(c => c + 1);
      const api = new ApiClient();
      api.recordAction({
        actionName: 'show',
        resourceId,
        recordId: selectedId
      }).then(({
        data
      }) => {
        setLoadedRecord(data.record);
      }).finally(() => {
        setLoadingRecord(c => c - 1);
      });
    }
  }, [selectedId, resourceId]);
  const selectedValue = loadedRecord;
  const selectedOption = selectedId && selectedValue ? {
    value: selectedValue.id,
    label: selectedValue.title
  } : {
    value: '',
    label: ''
  };
  return /*#__PURE__*/React.createElement(FormGroup, {
    error: Boolean(error)
  }, /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property
  }), /*#__PURE__*/React.createElement(SelectAsync, _extends({
    cacheOptions: true,
    value: selectedOption,
    defaultOptions: true,
    loadOptions: loadOptions,
    onChange: handleChange,
    isClearable: true,
    isDisabled: property.isDisabled,
    isLoading: !!loadingRecord
  }, property.props)), /*#__PURE__*/React.createElement(FormMessage, null, error?.message));
};
export default allowOverride( /*#__PURE__*/memo(Edit, recordPropertyIsEqual), 'DefaultReferenceEditProperty');