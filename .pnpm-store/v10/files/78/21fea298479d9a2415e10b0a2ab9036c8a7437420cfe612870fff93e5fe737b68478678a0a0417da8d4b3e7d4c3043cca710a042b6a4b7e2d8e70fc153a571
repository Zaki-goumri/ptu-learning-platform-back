import { Box, Button, Drawer, DrawerContent, DrawerFooter, H3, Icon } from '@adminjs/design-system';
import isNil from 'lodash/isNil.js';
import pickBy from 'lodash/pickBy.js';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import allowOverride from '../../hoc/allow-override.js';
import { useTranslation } from '../../hooks/index.js';
import { useFilterDrawer } from '../../hooks/use-filter-drawer.js';
import { useQueryParams } from '../../hooks/use-query-params.js';
import { getResourceElementCss } from '../../utils/index.js';
import BasePropertyComponent from '../property-type/index.js';
const FilterDrawer = props => {
  const {
    resource
  } = props;
  const properties = resource.filterProperties;
  const [filter, setFilter] = useState({});
  const params = useParams();
  const {
    translateButton,
    translateLabel
  } = useTranslation();
  const initialLoad = useRef(true);
  const {
    isVisible,
    toggleFilter
  } = useFilterDrawer();
  const {
    storeParams,
    clearParams,
    filters
  } = useQueryParams();
  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
    } else {
      setFilter({});
    }
  }, [params.resourceId]);
  const handleSubmit = event => {
    event.preventDefault();
    storeParams({
      filters: pickBy(filter, v => !isNil(v)),
      page: '1'
    });
  };
  const handleReset = event => {
    event.preventDefault();
    clearParams('filters');
    setFilter({});
  };
  useEffect(() => {
    if (filters) {
      setFilter(filters);
    }
  }, [filters]);
  const handleChange = (propertyName, value) => {
    if (propertyName.params) {
      throw new Error('you can not pass RecordJSON to filters');
    }
    setFilter({
      ...filter,
      [propertyName]: typeof value === 'string' && !value.length ? undefined : value
    });
  };
  const contentTag = getResourceElementCss(resource.id, 'filter-drawer');
  const cssContent = getResourceElementCss(resource.id, 'filter-drawer-content');
  const cssFooter = getResourceElementCss(resource.id, 'filter-drawer-footer');
  const cssButtonApply = getResourceElementCss(resource.id, 'filter-drawer-button-apply');
  const cssButtonReset = getResourceElementCss(resource.id, 'filter-drawer-button-reset');
  return /*#__PURE__*/React.createElement(Drawer, {
    variant: "filter",
    isHidden: !isVisible,
    as: "form",
    onSubmit: handleSubmit,
    onReset: handleReset,
    "data-css": contentTag
  }, /*#__PURE__*/React.createElement(DrawerContent, {
    "data-css": cssContent
  }, /*#__PURE__*/React.createElement(Box, {
    flex: true,
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(H3, null, translateLabel('filters', resource.id)), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    variant: "light",
    size: "icon",
    rounded: true,
    color: "text",
    onClick: toggleFilter
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "X"
  }))), /*#__PURE__*/React.createElement(Box, {
    my: "x3"
  }, properties.map(property => /*#__PURE__*/React.createElement(BasePropertyComponent, {
    key: property.propertyPath,
    where: "filter",
    onChange: handleChange,
    property: property,
    filter: filter,
    resource: resource
  })))), /*#__PURE__*/React.createElement(DrawerFooter, {
    "data-css": cssFooter
  }, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    variant: "light",
    onClick: handleReset,
    "data-css": cssButtonReset
  }, translateButton('resetFilter', resource.id)), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "contained",
    "data-css": cssButtonApply
  }, translateButton('applyChanges', resource.id))));
};
const OverridableFilterDrawer = allowOverride(FilterDrawer, 'FilterDrawer');
export { OverridableFilterDrawer as default, OverridableFilterDrawer as FilterDrawer, FilterDrawer as OriginalFilterDrawer };