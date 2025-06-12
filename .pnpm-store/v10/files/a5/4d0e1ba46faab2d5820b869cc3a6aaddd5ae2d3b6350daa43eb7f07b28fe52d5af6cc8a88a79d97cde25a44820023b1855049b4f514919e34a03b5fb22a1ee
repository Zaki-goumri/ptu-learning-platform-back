import React from 'react';
import { Box, MadeWithLove } from '@adminjs/design-system';
import { useSelector } from 'react-redux';
import allowOverride from '../../../hoc/allow-override.js';
const SidebarFooter = () => {
  const branding = useSelector(state => state.branding);
  return /*#__PURE__*/React.createElement(Box, {
    mt: "lg",
    mb: "md",
    "data-css": "sidebar-footer"
  }, branding.withMadeWithLove && /*#__PURE__*/React.createElement(MadeWithLove, null));
};
export default allowOverride(SidebarFooter, 'SidebarFooter');
export { SidebarFooter as OriginalSidebarFooter, SidebarFooter };