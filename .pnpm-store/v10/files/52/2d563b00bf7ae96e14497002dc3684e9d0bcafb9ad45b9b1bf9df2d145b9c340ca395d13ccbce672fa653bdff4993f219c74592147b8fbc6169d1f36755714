import { FormGroup, FormMessage, RichTextEditor, TinyMCE } from '@adminjs/design-system';
import React, { memo, useCallback } from 'react';
import { recordPropertyIsEqual } from '../record-property-is-equal.js';
import { PropertyLabel } from '../utils/property-label/index.js';
import allowOverride from '../../../hoc/allow-override.js';
const Edit = props => {
  const {
    property,
    record,
    onChange
  } = props;
  const value = record.params?.[property.path];
  const error = record.errors && record.errors[property.path];
  const {
    custom = {}
  } = property;
  const {
    variant = 'default'
  } = custom;
  const handleUpdate = useCallback(newValue => {
    onChange(property.path, newValue);
  }, []);
  if (variant === 'tinymce') {
    return /*#__PURE__*/React.createElement(FormGroup, {
      error: Boolean(error)
    }, /*#__PURE__*/React.createElement(PropertyLabel, {
      property: property
    }), /*#__PURE__*/React.createElement(TinyMCE, {
      value: value,
      onChange: handleUpdate,
      options: property.props
    }), /*#__PURE__*/React.createElement(FormMessage, null, error?.message));
  }
  return /*#__PURE__*/React.createElement(FormGroup, {
    error: Boolean(error)
  }, /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property
  }), /*#__PURE__*/React.createElement(RichTextEditor, {
    value: value,
    onChange: handleUpdate,
    options: property.props
  }), /*#__PURE__*/React.createElement(FormMessage, null, error?.message));
};
export default allowOverride( /*#__PURE__*/memo(Edit, recordPropertyIsEqual), 'DefaultRichtextEditProperty');