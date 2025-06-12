import { DEFAULT_PATHS } from '../../../constants.js';
import { PATHS_INITIALIZE } from '../actions/initialize-paths.js';
export const pathsReducer = (state = DEFAULT_PATHS, action) => {
  switch (action.type) {
    case PATHS_INITIALIZE:
      return action.data;
    default:
      return state;
  }
};