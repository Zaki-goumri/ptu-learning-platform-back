function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Box, Button, DrawerContent, DrawerFooter, Icon } from '@adminjs/design-system';
import pick from 'lodash/pick.js';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import allowOverride from '../../hoc/allow-override.js';
import { useQueryParams } from '../../hooks/use-query-params.js';
import useRecord from '../../hooks/use-record/use-record.js';
import { useTranslation } from '../../hooks/use-translation.js';
import { getActionElementCss } from '../../utils/index.js';
import ActionHeader from '../app/action-header/action-header.js';
import BasePropertyComponent from '../property-type/index.js';
import { appendForceRefresh } from './utils/append-force-refresh.js';
import LayoutElementRenderer from './utils/layout-element-renderer.js';
const New = props => {
  const {
    record: initialRecord,
    resource,
    action
  } = props;
  const {
    record,
    handleChange,
    submit,
    loading,
    setRecord
  } = useRecord(initialRecord, resource.id);
  const {
    translateButton
  } = useTranslation();
  const navigate = useNavigate();
  const {
    parsedQuery,
    redirectUrl
  } = useQueryParams();
  useEffect(() => {
    if (initialRecord) {
      setRecord(initialRecord);
    }
  }, [initialRecord, parsedQuery]);
  useEffect(() => {
    if (parsedQuery) {
      const resourceProperties = pick(parsedQuery, Object.keys(resource.properties));
      if (Object.keys(resourceProperties).length) {
        setRecord({
          ...record,
          params: {
            ...record.params,
            ...resourceProperties
          }
        });
      }
    }
  }, [parsedQuery]);
  const handleSubmit = event => {
    event.preventDefault();
    if (!event.currentTarget) return false;
    submit().then(response => {
      if (response.data.redirectUrl) {
        navigate(appendForceRefresh(response.data.redirectUrl));
      }
      // if record has id === has been created
      if (response.data.record.id && !Object.keys(response.data.record.errors).length) {
        handleChange({
          params: {},
          populated: {},
          errors: {}
        });
      }
    });
    return false;
  };
  const handleCancel = () => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  };
  const contentTag = getActionElementCss(resource.id, action.name, 'drawer-content');
  const formTag = getActionElementCss(resource.id, action.name, 'form');
  const footerTag = getActionElementCss(resource.id, action.name, 'drawer-footer');
  const buttonTag = getActionElementCss(resource.id, action.name, 'drawer-submit');
  const cancelButtonTag = getActionElementCss(resource.id, action.name, 'drawer-cancel');
  return /*#__PURE__*/React.createElement(Box, {
    as: "form",
    flex: true,
    flexGrow: 1,
    onSubmit: handleSubmit,
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
  }, /*#__PURE__*/React.createElement(Box, {
    flex: true,
    style: {
      gap: 16
    }
  }, redirectUrl && /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    type: "button",
    onClick: handleCancel,
    "data-css": cancelButtonTag,
    "data-testid": "button-cancel"
  }, translateButton('cancel', resource.id)), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    type: "submit",
    "data-css": buttonTag,
    "data-testid": "button-save",
    disabled: loading
  }, loading ? /*#__PURE__*/React.createElement(Icon, {
    icon: "Loader",
    spin: true
  }) : null, translateButton('save', resource.id)))));
};
const OverridableNew = allowOverride(New, 'DefaultNewAction');
export { OverridableNew as default, OverridableNew as New, New as OriginalNew };