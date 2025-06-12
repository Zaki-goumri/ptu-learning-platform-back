import { Box } from '@adminjs/design-system';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useMatch, useParams } from 'react-router';
import ViewHelpers from '../../../backend/utils/view-helpers/view-helpers.js';
import allowOverride from '../../hoc/allow-override.js';
import { getResourceElementCss } from '../../utils/index.js';
import BaseAction from '../app/base-action-component.js';
import { NoActionError, NoResourceError } from '../app/error-message.js';
import FilterDrawer from '../app/filter-drawer.js';
import { ActionHeader } from '../app/index.js';
const getAction = resource => {
  const h = new ViewHelpers();
  const resourceId = ':resourceId';
  const actionName = ':actionName';
  const recordId = ':recordId';
  const recordActionUrl = h.recordActionUrl({
    resourceId,
    recordId,
    actionName
  });
  const resourceActionUrl = h.resourceActionUrl({
    resourceId,
    actionName
  });
  const bulkActionUrl = h.bulkActionUrl({
    resourceId,
    actionName
  });
  const resourceActionMatch = useMatch(resourceActionUrl);
  const recordActionMatch = useMatch(recordActionUrl);
  const bulkActionMatch = useMatch(bulkActionUrl);
  const action = resourceActionMatch?.params.actionName || recordActionMatch?.params.actionName || bulkActionMatch?.params.actionName;
  return action ? resource.actions.find(a => a.name === action) : undefined;
};
const ResourceAction = props => {
  const params = useParams();
  const {
    resources
  } = props;
  const {
    resourceId
  } = params;
  const [tag, setTag] = useState('');
  if (!resourceId) {
    return null;
  }
  const resource = resources.find(r => r.id === resourceId);
  if (!resource) {
    return /*#__PURE__*/React.createElement(NoResourceError, {
      resourceId: resourceId
    });
  }
  const realEndAction = getAction(resource);
  if (realEndAction && !realEndAction.showInDrawer) {
    return null;
  }
  const listActionName = 'list';
  const listAction = resource.resourceActions.find(r => r.name === listActionName);
  if (!listAction) {
    return /*#__PURE__*/React.createElement(NoActionError, {
      resourceId: resourceId,
      actionName: listActionName
    });
  }
  const contentTag = getResourceElementCss(resource.id, 'list');
  return /*#__PURE__*/React.createElement(Box, {
    flex: true,
    variant: "transparent",
    alignItems: "start",
    width: listAction.containerWidth,
    mx: "auto",
    style: {
      gap: 16
    },
    height: "100%",
    "data-css": contentTag
  }, /*#__PURE__*/React.createElement(Box, {
    flex: true,
    flexDirection: "column",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(ActionHeader, {
    resource: resource,
    action: listAction,
    tag: tag,
    toggleFilter: listAction.showFilter
  }), /*#__PURE__*/React.createElement(BaseAction, {
    action: listAction,
    resource: resource,
    setTag: setTag
  })), listAction.showFilter && /*#__PURE__*/React.createElement(FilterDrawer, {
    resource: resource
  }));
};
const mapStateToProps = state => ({
  resources: state.resources
});
export default allowOverride(connect(mapStateToProps)(ResourceAction), 'ResourceRoute');