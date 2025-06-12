import { DRAWER_PREROUTE_SET } from '../actions/set-drawer-preroute.js';
export const drawerReducer = (state = {
  previousRoute: null
}, action) => {
  switch (action.type) {
    case DRAWER_PREROUTE_SET:
      {
        return {
          ...state,
          ...action.data
        };
      }
    default:
      {
        return state;
      }
  }
};