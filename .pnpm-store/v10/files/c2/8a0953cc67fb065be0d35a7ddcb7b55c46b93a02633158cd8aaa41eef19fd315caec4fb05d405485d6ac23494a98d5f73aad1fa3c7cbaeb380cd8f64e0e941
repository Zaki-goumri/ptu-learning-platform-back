function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Box } from '@adminjs/design-system';
import React, { useMemo } from 'react';
import ErrorBoundary from '../app/error-boundary.js';
import * as ArrayType from './array/index.js';
import * as KeyValueType from './key-value/index.js';
import * as MixedType from './mixed/index.js';
import { getActionElementCss } from '../../utils/index.js';
import * as boolean from './boolean/index.js';
import * as currency from './currency/index.js';
import * as datetime from './datetime/index.js';
import * as defaultType from './default-type/index.js';
import * as password from './password/index.js';
import * as phone from './phone/index.js';
import * as reference from './reference/index.js';
import * as richtext from './richtext/index.js';
import * as textarea from './textarea/index.js';
let globalAny = {};
try {
  globalAny = window;
} catch (error) {
  if (!(error instanceof ReferenceError)) {
    throw error;
  }
}
const types = {
  textarea,
  boolean,
  datetime,
  reference,
  password,
  date: datetime,
  richtext,
  string: defaultType,
  number: defaultType,
  float: defaultType,
  uuid: defaultType,
  mixed: null,
  'key-value': null,
  currency,
  phone
};

/**
 * @load ./base-property-component.doc.md
 * @component
 * @name BasePropertyComponent
 * @subcategory Application
 * @class
 * @hideconstructor
 */
const BasePropertyComponent = props => {
  const {
    property: baseProperty,
    resource,
    record,
    filter,
    where,
    onChange
  } = props;
  const property = useMemo(() => ({
    ...baseProperty,
    // we fill the path if it is not there. That is why all the actual Component Renderers are
    // called with the path set to this root path. Next mixed and array components adds to this
    // path either index (for array) or subProperty name.
    path: baseProperty.path || baseProperty.propertyPath
  }), [baseProperty]);
  const testId = `property-${where}-${property.path}`;
  const contentTag = getActionElementCss(resource.id, where, property.path);
  let Component = types[property.type] && types[property.type][where] || defaultType[where];
  if (property.components && property.components[where]) {
    const component = property.components[where];
    if (!component) {
      throw new Error(`there is no "${property.path}.components.${where}"`);
    }
    Component = globalAny.AdminJS.UserComponents[component] ?? (() => {
      throw new Error(`Component "${component}" has not been bundled, ensure it was added to your ComponentLoader instance (the one included in AdminJS options).`);
    });
    return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(Box, {
      "data-css": contentTag,
      "data-testid": testId
    }, /*#__PURE__*/React.createElement(Component, {
      property: property,
      resource: resource,
      record: record,
      filter: filter,
      onChange: onChange,
      where: where
    })));
  }
  const Array = ArrayType[where];
  const Mixed = MixedType[where];
  const KeyValue = KeyValueType[where];
  if (baseProperty.isArray) {
    if (!Array) {
      return /*#__PURE__*/React.createElement("div", null);
    }
    return /*#__PURE__*/React.createElement(Array, _extends({}, props, {
      property: property,
      ItemComponent: BasePropertyComponent,
      testId: testId
    }));
  }
  if (baseProperty.type === 'key-value') {
    if (!KeyValue) {
      return /*#__PURE__*/React.createElement("div", null);
    }
    return /*#__PURE__*/React.createElement(KeyValue, _extends({}, props, {
      property: property,
      testId: testId
    }));
  }
  if (baseProperty.type === 'mixed') {
    if (!Mixed) {
      return /*#__PURE__*/React.createElement("div", null);
    }
    return /*#__PURE__*/React.createElement(Mixed, _extends({}, props, {
      property: property,
      ItemComponent: BasePropertyComponent,
      testId: testId
    }));
  }
  return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(Box, {
    "data-css": contentTag,
    "data-testid": testId
  }, /*#__PURE__*/React.createElement(Component, {
    property: property,
    resource: resource,
    record: record,
    filter: filter,
    onChange: onChange,
    where: where
  })));
};
export { BasePropertyComponent as default, BasePropertyComponent };