function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import JWPaginate from 'jw-paginate';
import React from 'react';
import { styled } from "../../../build/utils/styled.js";
import { Box } from "../../atoms/box/index.js";
import { Button } from "../../atoms/button/index.js";
import { Icon } from "../../atoms/icon/index.js";
import { cssClass } from "../../utils/css-class.js";
const MIN_PAGES_FOR_FIRST_PAGE_BUTTON = 3;
const FIRST_PAGE = 1;

/**
 * @alias PaginationProps
 * @memberof Pagination
 */

const PaginationButton = props => ({
  size: 'icon',
  variant: props.variant || 'text'
});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const PaginationLink = styled(Button).attrs(PaginationButton)`
  min-width: 28px;
  height: 28px;
  line-height: 12px;
  padding: 3px 6px;
  text-align: center;
`;
PaginationLink.defaultProps = {
  className: cssClass('PaginationLink')
};
const PaginationWrapper = styled(Box)`
  display: inline-block;
  padding: 2px;
 
  border: 1px solid ${({
  theme
}) => theme.colors.border};
  & > :hover {
    text-decoration: none;
  }
  & > :first-child {
    border-right: 1px solid ${({
  theme
}) => theme.colors.border};
  }
  & > :last-child {
    border-left: 1px solid ${({
  theme
}) => theme.colors.border};
  }
`;

/**
 * @classdesc
 *
 * <img src="components/pagination.png" />
 *
 * Pagination component
 *
 * ### Usage
 *
 * ```javascript
 * import { Pagination, PaginationProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see PaginationProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-pagination--default Storybook}
 * @example
 * const location = { search: ''}
 * return (
 *   <Text py="xl" textAlign="center">
 *     <Pagination
 *      total={100}
 *      page={4}
 *      perPage={10}
 *      location={location}
 *      onChange={(item) => alert(`clicked ${item}`)}
 *   />
 *   </Text>
 * )
 * @section design-system
 */
const Pagination = props => {
  const {
    total,
    page,
    perPage,
    onChange,
    ...rest
  } = props;
  const currentPage = page || FIRST_PAGE;
  const paginate = JWPaginate(total, currentPage, perPage);
  const isFirstPage = currentPage === paginate.startPage;
  const isLastPage = currentPage === paginate.endPage;
  const prevPage = isFirstPage ? currentPage : currentPage - 1;
  const nextPage = isLastPage ? currentPage : currentPage + 1;
  if (paginate.totalPages === FIRST_PAGE || total === 0) {
    return null;
  }
  return /*#__PURE__*/React.createElement(PaginationWrapper, _extends({
    className: cssClass('Pagination')
  }, rest), total >= MIN_PAGES_FOR_FIRST_PAGE_BUTTON ? /*#__PURE__*/React.createElement(PaginationLink, {
    "data-testid": "first",
    variant: "text",
    onClick: () => !isFirstPage ? onChange(FIRST_PAGE) : undefined
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "SkipBack"
  })) : null, /*#__PURE__*/React.createElement(PaginationLink, {
    "data-testid": "previous",
    variant: "text",
    onClick: () => !isFirstPage ? onChange(prevPage) : undefined
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronLeft"
  })), paginate.pages.map(p => /*#__PURE__*/React.createElement(PaginationLink, {
    key: p,
    onClick: () => onChange(p),
    variant: p === currentPage ? 'contained' : 'text',
    className: cssClass('PaginationLink', p === currentPage ? 'current' : ''),
    "data-testid": `page-${p}`
  }, p)), /*#__PURE__*/React.createElement(PaginationLink, {
    "data-testid": "next",
    variant: "text",
    onClick: () => !isLastPage ? onChange(nextPage) : undefined
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronRight"
  })), total >= MIN_PAGES_FOR_FIRST_PAGE_BUTTON ? /*#__PURE__*/React.createElement(PaginationLink, {
    "data-testid": "last",
    variant: "text",
    onClick: () => !isLastPage ? onChange(paginate.totalPages) : undefined
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "SkipForward"
  })) : null);
};
Pagination.displayName = 'Pagination';
export { Pagination };
export default Pagination;