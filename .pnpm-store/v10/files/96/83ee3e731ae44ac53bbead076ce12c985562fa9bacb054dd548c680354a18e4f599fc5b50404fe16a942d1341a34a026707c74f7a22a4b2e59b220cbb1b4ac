import { Box, cssClass, Text } from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import ViewHelpers from '../../../backend/utils/view-helpers/view-helpers.js';
import allowOverride from '../../hoc/allow-override.js';
import { useTranslation } from '../../hooks/use-translation.js';
import { getActionElementCss } from '../../utils/index.js';
export const BreadcrumbLink = styled(Link)`
  color: ${({
  theme
}) => theme.colors.grey60};
  font-family: ${({
  theme
}) => theme.font};
  line-height: ${({
  theme
}) => theme.lineHeights.default};
  font-size: ${({
  theme
}) => theme.fontSizes.default};
  text-decoration: none;

  &:hover {
    color: ${({
  theme
}) => theme.colors.primary100};
    &:after {
      color: ${({
  theme
}) => theme.colors.grey60};
    }
  }

  &:after {
    content: '/';
    padding: 0 ${({
  theme
}) => theme.space.default};
  }

  &:last-child {
    color: ${({
  theme
}) => theme.colors.text};
    &:after {
      content: '';
    }
  }
`;
export const BreadcrumbText = styled(Text)`
  color: ${({
  theme
}) => theme.colors.grey100};
  font-family: ${({
  theme
}) => theme.font};
  font-weight: ${({
  theme
}) => theme.fontWeights.normal.toString()};
  line-height: ${({
  theme
}) => theme.lineHeights.default};
  font-size: ${({
  theme
}) => theme.fontSizes.default};
  cursor: pointer;
  display: inline;

  &:after {
    content: '/';
    padding: 0 ${({
  theme
}) => theme.space.default};
  }

  &:last-child {
    &:after {
      content: '';
    }
  }
`;

/**
 * @memberof Breadcrumbs
 */

/**
 * @component
 * @private
 */
const Breadcrumbs = props => {
  const {
    resource,
    record,
    actionName
  } = props;
  const listAction = resource.resourceActions.find(({
    name
  }) => name === 'list');
  const action = resource.actions.find(a => a.name === actionName);
  const h = new ViewHelpers();
  const {
    tl,
    ta
  } = useTranslation();
  const contentTag = getActionElementCss(resource.id, actionName, 'breadcrumbs');
  return /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    className: cssClass('Breadcrumbs'),
    "data-css": contentTag
  }, /*#__PURE__*/React.createElement(BreadcrumbLink, {
    to: h.dashboardUrl()
  }, tl('dashboard')), listAction ? /*#__PURE__*/React.createElement(BreadcrumbLink, {
    to: resource.href ? resource.href : '/',
    className: record ? 'is-active' : ''
  }, tl(resource.name, resource.id)) : /*#__PURE__*/React.createElement(BreadcrumbText, null, tl(resource.name, resource.id)), action && action.name !== 'list' && /*#__PURE__*/React.createElement(BreadcrumbLink, {
    to: "#"
  }, ta(action.label)));
};
const OverridableBreadcrumbs = allowOverride(Breadcrumbs, 'Breadcrumbs');
export { OverridableBreadcrumbs as default, OverridableBreadcrumbs as Breadcrumbs, Breadcrumbs as OriginalBreadcrumbs };