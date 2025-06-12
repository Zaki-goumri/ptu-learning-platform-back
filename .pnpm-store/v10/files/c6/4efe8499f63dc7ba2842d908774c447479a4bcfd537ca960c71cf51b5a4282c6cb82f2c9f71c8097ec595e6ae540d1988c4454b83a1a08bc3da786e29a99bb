function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { PhoneInput, FormGroup } from '@adminjs/design-system';
import React, { useCallback } from 'react';
import { PropertyLabel } from '../utils/property-label/index.js';
import allowOverride from '../../../hoc/allow-override.js';
const Filter = props => {
  const {
    onChange,
    property,
    filter
  } = props;
  const handleChange = useCallback(value => {
    onChange(property.path, value);
  }, []);
  return /*#__PURE__*/React.createElement(FormGroup, {
    variant: "filter"
  }, /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property,
    filter: true
  }), /*#__PURE__*/React.createElement(PhoneInput, _extends({
    id: property.path,
    inputProps: {
      name: `filter-${property.path}`
    },
    onChange: handleChange,
    value: filter[property.path]
  }, property.props)));
};
export default allowOverride(Filter, 'DefaultPhoneFilterProperty');