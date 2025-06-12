function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Box, Button, DrawerContent, DrawerFooter, Icon } from '@adminjs/design-system';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import allowOverride from '../../hoc/allow-override.js';
import useRecord from '../../hooks/use-record/use-record.js';
import { useTranslation } from '../../hooks/use-translation.js';
import { getActionElementCss } from '../../utils/index.js';
import ActionHeader from '../app/action-header/action-header.js';
import BasePropertyComponent from '../property-type/index.js';
import { appendForceRefresh } from './utils/append-force-refresh.js';
import LayoutElementRenderer from './utils/layout-element-renderer.js';
const Edit = props => {
  const {
    record: initialRecord,
    resource,
    action
  } = props;
  const {
    record,
    handleChange,
    submit: handleSubmit,
    loading,
    setRecord
  } = useRecord(initialRecord, resource.id);
  const {
    translateButton
  } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    if (initialRecord) {
      setRecord(initialRecord);
    }
  }, [initialRecord]);
  const submit = event => {
    event.preventDefault();
    handleSubmit().then(response => {
      if (response.data.redirectUrl) {
        navigate(appendForceRefresh(response.data.redirectUrl));
      }
    });
    return false;
  };
  const contentTag = getActionElementCss(resource.id, action.name, 'drawer-content');
  const formTag = getActionElementCss(resource.id, action.name, 'form');
  const footerTag = getActionElementCss(resource.id, action.name, 'drawer-footer');
  const buttonTag = getActionElementCss(resource.id, action.name, 'drawer-submit');
  return /*#__PURE__*/React.createElement(Box, {
    as: "form",
    onSubmit: submit,
    flex: true,
    flexDirection: "column",
    "data-css": formTag
  }, /*#__PURE__*/React.createElement(DrawerContent, {
    "data-css": contentTag
  }, action?.showInDrawer ? /*#__PURE__*/React.createElement(ActionHeader, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/React.createElement(LayoutElementRenderer
  // eslint-disable-next-line react/no-array-index-key
  , _extends({
    key: i,
    layoutElement: layoutElement
  }, props, {
    where: "edit",
    onChange: handleChange,
    record: record
  }))) : resource.editProperties.map(property => /*#__PURE__*/React.createElement(BasePropertyComponent, {
    key: property.propertyPath,
    where: "edit",
    onChange: handleChange,
    property: property,
    resource: resource,
    record: record
  }))), /*#__PURE__*/React.createElement(DrawerFooter, {
    "data-css": footerTag
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    type: "submit",
    "data-css": buttonTag,
    "data-testid": "button-save",
    disabled: loading
  }, loading ? /*#__PURE__*/React.createElement(Icon, {
    icon: "Loader",
    spin: true
  }) : null, translateButton('save', resource.id))));
};
const OverridableEdit = allowOverride(Edit, 'DefaultEditAction');
export { OverridableEdit as default, OverridableEdit as Edit, Edit as OriginalEdit };