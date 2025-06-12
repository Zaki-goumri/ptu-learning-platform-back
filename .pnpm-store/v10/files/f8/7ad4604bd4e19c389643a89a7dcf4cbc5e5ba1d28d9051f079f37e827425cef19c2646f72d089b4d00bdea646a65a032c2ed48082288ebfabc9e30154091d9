import { useNavigate, useLocation } from 'react-router';
import { buildActionCallApiTrigger, buildActionClickHandler } from '../../interfaces/index.js';
import { actionHref } from '../../interfaces/action/action-href.js';
import { useActionResponseHandler } from './use-action-response-handler.js';
import { useTranslation } from '../use-translation.js';
import { useModal } from '../use-modal.js';

/**
 * @load ./use-action.doc.md
 * @subcategory Hooks
 *
 * @param {ActionJSON}   action      action object
 * @param {ActionParams} params
 * @param {ActionCallCallback} onActionCall - callback triggered when action is performed
 * @return {UseActionResult}
 * @class
 * @hideconstructor
 */
export function useAction(action, params, onActionCall) {
  const navigate = useNavigate();
  const location = useLocation();
  const translateFunctions = useTranslation();
  const modalFunctions = useModal();
  const actionResponseHandler = useActionResponseHandler(onActionCall);
  const href = actionHref(action, params);
  const callApi = buildActionCallApiTrigger({
    action,
    params,
    actionResponseHandler
  });
  const handleClick = buildActionClickHandler({
    action,
    params,
    actionResponseHandler,
    navigate,
    translateFunctions,
    modalFunctions,
    location
  });
  return {
    href,
    callApi,
    handleClick
  };
}