import React from 'react';
import { Link } from 'react-router-dom';
import { cssClass, themeGet } from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';
import ViewHelpers from '../../../../backend/utils/view-helpers/view-helpers.js';
import allowOverride from '../../../hoc/allow-override.js';
export const StyledLogo = styled(Link)`
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-shrink: 0;
  padding: ${themeGet('space', 'lg')} ${themeGet('space', 'xxl')} ${themeGet('space', 'xxl')};
  text-decoration: none;

  & > h1 {
    text-decoration: none;
    font-weight: ${themeGet('fontWeights', 'bolder')};
    font-size: ${themeGet('fontWeights', 'bolder')};
    color: ${themeGet('colors', 'grey80')};
    font-size: ${themeGet('fontSizes', 'xl')};
    line-height: ${themeGet('lineHeights', 'xl')};
  }

  & > img {
    max-width: 170px;
  }

  &:hover h1 {
    color: ${themeGet('colors', 'primary100')};
  }
`;
const h = new ViewHelpers();
const SidebarBranding = props => {
  const {
    branding
  } = props;
  const {
    logo,
    companyName
  } = branding;
  return /*#__PURE__*/React.createElement(StyledLogo, {
    className: cssClass('Logo'),
    to: h.dashboardUrl(),
    "data-css": "sidebar-logo"
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: companyName
  }) : /*#__PURE__*/React.createElement("h1", null, companyName));
};
export default allowOverride(SidebarBranding, 'SidebarBranding');
export { SidebarBranding as OriginalSidebarBranding, SidebarBranding };