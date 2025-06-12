/* eslint-disable jsx-a11y/anchor-is-valid */
import { Badge, Box, ButtonGroup, cssClass, H2, H3 } from '@adminjs/design-system';
import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import allowOverride from '../../../hoc/allow-override.js';
import { useActionResponseHandler, useTranslation, useModal } from '../../../hooks/index.js';
import { buildActionClickHandler } from '../../../interfaces/action/index.js';
import { getActionElementCss, getResourceElementCss } from '../../../utils/index.js';
import Breadcrumbs from '../breadcrumbs.js';
import { actionsToButtonGroup } from './actions-to-button-group.js';
import { StyledBackButton } from './styled-back-button.js';
import { useFilterDrawer } from '../../../hooks/use-filter-drawer.js';

/**
 * Header of an action. It renders Action name with buttons for all the actions.
 *
 * ### Usage
 *
 * ```
 * import { ActionHeader } from 'adminjs'
 * ```
 *
 * @component
 * @subcategory Application
 */
const ActionHeader = props => {
  const {
    resource,
    actionPerformed,
    record,
    action,
    tag,
    omitActions,
    toggleFilter: isFilterButtonVisible
  } = props;
  const translateFunctions = useTranslation();
  const {
    translateButton,
    translateAction
  } = translateFunctions;
  const navigate = useNavigate();
  const location = useLocation();
  const actionResponseHandler = useActionResponseHandler(actionPerformed);
  const modalFunctions = useModal();
  const {
    toggleFilter,
    filtersCount
  } = useFilterDrawer();
  if (action.hideActionHeader) {
    return null;
  }
  const resourceId = resource.id;
  const params = {
    resourceId,
    recordId: record?.id
  };
  // eslint-disable-next-line max-len
  const handleActionClick = (event, sourceAction) => buildActionClickHandler({
    action: sourceAction,
    params,
    actionResponseHandler,
    navigate,
    location,
    translateFunctions,
    modalFunctions
  })(event);
  const actionButtons = actionsToButtonGroup({
    actions: record ? record.recordActions.filter(ra => !action || action.name !== ra.name)
    // only new action should be seen in regular "Big" actions place
    : resource.resourceActions.filter(ra => ra.name === 'new' && (!action || action.name !== ra.name)),
    params,
    handleClick: handleActionClick,
    translateFunctions,
    modalFunctions
  });
  if (typeof isFilterButtonVisible === 'function' || isFilterButtonVisible) {
    const filterTranslationKey = filtersCount > 0 ? 'filterActive' : 'filter';
    actionButtons.push({
      label: translateButton(filterTranslationKey, resource.id, {
        count: filtersCount
      }),
      onClick: toggleFilter,
      icon: 'Filter',
      'data-css': getResourceElementCss(resource.id, 'filter-button')
    });
  }

  // list and new actions are special and are are always
  const customResourceButtons = actionsToButtonGroup({
    actions: action.showResourceActions ? resource.resourceActions.filter(ra => !['list', 'new'].includes(ra.name)) : [],
    params: {
      resourceId
    },
    handleClick: handleActionClick,
    translateFunctions,
    modalFunctions
  });
  const title = action ? translateAction(action.label, resourceId) : resource.name;

  // styled which differs if action header is in the drawer or not
  const cssIsRootFlex = !action.showInDrawer;
  const cssHeaderMT = action.showInDrawer ? '' : 'lg';
  const cssActionsMB = action.showInDrawer ? 'xl' : 'default';
  const CssHComponent = action.showInDrawer ? H3 : H2;
  const contentTag = getActionElementCss(resourceId, action.name, 'action-header');
  return /*#__PURE__*/React.createElement(Box, {
    className: cssClass('ActionHeader'),
    "data-css": contentTag
  }, !action.showInDrawer && /*#__PURE__*/React.createElement(Box, {
    flex: true,
    flexDirection: "row",
    px: ['default', 0]
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    resource: resource,
    actionName: action.name,
    record: record
  }), /*#__PURE__*/React.createElement(Box, {
    flexShrink: 0
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    size: "sm",
    rounded: true,
    buttons: customResourceButtons
  }))), /*#__PURE__*/React.createElement(Box, {
    display: ['block', cssIsRootFlex ? 'flex' : 'block']
  }, /*#__PURE__*/React.createElement(Box, {
    mt: cssHeaderMT,
    flexGrow: 1,
    px: ['default', 0]
  }, /*#__PURE__*/React.createElement(CssHComponent, {
    mb: "lg"
  }, action.showInDrawer && /*#__PURE__*/React.createElement(StyledBackButton, {
    showInDrawer: action.showInDrawer
  }), title, tag ? /*#__PURE__*/React.createElement(Badge, {
    variant: "default",
    outline: true,
    ml: "default"
  }, tag) : null)), !omitActions && /*#__PURE__*/React.createElement(Box, {
    mt: "xl",
    mb: cssActionsMB,
    flexShrink: 0
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    buttons: actionButtons
  }))));
};
const OverridableActionHeader = allowOverride(ActionHeader, 'ActionHeader');
export { OverridableActionHeader as default, OverridableActionHeader as ActionHeader, ActionHeader as OriginalActionHeader };