import React, { useState } from 'react';
import { Box } from "../index.js";
import { Tab, Tabs } from "./index.js";
export const Default = () => {
  const [selectedTab, setSelectedTab] = useState('first');
  return /*#__PURE__*/React.createElement(Tabs, {
    currentTab: selectedTab,
    onChange: setSelectedTab
  }, /*#__PURE__*/React.createElement(Tab, {
    id: "first",
    label: "First tab"
  }, "First"), /*#__PURE__*/React.createElement(Tab, {
    id: "second",
    label: "Second tab"
  }, /*#__PURE__*/React.createElement(Box, {
    color: "primary100"
  }, "Second")), /*#__PURE__*/React.createElement(Tab, {
    id: "third",
    label: "Third tab"
  }, "Third"));
};
const meta = {
  title: 'DesignSystem/Atoms/Tabs',
  component: Tabs
};
export default meta;