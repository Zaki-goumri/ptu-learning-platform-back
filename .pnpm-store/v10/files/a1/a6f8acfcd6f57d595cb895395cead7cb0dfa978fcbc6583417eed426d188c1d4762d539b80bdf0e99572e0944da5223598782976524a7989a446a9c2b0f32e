import React from 'react';
import { stringify } from 'qs';
import allowOverride from '../../../hoc/allow-override.js';
import { useAction } from '../../../hooks/index.js';
import { buildActionTestId } from '../../../interfaces/index.js';
import { getActionElementCss } from '../../../utils/index.js';

/**
 * @alias ActionButtonProps
 * @memberof ActionButton
 */

/**
 * Renders Button which redirects to given action
 *
 * ### Usage
 *
 * ```
 * import { ActionButton } from 'adminjs'
 * ```
 *
 * @component
 * @subcategory Application
 */
const ActionButton = props => {
  const {
    children,
    action,
    actionPerformed,
    resourceId,
    recordId,
    recordIds,
    search,
    queryParams
  } = props;
  const {
    href,
    handleClick
  } = useAction(action, {
    resourceId,
    recordId,
    recordIds,
    search: stringify(queryParams, {
      addQueryPrefix: true
    }) || search
  }, actionPerformed);
  if (!action) {
    return null;
  }
  const firstChild = React.Children.toArray(children)[0];
  if (!firstChild || typeof firstChild === 'string' || typeof firstChild === 'number' || typeof firstChild === 'boolean') {
    throw new Error('ActionButton has to have one child');
  }
  const contentTag = getActionElementCss(resourceId, action.name, 'button');
  const WrappedElement = /*#__PURE__*/React.cloneElement(firstChild, {
    onClick: handleClick,
    'data-testid': buildActionTestId(action),
    'data-css': contentTag,
    href
  });
  return WrappedElement;
};
const OverridableActionButton = allowOverride(ActionButton, 'ActionButton');
export { OverridableActionButton as default, OverridableActionButton as ActionButton, ActionButton as OriginalActionButton };