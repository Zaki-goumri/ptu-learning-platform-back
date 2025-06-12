import React from 'react';
import { StaticRouter } from 'react-router-dom/server.js';
import { combineStyles } from '@adminjs/design-system';
// @ts-ignore Note: Ignore while @adminjs/design-system/styled-components doesn't export types
import { ThemeProvider } from '@adminjs/design-system/styled-components';
import { I18nextProvider } from 'react-i18next';
import { defaultLocale } from '../../../locale/index.js';
import initTranslations from '../../utils/adminjs.i18n.js';
const theme = combineStyles({});
const TestContextProvider = props => {
  const {
    children,
    location
  } = props;
  const {
    i18n
  } = initTranslations(defaultLocale);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(I18nextProvider, {
    i18n: i18n
  }, /*#__PURE__*/React.createElement(StaticRouter, {
    location: location || '/'
  }, children)));
};
export default TestContextProvider;