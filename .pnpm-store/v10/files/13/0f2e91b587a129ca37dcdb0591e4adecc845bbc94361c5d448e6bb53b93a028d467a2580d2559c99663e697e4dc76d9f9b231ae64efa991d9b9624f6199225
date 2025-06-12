import React, { useState, useEffect } from 'react';
import { Loader } from '@adminjs/design-system';
import { useLocation, useParams } from 'react-router';
import ApiClient from '../../utils/api-client.js';
import getBulkActionsFromRecords from '../app/records-table/utils/get-bulk-actions-from-records.js';
import Wrapper from './utils/wrapper.js';
import { ActionHeader, DrawerPortal, BaseActionComponent, ErrorMessageBox, NoResourceError, NoActionError } from '../app/index.js';
import { useTranslation, useNotice, useResource } from '../../hooks/index.js';
import allowOverride from '../../hoc/allow-override.js';
import { getDataCss } from '../../index.js';
const api = new ApiClient();
const BulkAction = () => {
  const params = useParams();
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const {
    translateMessage
  } = useTranslation();
  const addNotice = useNotice();
  const location = useLocation();
  const {
    resourceId,
    actionName
  } = params;
  const resource = useResource(resourceId);
  const listActionName = 'list';
  const listAction = resource?.resourceActions.find(r => r.name === listActionName);
  const fetchRecords = () => {
    const recordIdsString = new URLSearchParams(location.search).get('recordIds');
    const recordIds = recordIdsString ? recordIdsString.split(',') : [];
    setLoading(true);
    return api.bulkAction({
      resourceId: resourceId,
      recordIds,
      actionName: actionName
    }).then(response => {
      setLoading(false);
      setRecords(response.data.records);
    }).catch(error => {
      setLoading(false);
      addNotice({
        message: 'errorFetchingRecords',
        type: 'error',
        resourceId
      });
      throw error;
    });
  };
  useEffect(() => {
    fetchRecords();
  }, [params.resourceId, params.actionName, location.search]);
  if (!resource) {
    return /*#__PURE__*/React.createElement(NoResourceError, {
      resourceId: resourceId
    });
  }
  if (!records && !loading) {
    return /*#__PURE__*/React.createElement(ErrorMessageBox, {
      title: "No records"
    }, /*#__PURE__*/React.createElement("p", null, translateMessage('noRecordsSelected', resourceId)));
  }
  const action = getBulkActionsFromRecords(records || []).find(r => r.name === actionName);
  if (loading) {
    const actionFromResource = resource.actions.find(r => r.name === actionName);
    return actionFromResource?.showInDrawer ? /*#__PURE__*/React.createElement(DrawerPortal, null, /*#__PURE__*/React.createElement(Loader, null)) : /*#__PURE__*/React.createElement(Loader, null);
  }
  if (!action) {
    return /*#__PURE__*/React.createElement(NoActionError, {
      resourceId: resourceId,
      actionName: actionName
    });
  }
  const routeWrapperCss = getDataCss(resource.id, action.actionType, action.name, 'route-wrapper');
  const routeActionCss = getDataCss(resource.id, action.actionType, action.name, 'route');
  if (action.showInDrawer) {
    if (!listAction) {
      return /*#__PURE__*/React.createElement(DrawerPortal, {
        width: action.containerWidth,
        "data-css": routeActionCss
      }, /*#__PURE__*/React.createElement(BaseActionComponent, {
        action: action,
        resource: resource,
        records: records
      }));
    }
    const toggleFilter = listAction.showFilter ? () => setFilterVisible(!filterVisible) : undefined;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DrawerPortal, {
      width: action.containerWidth,
      "data-css": routeActionCss
    }, /*#__PURE__*/React.createElement(BaseActionComponent, {
      action: action,
      resource: resource,
      records: records,
      setTag: setTag
    })), /*#__PURE__*/React.createElement(Wrapper, {
      width: listAction.containerWidth,
      "data-css": routeWrapperCss
    }, /*#__PURE__*/React.createElement(ActionHeader, {
      resource: resource,
      action: listAction,
      tag: tag,
      toggleFilter: toggleFilter
    }), /*#__PURE__*/React.createElement(BaseActionComponent, {
      action: listAction,
      resource: resource,
      setTag: setTag
    })));
  }
  return /*#__PURE__*/React.createElement(Wrapper, {
    width: action.containerWidth,
    "data-css": routeWrapperCss
  }, !action?.showInDrawer ? /*#__PURE__*/React.createElement(ActionHeader, {
    resource: resource,
    action: action,
    tag: tag
  }) : '', /*#__PURE__*/React.createElement(BaseActionComponent, {
    action: action,
    resource: resource,
    records: records,
    setTag: setTag
  }));
};
export default allowOverride(BulkAction, 'BulkActionRoute');