import truncate from 'lodash/truncate.js';
import React from 'react';
import allowOverride from '../../../hoc/allow-override.js';
const stripHtml = html => {
  const el = window.document.createElement('DIV');
  el.innerHTML = html;
  return el.textContent || el.innerText || '';
};
const List = props => {
  const {
    property,
    record
  } = props;
  const maxLength = property.custom?.maxLength || 15;
  const value = record.params[property.path] || '';
  const textValue = stripHtml(value);
  return /*#__PURE__*/React.createElement(React.Fragment, null, truncate(textValue, {
    length: maxLength,
    separator: ' '
  }));
};
export default allowOverride(List, 'DefaultReferenceListProperty');