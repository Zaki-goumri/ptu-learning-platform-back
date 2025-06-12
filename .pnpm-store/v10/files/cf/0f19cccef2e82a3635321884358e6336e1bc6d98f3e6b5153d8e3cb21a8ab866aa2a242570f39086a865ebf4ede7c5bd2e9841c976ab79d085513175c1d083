import React from 'react';
import { CurrentUserNav, Box } from '@adminjs/design-system';
import { useTranslation } from '../../hooks/index.js';
import allowOverride from '../../hoc/allow-override.js';
const LoggedIn = props => {
  const {
    session,
    paths
  } = props;
  const {
    translateButton
  } = useTranslation();
  const dropActions = [{
    label: translateButton('logout'),
    onClick: event => {
      event.preventDefault();
      window.location.href = paths.logoutPath;
    },
    icon: 'LogOut'
  }];
  return /*#__PURE__*/React.createElement(Box, {
    flexShrink: 0,
    "data-css": "logged-in"
  }, /*#__PURE__*/React.createElement(CurrentUserNav, {
    name: session.email,
    title: session.title,
    avatarUrl: session.avatarUrl,
    dropActions: dropActions
  }));
};
const OverridableLoggedIn = allowOverride(LoggedIn, 'LoggedIn');
export { OverridableLoggedIn as default, OverridableLoggedIn as LoggedIn, LoggedIn as OriginalLoggedIn };