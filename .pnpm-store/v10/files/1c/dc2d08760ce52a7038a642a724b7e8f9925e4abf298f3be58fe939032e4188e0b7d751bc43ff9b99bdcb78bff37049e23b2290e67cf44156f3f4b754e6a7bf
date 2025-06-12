function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Button, Icon } from '@adminjs/design-system';
import { useTranslation } from '../../../hooks/index.js';
const AddNewItemButton = props => {
  const {
    resource,
    property,
    ...btnProps
  } = props;
  const {
    translateProperty,
    translateButton
  } = useTranslation();
  const label = translateProperty(`${property.path}.addNewItem`, resource.id, {
    defaultValue: translateButton('addNewItem', resource.id)
  });
  return /*#__PURE__*/React.createElement(Button, _extends({
    type: "button",
    variant: "outlined"
  }, btnProps), /*#__PURE__*/React.createElement(Icon, {
    icon: "Plus"
  }), label);
};
export default AddNewItemButton;