import { CLOSE_FILTER_DRAWER, OPEN_FILTER_DRAWER } from '../actions/filter-drawer.js';
const initialState = {
  isVisible: false
};
export const filterDrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_FILTER_DRAWER:
      {
        return {
          ...state,
          isVisible: action.isVisible
        };
      }
    case CLOSE_FILTER_DRAWER:
      {
        return {
          ...state,
          isVisible: action.isVisible
        };
      }
    default:
      {
        return state;
      }
  }
};