import React from 'react';
import { Text, Button, Icon, InfoBox } from '@adminjs/design-system';
import { useTranslation } from '../../../hooks/index.js';
import allowOverride from '../../../hoc/allow-override.js';
import ActionButton from '../action-button/action-button.js';
const NoRecordsOriginal = props => {
  const {
    resource
  } = props;
  const {
    translateButton,
    translateMessage
  } = useTranslation();
  const canCreate = resource.resourceActions.find(a => a.name === 'new');
  return /*#__PURE__*/React.createElement(InfoBox, {
    title: translateMessage('noRecords', resource.id),
    illustration: "Docs"
  }, /*#__PURE__*/React.createElement(Text, {
    mb: "xxl"
  }, translateMessage('noRecordsInResource', resource.id)), canCreate && /*#__PURE__*/React.createElement(ActionButton, {
    action: canCreate,
    resourceId: resource.id
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "contained"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Plus"
  }), translateButton('createFirstRecord', resource.id))));
};

// This hack prevents rollup from throwing an error
const NoRecords = allowOverride(NoRecordsOriginal, 'NoRecords');
export { NoRecords, NoRecordsOriginal as OriginalNoRecords };
export default NoRecords;