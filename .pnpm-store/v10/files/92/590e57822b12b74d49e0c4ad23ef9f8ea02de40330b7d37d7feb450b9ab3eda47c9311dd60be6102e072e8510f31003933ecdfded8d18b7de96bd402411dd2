import React from 'react';
import { cssClass, Text, Box } from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';
import { useTranslation } from '../../hooks/index.js';
import allowOverride from '../../hoc/allow-override.js';
const VersionItem = styled(Text)`
  padding: 12px 24px 12px 0;
`;
VersionItem.defaultProps = {
  display: ['none', 'block'],
  color: 'grey100'
};
const Version = props => {
  const {
    versions
  } = props;
  const {
    admin,
    app
  } = versions;
  const {
    translateLabel
  } = useTranslation();
  return /*#__PURE__*/React.createElement(Box, {
    flex: true,
    flexGrow: 1,
    py: "default",
    px: "xxl",
    className: cssClass('Version'),
    "data-css": "version"
  }, admin && /*#__PURE__*/React.createElement(VersionItem, null, translateLabel('adminVersion', {
    version: admin
  })), app && /*#__PURE__*/React.createElement(VersionItem, null, translateLabel('appVersion', {
    version: app
  })));
};
const OverridableVersion = allowOverride(Version, 'Version');
export { OverridableVersion as default, OverridableVersion as Version, Version as OriginalVersion };