import React, { createContext, useCallback, useState, useMemo, useContext } from 'react';
import { styled, css } from "../../../build/utils/styled.js";
import assert from "../../utils/assert.js";
const StyledButton = styled.button`
  background: none;
  border: none;
  padding: ${({
  theme
}) => `${theme.space.lg} ${theme.space.xl}`};
  cursor: pointer;
  border-bottom: 2px solid ${({
  theme
}) => theme.colors.border};
  color: ${({
  theme
}) => theme.colors.grey60};
  user-select: none;
  ${({
  theme
}) => ({
  fontFamily: theme.font,
  fontSize: theme.fontSizes.md,
  lineHeight: theme.lineHeights.lg
})};

  ${({
  active,
  theme
}) => active && css`
    border-color: ${theme.colors.primary100};
    color: ${theme.colors.primary100};
  `}
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledHeader = styled.div`
  display: flex;
`;
const StyledSpacer = styled.div`
  flex-grow: 1;
  border-bottom: 2px solid ${({
  theme
}) => theme.colors.border};
`;

/**
 * Tabs component renders a tab navigation bar that lets the user select a Tab
 * to display below. Children of the selected Tab are then rendered below the
 * navigation bar.
 */
export const Tabs = ({
  currentTab,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = () => {},
  children,
  fullWidth = true,
  headerComponent: Header = StyledHeader,
  buttonComponent: Button = StyledButton,
  contentComponent: Content = StyledContent
}) => {
  const [tabs, setTabs] = useState([]);
  const registerTab = useCallback((id, title) => {
    setTabs(currentTabs => {
      if (currentTabs.find(t => t.id === id)) {
        // eslint-disable-next-line no-console
        console.error(`There are multiple Tab components with ID '${id}'`);
      }
      return [...currentTabs, {
        id,
        title
      }];
    });
  }, []);
  const unregisterTab = useCallback(id => setTabs(newTabs => newTabs.filter(t => t.id !== id)), []);
  const memoizedContext = useMemo(() => ({
    currentTab,
    registerTab,
    unregisterTab
  }), [currentTab, registerTab, unregisterTab]);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line no-use-before-define
    React.createElement(TabContext.Provider, {
      value: memoizedContext
    }, /*#__PURE__*/React.createElement(StyledContent, {
      role: "tablist"
    }, /*#__PURE__*/React.createElement(Header, null, tabs.map(({
      id,
      title
    }) => /*#__PURE__*/React.createElement(Button, {
      role: "tab",
      active: id === currentTab,
      key: id,
      onClick: () => onChange(id),
      tabId: id
    }, title)), fullWidth && /*#__PURE__*/React.createElement(StyledSpacer, null)), /*#__PURE__*/React.createElement(Content, {
      role: "tabpanel"
    }, children)))
  );
};
export const TabContext = /*#__PURE__*/createContext({
  registerTab: () => {
    // eslint-disable-next-line no-console
    console.error('Tab used outside of Tabs component. Tab needs to be a child of Tabs.');
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unregisterTab: () => {},
  currentTab: ''
});
export const useTabs = () => {
  const ctx = useContext(TabContext);
  assert(TabContext, 'useTabs is used outside TabContext');
  return ctx;
};
Tabs.displayName = 'Tabs';
export default Tabs;