import { Box, Button, DropDown, DropDownItem, DropDownMenu, DropDownTrigger, Icon } from '@adminjs/design-system';
import React, { useMemo } from 'react';
import { useTranslation } from '../../../hooks/index.js';
const LanguageSelect = () => {
  const {
    i18n: {
      language,
      options: {
        supportedLngs
      },
      changeLanguage
    },
    translateComponent
  } = useTranslation();
  const availableLanguages = useMemo(() => supportedLngs ? supportedLngs.filter(lang => lang !== 'cimode') : [], [supportedLngs]);
  if (availableLanguages.length <= 1) {
    return null;
  }
  return /*#__PURE__*/React.createElement(Box, {
    flex: true,
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(DropDown, null, /*#__PURE__*/React.createElement(DropDownTrigger, null, /*#__PURE__*/React.createElement(Button, {
    color: "text"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Globe"
  }), translateComponent(`LanguageSelector.availableLanguages.${language}`, {
    defaultValue: language
  }))), /*#__PURE__*/React.createElement(DropDownMenu, null, availableLanguages.map(lang => /*#__PURE__*/React.createElement(DropDownItem, {
    key: lang,
    onClick: () => {
      changeLanguage(lang);
    }
  }, translateComponent(`LanguageSelector.availableLanguages.${lang}`, {
    defaultValue: lang
  }))))));
};
export default LanguageSelect;