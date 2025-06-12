/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Overlay } from '@adminjs/design-system';
import { useLocation } from 'react-router';
import ViewHelpers from '../../backend/utils/view-helpers/view-helpers.js';
import Sidebar, { SIDEBAR_Z_INDEX } from './app/sidebar/sidebar.js';
import TopBar from './app/top-bar.js';
import Notice from './app/notice.js';
import allowOverride from '../hoc/allow-override.js';
import { AdminModal as Modal } from './app/admin-modal.js';
import { DashboardRoute, ResourceActionRoute, RecordActionRoute, PageRoute, BulkActionRoute, ResourceRoute } from './routes/index.js';
import useHistoryListen from '../hooks/use-history-listen.js';
import { AuthenticationBackgroundComponent } from './app/auth-background-component.js';
import { Footer } from './app/footer.js';
const h = new ViewHelpers();
const App = () => {
  const [sidebarVisible, toggleSidebar] = useState(false);
  const location = useLocation();
  useHistoryListen();
  useEffect(() => {
    if (sidebarVisible) {
      toggleSidebar(false);
    }
  }, [location]);
  const resourceId = ':resourceId';
  const actionName = ':actionName';
  const recordId = ':recordId';
  const pageName = ':pageName';

  // Note: replaces are required so that record/resource/bulk actions urls
  // are relative to their parent route
  const dashboardUrl = h.dashboardUrl();
  const resourceUrl = h.resourceUrl({
    resourceId
  });
  const recordActionUrl = h.recordActionUrl({
    resourceId,
    recordId,
    actionName
  }).replace(resourceUrl, '').substring(1);
  const resourceActionUrl = h.resourceActionUrl({
    resourceId,
    actionName
  }).replace(resourceUrl, '').substring(1);
  const bulkActionUrl = h.bulkActionUrl({
    resourceId,
    actionName
  }).replace(resourceUrl, '').substring(1);
  const pageUrl = h.pageUrl(pageName);
  return /*#__PURE__*/React.createElement(Box, {
    height: "100%",
    flex: true,
    "data-css": "app"
  }, sidebarVisible ? /*#__PURE__*/React.createElement(Overlay, {
    onClick: () => toggleSidebar(!sidebarVisible),
    zIndex: SIDEBAR_Z_INDEX - 1
  }) : null, /*#__PURE__*/React.createElement(Sidebar, {
    isVisible: sidebarVisible,
    "data-css": "sidebar"
  }), /*#__PURE__*/React.createElement(Box, {
    flex: true,
    flexGrow: 1,
    flexDirection: "column",
    overflowY: "auto",
    bg: "bg",
    "data-css": "app-content"
  }, /*#__PURE__*/React.createElement(TopBar, {
    toggleSidebar: () => toggleSidebar(!sidebarVisible)
  }), /*#__PURE__*/React.createElement(Box, {
    position: "absolute",
    top: 0,
    zIndex: 2000,
    "data-css": "notice"
  }, /*#__PURE__*/React.createElement(Notice, null)), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: dashboardUrl
  }, /*#__PURE__*/React.createElement(Route, {
    index: true,
    element: /*#__PURE__*/React.createElement(DashboardRoute, null)
  })), /*#__PURE__*/React.createElement(Route, {
    path: resourceUrl
  }, /*#__PURE__*/React.createElement(Route, {
    index: true,
    element: /*#__PURE__*/React.createElement(ResourceRoute, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: bulkActionUrl,
    element: /*#__PURE__*/React.createElement(BulkActionRoute, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: resourceActionUrl,
    element: /*#__PURE__*/React.createElement(ResourceActionRoute, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: recordActionUrl,
    element: /*#__PURE__*/React.createElement(RecordActionRoute, null)
  })), /*#__PURE__*/React.createElement(Route, {
    path: pageUrl
  }, /*#__PURE__*/React.createElement(Route, {
    index: true,
    element: /*#__PURE__*/React.createElement(PageRoute, null)
  })), /*#__PURE__*/React.createElement(Route, {
    path: "*",
    element: /*#__PURE__*/React.createElement(DashboardRoute, null)
  })), /*#__PURE__*/React.createElement(Footer, null)), /*#__PURE__*/React.createElement(Modal, null), /*#__PURE__*/React.createElement(AuthenticationBackgroundComponent, null));
};
const OverridableApp = allowOverride(App, 'Application');
export { OverridableApp as default, OverridableApp as App, App as OriginalApp };