import { ROUTE_CHANGED, INITIAL_ROUTE } from '../actions/route-changed.js';
export const routerReducer = (state = {
  from: {},
  to: {}
}, action) => {
  switch (action.type) {
    case INITIAL_ROUTE:
      return {
        ...state,
        from: {
          ...action.data
        }
      };
    case ROUTE_CHANGED:
      return {
        from: {
          ...state.to
        },
        to: {
          ...action.data
        }
      };
    default:
      return state;
  }
};