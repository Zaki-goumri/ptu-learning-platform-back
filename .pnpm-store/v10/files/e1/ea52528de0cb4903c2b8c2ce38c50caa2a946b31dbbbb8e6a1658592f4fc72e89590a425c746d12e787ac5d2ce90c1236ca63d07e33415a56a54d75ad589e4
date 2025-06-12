function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Section, ValueGroup } from '@adminjs/design-system';
import { flat } from '../../../../utils/index.js';
import { convertToSubProperty } from './convert-to-sub-property.js';
import allowOverride from '../../../hoc/allow-override.js';
import { useTranslation } from '../../../hooks/index.js';
const Show = props => {
  const {
    property,
    record,
    ItemComponent
  } = props;
  const {
    translateProperty
  } = useTranslation();
  const items = flat.get(record.params, property.path) || [];
  return /*#__PURE__*/React.createElement(ValueGroup, {
    label: translateProperty(property.label, property.resourceId)
  }, /*#__PURE__*/React.createElement(Section, null, (items || []).map((item, i) => {
    const itemProperty = convertToSubProperty(property, i);
    return /*#__PURE__*/React.createElement(ItemComponent, _extends({}, props, {
      key: itemProperty.path,
      property: itemProperty
    }));
  })));
};
export default allowOverride(Show, 'DefaultArrayShowProperty');