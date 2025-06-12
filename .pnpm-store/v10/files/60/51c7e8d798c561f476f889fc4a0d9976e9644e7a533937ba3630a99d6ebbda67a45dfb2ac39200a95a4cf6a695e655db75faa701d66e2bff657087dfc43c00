import React from 'react';
import { Box } from "../../atoms/box/index.js";
import { Icon } from "../../atoms/icon/index.js";
import { Title } from "../../atoms/typography/index.js";
import { StyledNavigationElement } from "./navigation-element-styled.js";

// The longest part of the label which makes it no-wrap: ellipsis
// example: `MongooseWithLongNameAnd with space` should be truncated because 15 lines doesn't fit
// the width of the navbar. But "Postgres with long name and spaces" shouldn't be truncated because
// its "parts" doesn't exceed 15 chars each.
const PART_LENGTH_TO_ELLIPSIS = 15;

/**
 * @load ./navigation-element.doc.md
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see NavigationElementProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-navigation-element--default Storybook}
 * @section design-system
 * @new In version 3.3
 */
export const NavigationElement = props => {
  const {
    isOpen,
    icon,
    onClick,
    label,
    isSelected,
    href
  } = props;
  const expandable = typeof isOpen !== 'undefined';
  const chevron = isOpen ? 'ChevronUp' : 'ChevronDown';
  const hasLongName = label.split(' ').reduce((memo, part) => memo.length > part.length ? memo : part, '').length > PART_LENGTH_TO_ELLIPSIS;
  const handleNavigationClick = event => onClick ? onClick(event, props) : undefined;
  return /*#__PURE__*/React.createElement(StyledNavigationElement, {
    flex: true,
    flexDirection: "row",
    as: "a",
    isSelected: isSelected,
    isOpen: isOpen,
    href: href,
    onClick: handleNavigationClick
  }, icon && /*#__PURE__*/React.createElement(Box, {
    className: "icon-box",
    as: "span"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon
  })), /*#__PURE__*/React.createElement(Title, {
    style: {
      whiteSpace: hasLongName ? 'nowrap' : 'normal'
    }
  }, label), expandable && /*#__PURE__*/React.createElement(Box, {
    className: "arrow-box",
    as: "span"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: chevron
  })));
};
NavigationElement.displayName = 'NavigationElement';
export default NavigationElement;