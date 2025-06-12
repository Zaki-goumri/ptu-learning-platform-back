import { Box, Icon, cssClass } from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';
import React from 'react';
import { useSelector } from 'react-redux';
import allowOverride from '../../hoc/allow-override.js';
import LanguageSelect from './language-select/language-select.js';
import LoggedIn from './logged-in.js';
import Version from './version.js';
const NavBar = styled(Box)`
  height: ${({
  theme
}) => theme.sizes.navbarHeight};
  border-bottom: ${({
  theme
}) => theme.borders.default};
  background: ${({
  theme
}) => theme.colors.container};
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
`;
NavBar.defaultProps = {
  className: cssClass('NavBar')
};
const TopBar = props => {
  const {
    toggleSidebar
  } = props;
  const session = useSelector(state => state.session);
  const paths = useSelector(state => state.paths);
  const versions = useSelector(state => state.versions);
  return /*#__PURE__*/React.createElement(NavBar, {
    "data-css": "topbar"
  }, /*#__PURE__*/React.createElement(Box, {
    py: "lg",
    px: ['default', 'lg'],
    onClick: toggleSidebar,
    display: ['block', 'block', 'block', 'block', 'none'],
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Menu",
    size: 24
  })), /*#__PURE__*/React.createElement(Version, {
    versions: versions
  }), /*#__PURE__*/React.createElement(LanguageSelect, null), session && session.email ? /*#__PURE__*/React.createElement(LoggedIn, {
    session: session,
    paths: paths
  }) : '');
};
const OverridableTopbar = allowOverride(TopBar, 'TopBar');
export { OverridableTopbar as TopBar, OverridableTopbar as default, TopBar as OriginalTopBar };