import React from 'react';
import { ValueGroup } from '@adminjs/design-system';
import allowOverride from '../../../hoc/allow-override.js';
import { useTranslation } from '../../../hooks/index.js';
const Show = props => {
  const {
    property,
    record
  } = props;
  const {
    translateProperty
  } = useTranslation();
  const value = record.params[property.path] || '';
  return /*#__PURE__*/React.createElement(ValueGroup, {
    label: translateProperty(property.label, property.resourceId)
  }, value.split(/(?:\r\n|\r|\n)/g).map((line, i) =>
  /*#__PURE__*/
  // eslint-disable-next-line react/no-array-index-key
  React.createElement(React.Fragment, {
    key: i
  }, line, /*#__PURE__*/React.createElement("br", null))));
};
export default allowOverride(Show, 'DefaultTextareaShowProperty');