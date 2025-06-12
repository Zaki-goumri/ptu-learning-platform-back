// Note: We are using legacy "createStore"
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';
import { combineReducers, legacy_createStore as createStore } from 'redux';
import { assetsReducer, brandingReducer, dashboardReducer, drawerReducer, filterDrawerReducer, localesReducer, modalReducer, noticesReducer, pagesReducer, pathsReducer, resourcesReducer, routerReducer, sessionReducer, themeReducer, versionsReducer } from './reducers/index.js';
const reducer = combineReducers({
  assets: assetsReducer,
  branding: brandingReducer,
  dashboard: dashboardReducer,
  drawer: drawerReducer,
  filterDrawer: filterDrawerReducer,
  locale: localesReducer,
  modal: modalReducer,
  notices: noticesReducer,
  pages: pagesReducer,
  paths: pathsReducer,
  resources: resourcesReducer,
  router: routerReducer,
  session: sessionReducer,
  theme: themeReducer,
  versions: versionsReducer
});
export default ((initialState = {}) => createStore(reducer, initialState, composeWithDevToolsDevelopmentOnly()));