import { Badge } from '@adminjs/design-system';
import React from 'react';
import startCase from 'lodash/startCase.js';
import allowOverride from '../../../hoc/allow-override.js';
import { useTranslation } from '../../../hooks/use-translation.js';
const DefaultPropertyValue = ({
  property: {
    propertyPath,
    availableValues,
    path
  },
  record,
  resource: {
    id: resourceId
  }
}) => {
  const rawValue = record?.params[path];
  const {
    tl
  } = useTranslation();
  if (typeof rawValue === 'undefined') return null;

  // eslint-disable-next-line eqeqeq
  const option = availableValues?.find(opt => opt.value == rawValue);
  if (option) {
    const label = option.label || rawValue;
    return /*#__PURE__*/React.createElement(Badge, null, tl(`${propertyPath}.${label}`, resourceId, {
      defaultValue: startCase(label)
    }));
  }
  return rawValue;
};
export default allowOverride(DefaultPropertyValue, 'DefaultPropertyValue');