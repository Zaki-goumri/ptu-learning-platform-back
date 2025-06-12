import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import { Loader } from '@adminjs/design-system';
import { ErrorTypeEnum } from '../../../utils/error-type.enum.js';
import BaseActionComponent from '../app/base-action-component.js';
import ApiClient from '../../utils/api-client.js';
import { actionHasDisabledComponent } from '../../interfaces/index.js';
import { NoResourceError, NoActionError, NoRecordError } from '../app/error-message.js';
import Wrapper from './utils/wrapper.js';
import { ActionHeader } from '../app/index.js';
import { useNotice, useResource } from '../../hooks/index.js';
import DrawerPortal from '../app/drawer-portal.js';
import mergeRecordResponse from '../../hooks/use-record/merge-record-response.js';
import allowOverride from '../../hoc/allow-override.js';
import { getDataCss } from '../../index.js';
const api = new ApiClient();
const RecordAction = () => {
  const [record, setRecord] = useState();
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const params = useParams();
  const addNotice = useNotice();
  const {
    actionName,
    recordId,
    resourceId
  } = params;
  const resource = useResource(resourceId);
  const action = record && record.recordActions.find(r => r.name === actionName);
  const actionFromResource = resource?.actions.find(a => a.name === actionName);
  const listActionName = 'list';
  const listAction = resource?.resourceActions.find(r => r.name === listActionName);
  const fetchRecord = () => {
    // Do not call API on route enter if the action doesn't have a component
    if (actionFromResource && actionHasDisabledComponent(actionFromResource)) {
      setLoading(false);
      return;
    }
    setLoading(true);
    api.recordAction(params).then(response => {
      if (response.data.notice && response.data.notice.type === 'error') {
        addNotice(response.data.notice);
      }
      if (!response.data.record?.baseError?.type || ![ErrorTypeEnum.App, ErrorTypeEnum.NotFound, ErrorTypeEnum.Forbidden].includes(response.data.record?.baseError?.type)) {
        setRecord(response.data.record);
      }
    }).catch(error => {
      addNotice({
        message: 'errorFetchingRecord',
        type: 'error',
        resourceId
      });
      throw error;
    }).finally(() => {
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchRecord();
  }, [actionName, recordId, resourceId]);
  const handleActionPerformed = useCallback((oldRecord, response) => {
    if (response.record) {
      setRecord(mergeRecordResponse(oldRecord, response));
    } else {
      fetchRecord();
    }
  }, [fetchRecord]);
  if (!resource) {
    return /*#__PURE__*/React.createElement(NoResourceError, {
      resourceId: resourceId
    });
  }

  // When the user visits this route (record action) from a different, than the current one, record.
  // It renders everything with a new resource. The old record remains until useEffect fetches data
  // from the API. that is why we have to check if the current record has correct record.id.
  // Alternative approach would be to setRecord(undefined) before the fetch, but it is async and
  // we cannot be sure that the component wont be rendered (it will be at least once) with the
  // wrong data.
  const hasDifferentRecord = record && record.id && record.id.toString() !== recordId;
  if (loading || hasDifferentRecord) {
    return actionFromResource?.showInDrawer ? /*#__PURE__*/React.createElement(DrawerPortal, null, /*#__PURE__*/React.createElement(Loader, null)) : /*#__PURE__*/React.createElement(Loader, null);
  }
  if (!action || actionFromResource && actionHasDisabledComponent(actionFromResource)) {
    return /*#__PURE__*/React.createElement(NoActionError, {
      resourceId: resourceId,
      actionName: actionName
    });
  }
  if (!record) {
    return /*#__PURE__*/React.createElement(NoRecordError, {
      resourceId: resourceId,
      recordId: recordId
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
        record: record
      }));
    }
    const toggleFilter = listAction.showFilter ? () => setFilterVisible(!filterVisible) : undefined;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DrawerPortal, {
      width: action.containerWidth,
      "data-css": routeActionCss
    }, /*#__PURE__*/React.createElement(BaseActionComponent, {
      action: action,
      resource: resource,
      record: record
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
  }, /*#__PURE__*/React.createElement(ActionHeader, {
    resource: resource,
    action: action,
    record: record,
    actionPerformed: response => handleActionPerformed(record, response)
  }), /*#__PURE__*/React.createElement(BaseActionComponent, {
    action: action,
    resource: resource,
    record: record
  }));
};
export default allowOverride(RecordAction, 'RecordActionRoute');