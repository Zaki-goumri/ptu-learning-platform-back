import React from 'react';
import { Section, FormGroup, Input, Box, ValueGroup } from '@adminjs/design-system';
import { flat } from '../../../../utils/flat/index.js';
import { useTranslation } from '../../../hooks/use-translation.js';
const ShowKeyValuePair = props => {
  const {
    objectValue,
    objectKey
  } = props;
  const {
    tm
  } = useTranslation();
  return /*#__PURE__*/React.createElement(Box, {
    flex: true,
    mb: "lg"
  }, /*#__PURE__*/React.createElement(FormGroup, {
    mr: "lg",
    mb: "0px"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: tm('keyPlaceholder'),
    value: objectKey,
    disabled: true
  })), /*#__PURE__*/React.createElement(FormGroup, {
    mb: "0px"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: tm('valuePlaceholder'),
    value: objectValue,
    disabled: true
  })));
};
const Show = props => {
  const {
    property,
    record
  } = props;
  const objectValue = flat.get(record.params, property.path) ?? {};
  return /*#__PURE__*/React.createElement(ValueGroup, {
    label: property.label
  }, /*#__PURE__*/React.createElement(Section, null, Object.entries(objectValue).map(([key, value]) => /*#__PURE__*/React.createElement(ShowKeyValuePair, {
    key: key,
    objectValue: value,
    objectKey: key
  }))));
};
export default Show;