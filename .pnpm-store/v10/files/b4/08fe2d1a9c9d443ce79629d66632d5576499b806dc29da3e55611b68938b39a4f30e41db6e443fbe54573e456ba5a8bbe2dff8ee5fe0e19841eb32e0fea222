import { ADD_NOTICE } from '../actions/add-notice.js';
import { DROP_NOTICE } from '../actions/drop-notice.js';
import { SET_NOTICE_PROGRESS } from '../actions/set-notice-progress.js';
export const noticesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTICE:
      {
        return [...state, action.data];
      }
    case DROP_NOTICE:
      {
        return state.filter(notice => notice.id !== action.data.noticeId);
      }
    case SET_NOTICE_PROGRESS:
      {
        return state.map(notice => ({
          ...notice,
          progress: notice.id === action.data.noticeId ? action.data.progress : notice.progress
        }));
      }
    default:
      return state;
  }
};