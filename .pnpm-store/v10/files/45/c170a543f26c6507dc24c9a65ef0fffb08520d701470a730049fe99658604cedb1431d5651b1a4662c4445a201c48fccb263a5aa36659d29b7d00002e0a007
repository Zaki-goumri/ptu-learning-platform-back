function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Link } from 'react-router-dom';
import { Label } from '@adminjs/design-system';
import ViewHelpers from '../../../../backend/utils/view-helpers/view-helpers.js';
import { convertToSubProperty } from './convert-to-sub-property.js';
import allowOverride from '../../../hoc/allow-override.js';
const List = props => {
  const {
    property,
    record,
    resource,
    ItemComponent
  } = props;
  const renderItems = () => /*#__PURE__*/React.createElement(React.Fragment, null, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => {
    const subPropertyWithPath = convertToSubProperty(property, subProperty);
    return /*#__PURE__*/React.createElement("div", {
      key: subPropertyWithPath.path
    }, /*#__PURE__*/React.createElement(Label, {
      inline: true
    }, `${subProperty.label}: `), /*#__PURE__*/React.createElement(ItemComponent, _extends({}, props, {
      property: subPropertyWithPath
    })));
  }));
  const showAction = record.recordActions.find(a => a.name === 'show');
  if (resource.titleProperty.propertyPath === property.propertyPath && showAction) {
    const h = new ViewHelpers();
    const href = h.recordActionUrl({
      resourceId: resource.id,
      recordId: record.id,
      actionName: 'show'
    });
    return /*#__PURE__*/React.createElement(Link, {
      to: href
    }, renderItems());
  }
  return renderItems();
};
export default allowOverride(List, 'DefaultMixedListProperty');