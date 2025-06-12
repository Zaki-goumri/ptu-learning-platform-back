import React, { memo, useMemo } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Icon, cssClass } from '@adminjs/design-system';
import { useTranslation } from '../../hooks/index.js';
const SortLink = props => {
  const {
    sortBy,
    property,
    direction
  } = props;
  const location = useLocation();
  const {
    translateProperty
  } = useTranslation();
  const isActive = useMemo(() => sortBy === property.propertyPath, [sortBy, property]);
  const query = new URLSearchParams(location.search);
  const oppositeDirection = isActive && direction === 'asc' ? 'desc' : 'asc';
  const sortedByIcon = direction === 'asc' ? 'ChevronUp' : 'ChevronDown';
  query.set('direction', oppositeDirection);
  query.set('sortBy', property.propertyPath);
  return /*#__PURE__*/React.createElement(NavLink, {
    to: {
      search: query.toString()
    },
    className: cssClass('SortLink')
  }, translateProperty(property.label, property.resourceId), isActive && /*#__PURE__*/React.createElement(Icon, {
    icon: sortedByIcon,
    color: "grey40",
    ml: "lg"
  }));
};
const checkSortProps = (prevProps, nextProps) => prevProps.direction === nextProps.direction && prevProps.property.propertyPath === nextProps.property.propertyPath && prevProps.sortBy === nextProps.sortBy && prevProps.property.resourceId === nextProps.property.resourceId;
export default /*#__PURE__*/memo(SortLink, checkSortProps);