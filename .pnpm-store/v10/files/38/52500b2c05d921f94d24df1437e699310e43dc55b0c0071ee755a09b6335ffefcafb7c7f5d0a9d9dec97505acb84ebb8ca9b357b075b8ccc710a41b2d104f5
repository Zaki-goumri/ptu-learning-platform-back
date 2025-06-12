/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-alert */

import { actionHasDisabledComponent } from './action-has-component.js';
import { actionHref } from './action-href.js';
import { buildActionCallApiTrigger } from './build-action-api-call-trigger.js';
import { REFRESH_KEY } from '../../components/actions/utils/append-force-refresh.js';
export const buildActionClickHandler = options => {
  const {
    action,
    params,
    actionResponseHandler,
    navigate,
    modalFunctions,
    location
  } = options;
  const {
    openModal
  } = modalFunctions;
  const handleActionClick = event => {
    event.preventDefault();
    event.stopPropagation();
    const href = actionHref(action, params);
    const callApi = buildActionCallApiTrigger({
      params,
      action,
      actionResponseHandler
    });

    // Action has "component" option set to "false" explicitly in it's configuration
    if (actionHasDisabledComponent(action)) {
      if (action.guard) {
        const modalData = {
          modalProps: {
            variant: 'danger',
            label: 'confirm',
            title: action.guard,
            subTitle: ''
          },
          type: 'confirm',
          resourceId: params.resourceId,
          confirmAction: callApi
        };

        // If confirmation is required, action trigger should be handled in modal
        openModal(modalData);
        return;
      }

      // If no confirmation is required, call API
      callApi();
      return;
    }

    // Default behaviour - you're navigated to action URL and logic is performed on it's route
    if (href) {
      const url = new URL(`relative:${href}`);
      const hrefParams = new URLSearchParams(url.search);
      const currentParams = new URLSearchParams(action.showInDrawer ? location?.search ?? '' : '');
      Object.entries(Object.fromEntries(currentParams.entries())).forEach(([key, value]) => {
        if (!hrefParams.has(key)) hrefParams.set(key, value);
      });
      if (location?.pathname === url.pathname) {
        hrefParams.set(REFRESH_KEY, 'true');
      }
      navigate({
        pathname: url.pathname,
        search: hrefParams.toString()
      });
    }
  };
  return handleActionClick;
};