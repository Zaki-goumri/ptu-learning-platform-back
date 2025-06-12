import { ThemeProvider } from '@adminjs/design-system/styled-components';
import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ViewHelpers from '../backend/utils/view-helpers/view-helpers.js';
import { flat } from '../utils/flat/index.js';
import * as AppComponents from './components/app/index.js';
import * as ActionComponents from './components/actions/index.js';
import App, { OriginalApp } from './components/application.js';
import { AppLoader } from './components/index.js';
import Login from './components/login/index.js';
import BasePropertyComponent, { CleanPropertyComponent } from './components/property-type/index.js';
import * as PropertyComponentUtils from './components/property-type/utils/index.js';
import * as ActionUtils from './interfaces/action/index.js';
import withNotice from './hoc/with-notice.js';
import * as Hooks from './hooks/index.js';
import createStore from './store/store.js';
import initTranslations from './utils/adminjs.i18n.js';
import ApiClient from './utils/api-client.js';
const env = {
  NODE_ENV: process.env.NODE_ENV || 'development'
};
const store = createStore(window.REDUX_STATE);
const theme = window.THEME;
const {
  locale
} = store.getState();
const {
  i18n
} = initTranslations(locale);
const Application = /*#__PURE__*/React.createElement(Provider, {
  store: store
}, /*#__PURE__*/React.createElement(ThemeProvider, {
  theme: theme
}, /*#__PURE__*/React.createElement(I18nextProvider, {
  i18n: i18n
}, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Suspense, {
  fallback: /*#__PURE__*/React.createElement(AppLoader, null)
}, /*#__PURE__*/React.createElement(App, null))))));
const loginAppProps = window.__APP_STATE__ ?? {};
const LoginApplication = /*#__PURE__*/React.createElement(Provider, {
  store: store
}, /*#__PURE__*/React.createElement(ThemeProvider, {
  theme: theme
}, /*#__PURE__*/React.createElement(I18nextProvider, {
  i18n: i18n
}, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Suspense, {
  fallback: /*#__PURE__*/React.createElement(AppLoader, null)
}, /*#__PURE__*/React.createElement(Login, loginAppProps))))));

// eslint-disable-next-line no-undef
window.regeneratorRuntime = regeneratorRuntime;
export default {
  withNotice,
  Application,
  OriginalApplication: OriginalApp,
  LoginApplication,
  ViewHelpers,
  UserComponents: {},
  ApiClient,
  BasePropertyComponent,
  CleanPropertyComponent,
  env,
  ...PropertyComponentUtils,
  ...AppComponents,
  ...ActionComponents,
  ...Hooks,
  ...ActionUtils,
  flat
};