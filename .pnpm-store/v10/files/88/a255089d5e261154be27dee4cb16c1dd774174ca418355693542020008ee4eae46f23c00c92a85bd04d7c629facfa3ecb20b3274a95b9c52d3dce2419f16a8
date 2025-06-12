import { HIDE_MODAL, SHOW_MODAL } from '../actions/modal.js';
export const modalReducer = (state = {
  show: false
}, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      {
        return {
          ...action.data,
          show: true
        };
      }
    case HIDE_MODAL:
      {
        return {
          show: false
        };
      }
    default:
      return state;
  }
};