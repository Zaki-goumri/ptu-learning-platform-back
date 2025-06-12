import { Box } from '@adminjs/design-system';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import allowOverride from '../../hoc/allow-override.js';
import { actionHasDisabledComponent } from '../../interfaces/index.js';
import BaseActionComponent from '../app/base-action-component.js';
import DrawerPortal from '../app/drawer-portal.js';
import { NoActionError, NoResourceError } from '../app/error-message.js';
import FilterDrawer from '../app/filter-drawer.js';
import { ActionHeader } from '../app/index.js';
import Wrapper from './utils/wrapper.js';
import { getDataCss, getResourceElementCss } from '../../utils/data-css-name.js';
const ResourceAction = props => {
  const params = useParams();
  const {
    resources
  } = props;
  const {
    resourceId,
    actionName
  } = params;
  const [tag, setTag] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const resource = resources.find(r => r.id === resourceId);
  if (!resource) {
    return /*#__PURE__*/React.createElement(NoResourceError, {
      resourceId: resourceId
    });
  }
  const action = resource.resourceActions.find(r => r.name === actionName);
  if (!action || actionHasDisabledComponent(action)) {
    return /*#__PURE__*/React.createElement(NoActionError, {
      resourceId: resourceId,
      actionName: actionName
    });
  }
  const listActionName = 'list';
  const listAction = resource.resourceActions.find(r => r.name === listActionName);
  const contentTag = getResourceElementCss(resource.id, action.name);
  const routeActionCss = getDataCss(resource.id, action.actionType, action.name, 'route');
  if (action.showInDrawer) {
    if (!listAction) {
      return /*#__PURE__*/React.createElement(DrawerPortal, {
        width: action.containerWidth,
        "data-css": routeActionCss
      }, /*#__PURE__*/React.createElement(BaseActionComponent, {
        action: action,
        resource: resource
      }));
    }
    const toggleFilter = listAction.showFilter ? () => setFilterVisible(!filterVisible) : undefined;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DrawerPortal, {
      width: action.containerWidth,
      "data-css": routeActionCss
    }, /*#__PURE__*/React.createElement(BaseActionComponent, {
      action: action,
      resource: resource,
      setTag: setTag
    })), /*#__PURE__*/React.createElement(Wrapper, {
      width: listAction.containerWidth,
      "data-css": contentTag
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
    showFilter: action.showFilter,
    "data-css": contentTag
  }, /*#__PURE__*/React.createElement(Box, {
    flex: true,
    flexDirection: "column",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(ActionHeader, {
    resource: resource,
    action: action,
    toggleFilter: action.showFilter,
    tag: tag
  }), /*#__PURE__*/React.createElement(BaseActionComponent, {
    action: action,
    resource: resource,
    setTag: setTag
  })), action.showFilter && /*#__PURE__*/React.createElement(FilterDrawer, {
    resource: resource
  }));
};
const mapStateToProps = state => ({
  resources: state.resources
});
export default allowOverride(connect(mapStateToProps)(ResourceAction), 'ResourceActionRoute');