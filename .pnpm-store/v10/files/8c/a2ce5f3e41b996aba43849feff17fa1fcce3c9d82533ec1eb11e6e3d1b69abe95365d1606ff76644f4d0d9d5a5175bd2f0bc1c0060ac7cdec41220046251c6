import { VERSIONS_INITIALIZE } from '../actions/initialize-versions.js';
export const versionsReducer = (state = {}, action) => {
  switch (action.type) {
    case VERSIONS_INITIALIZE:
      return {
        admin: action.data.admin,
        app: action.data.app
      };
    default:
      return state;
  }
};