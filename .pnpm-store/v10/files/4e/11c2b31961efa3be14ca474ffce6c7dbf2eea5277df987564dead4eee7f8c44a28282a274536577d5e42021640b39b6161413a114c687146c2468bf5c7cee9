import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonCSS } from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';
import ViewHelpers from '../../../../backend/utils/view-helpers/view-helpers.js';
import allowOverride from '../../../hoc/allow-override.js';
const StyledLink = styled(Link)`
  ${ButtonCSS};
  padding-left: ${({
  theme
}) => theme.space.xs};
  padding-right: ${({
  theme
}) => theme.space.xs};
`;
const ReferenceValue = props => {
  const {
    property,
    record
  } = props;
  const h = new ViewHelpers();
  const refId = record.params[property.path];
  const populated = record.populated[property.path];
  const value = populated && populated.title || refId;
  if (!property.reference) {
    throw new Error(`property: "${property.path}" does not have a reference`);
  }
  if (populated?.recordActions?.find(a => a.name === 'show')) {
    const href = h.recordActionUrl({
      resourceId: property.reference,
      recordId: refId,
      actionName: 'show'
    });
    return /*#__PURE__*/React.createElement(StyledLink, {
      variant: "text",
      to: href
    }, value);
  }
  return /*#__PURE__*/React.createElement("span", null, value);
};
export default allowOverride(ReferenceValue, 'DefaultReferenceValue');