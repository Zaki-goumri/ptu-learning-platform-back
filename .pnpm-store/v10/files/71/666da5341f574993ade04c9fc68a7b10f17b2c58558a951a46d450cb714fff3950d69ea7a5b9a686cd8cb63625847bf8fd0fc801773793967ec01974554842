function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import { ButtonCSS, Icon } from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';
import allowOverride from '../../../hoc/allow-override.js';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledLink = styled(({
  rounded,
  to,
  ...rest
}) => /*#__PURE__*/React.createElement(RouterLink, _extends({
  to: to
}, rest)))`${ButtonCSS}`;
const StyledBackButton = props => {
  const location = useLocation();
  const {
    showInDrawer
  } = props;
  const cssCloseIcon = showInDrawer ? 'ChevronRight' : 'ChevronLeft';
  return /*#__PURE__*/React.createElement(StyledLink, {
    size: "icon",
    to: {
      pathname: '..',
      search: location.search
    },
    relative: "route",
    rounded: true,
    mr: "lg",
    type: "button"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: cssCloseIcon
  }));
};
const OverridableStyledBackButton = allowOverride(StyledBackButton, 'StyledBackButton');
export { OverridableStyledBackButton as default, OverridableStyledBackButton as StyledBackButton, StyledBackButton as OriginalStyledBackButton };