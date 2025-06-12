import { InfoBox, Text } from '@adminjs/design-system';
import React, { useMemo } from 'react';
import { Trans } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import allowOverride from '../../hoc/allow-override.js';
import withNoSSR from '../../hoc/with-no-ssr.js';
import { useTranslation } from '../../hooks/index.js';
import ErrorBoundary from '../app/error-boundary.js';
const Page = () => {
  const pages = useSelector(state => state.pages);
  const params = useParams();
  const {
    pageName
  } = params;
  const {
    tm
  } = useTranslation();
  const currentPage = useMemo(() => pages.find(({
    name
  }) => name === pageName), [pages, pageName]);
  if (!currentPage) {
    return /*#__PURE__*/React.createElement(InfoBox, {
      title: tm('pageNotFound_title'),
      illustration: "NotFound"
    }, /*#__PURE__*/React.createElement(Text, {
      mb: "xxl"
    }, /*#__PURE__*/React.createElement(Trans, {
      i18nKey: "messages.pageNotFound_subtitle",
      values: {
        pageName
      },
      components: {
        strong: /*#__PURE__*/React.createElement("strong", null)
      }
    })));
  }
  const Component = AdminJS.UserComponents[currentPage.component];
  if (!Component) {
    return /*#__PURE__*/React.createElement(InfoBox, {
      title: tm('componentNotFound_title'),
      illustration: "Beware"
    }, /*#__PURE__*/React.createElement(Text, {
      mb: "xxl"
    }, /*#__PURE__*/React.createElement(Trans, {
      i18nKey: "messages.componentNotFound_subtitle"
    })));
  }
  return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(Component, null));
};
export default allowOverride(withNoSSR(Page), 'PageRoute');