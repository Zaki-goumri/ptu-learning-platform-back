import React, { useLayoutEffect } from 'react';
import { useTabs } from "./tabs.js";
/**
 * Renders children inside Tabs component. Each Tab will add a single tab in
 * the navigation bar.
 */
export const Tab = ({
  id,
  label,
  children
}) => {
  const {
    currentTab,
    registerTab,
    unregisterTab
  } = useTabs();
  useLayoutEffect(() => {
    registerTab(id, label);
    return () => unregisterTab(id);
  });
  if (id !== currentTab) {
    return null;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};
Tab.displayName = 'Tab';
export default Tab;