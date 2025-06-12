import { Box, cssClass } from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';
import React from 'react';
import { useSelector } from 'react-redux';
import allowOverride from '../../../hoc/allow-override.js';
import SidebarBranding from './sidebar-branding.js';
import SidebarFooter from './sidebar-footer.js';
import SidebarPages from './sidebar-pages.js';
import SidebarResourceSection from './sidebar-resource-section.js';
export const SIDEBAR_Z_INDEX = 50;
const StyledSidebar = styled(Box)`
  top: 0;
  bottom: 0;
  overflow-y: auto;
  width: ${({
  theme
}) => theme.sizes.sidebarWidth};
  border-right: ${({
  theme
}) => theme.borders.default};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  z-index: ${SIDEBAR_Z_INDEX};
  background: ${({
  theme
}) => theme.colors.sidebar};

  transition: left 0.25s ease-in-out;

  &.hidden {
    left: -${({
  theme
}) => theme.sizes.sidebarWidth};
  }
  &.visible {
    left: 0;
  }
`;
StyledSidebar.defaultProps = {
  position: ['absolute', 'absolute', 'absolute', 'absolute', 'initial']
};
const SidebarOriginal = props => {
  const {
    isVisible
  } = props;
  const branding = useSelector(state => state.branding);
  const resources = useSelector(state => state.resources);
  const pages = useSelector(state => state.pages);
  return /*#__PURE__*/React.createElement(StyledSidebar, {
    className: isVisible ? 'visible' : 'hidden',
    "data-css": "sidebar"
  }, /*#__PURE__*/React.createElement(SidebarBranding, {
    branding: branding
  }), /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    className: cssClass('Resources'),
    "data-css": "sidebar-resources"
  }, /*#__PURE__*/React.createElement(SidebarResourceSection, {
    resources: resources
  })), /*#__PURE__*/React.createElement(SidebarPages, {
    pages: pages
  }), /*#__PURE__*/React.createElement(SidebarFooter, null));
};
const Sidebar = allowOverride(SidebarOriginal, 'Sidebar');
export { Sidebar, SidebarOriginal as OriginalSidebar };
export default Sidebar;