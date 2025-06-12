function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Button, DrawerContent, DrawerFooter, Icon, MessageBox, Table, TableBody, TableCell, TableRow, Text } from '@adminjs/design-system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import allowOverride from '../../hoc/allow-override.js';
import withNotice from '../../hoc/with-notice.js';
import { useTranslation } from '../../hooks/index.js';
import { getActionElementCss } from '../../utils/index.js';
import ApiClient from '../../utils/api-client.js';
import ActionHeader from '../app/action-header/action-header.js';
import BasePropertyComponent from '../property-type/index.js';
import { appendForceRefresh } from './utils/append-force-refresh.js';

/**
 * @name BulkDeleteAction
 * @category Actions
 * @description Deletes selected records.
 * @component
 * @private
 */
const BulkDelete = props => {
  const {
    resource,
    records,
    action,
    addNotice
  } = props;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    translateMessage,
    translateButton
  } = useTranslation();
  if (!records) {
    return /*#__PURE__*/React.createElement(Text, null, translateMessage('pickSomeFirstToRemove', resource.id));
  }
  const handleClick = () => {
    const api = new ApiClient();
    setLoading(true);
    const recordIds = records.map(r => r.id);
    api.bulkAction({
      resourceId: resource.id,
      actionName: action.name,
      recordIds,
      method: 'post'
    }).then(response => {
      setLoading(false);
      if (response.data.notice) {
        addNotice(response.data.notice);
      }
      if (response.data.redirectUrl) {
        const search = new URLSearchParams(window.location.search);
        // bulk function have recordIds in the URL so it has to be stripped before redirect
        search.delete('recordIds');
        navigate(appendForceRefresh(response.data.redirectUrl, search.toString()));
      }
    }).catch(error => {
      setLoading(false);
      addNotice({
        message: translateMessage('bulkDeleteError', resource.id),
        type: 'error'
      });
      throw error;
    });
  };
  const contentTag = getActionElementCss(resource.id, action.name, 'drawer-content');
  const tableTag = getActionElementCss(resource.id, action.name, 'table');
  const footerTag = getActionElementCss(resource.id, action.name, 'drawer-footer');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DrawerContent, {
    "data-css": contentTag
  }, action?.showInDrawer ? /*#__PURE__*/React.createElement(ActionHeader, _extends({
    omitActions: true
  }, props)) : null, /*#__PURE__*/React.createElement(MessageBox, {
    mb: "xxl",
    variant: "danger",
    message: translateMessage(records.length > 1 ? 'theseRecordsWillBeRemoved_plural' : 'theseRecordsWillBeRemoved', resource.id, {
      count: records.length
    })
  }), /*#__PURE__*/React.createElement(Table, {
    "data-css": tableTag
  }, /*#__PURE__*/React.createElement(TableBody, null, records.map(record => /*#__PURE__*/React.createElement(TableRow, {
    key: record.id
  }, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(BasePropertyComponent, {
    where: "list",
    property: resource.titleProperty,
    resource: resource,
    record: record
  }))))))), /*#__PURE__*/React.createElement(DrawerFooter, {
    "data-css": footerTag
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    size: "lg",
    onClick: handleClick,
    disabled: loading
  }, loading ? /*#__PURE__*/React.createElement(Icon, {
    icon: "Loader",
    spin: true
  }) : null, translateButton(records.length > 1 ? 'confirmRemovalMany_plural' : 'confirmRemovalMany', resource.id, {
    count: records.length
  }))));
};
const FormattedBulkDelete = withNotice(BulkDelete);
const OverridableFormattedBulkDelete = allowOverride(FormattedBulkDelete, 'DefaultBulkDeleteAction');
export { OverridableFormattedBulkDelete as default, OverridableFormattedBulkDelete as BulkDelete, FormattedBulkDelete as OriginalBulkDelete };