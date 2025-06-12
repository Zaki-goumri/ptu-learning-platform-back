/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useNavigate, useLocation } from 'react-router';
import { appendForceRefresh } from '../../components/actions/utils/append-force-refresh.js';
import { useNotice } from '../use-notice.js';
export const useActionResponseHandler = onActionCall => {
  const location = useLocation();
  const navigate = useNavigate();
  const addNotice = useNotice();
  return response => {
    const {
      data
    } = response;
    if (data.notice) {
      addNotice(data.notice);
    }
    if (data.redirectUrl && location.pathname !== data.redirectUrl) {
      const appended = appendForceRefresh(data.redirectUrl);
      navigate(appended);
    }
    if (onActionCall) {
      onActionCall(data);
    }
  };
};