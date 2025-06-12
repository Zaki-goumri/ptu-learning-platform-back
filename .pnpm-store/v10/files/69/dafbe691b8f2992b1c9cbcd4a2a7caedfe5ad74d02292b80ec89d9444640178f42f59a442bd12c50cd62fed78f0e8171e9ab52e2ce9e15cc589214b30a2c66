import { CheckBox, TableCell, TableHead, TableRow } from '@adminjs/design-system';
import React from 'react';
import allowOverride from '../../../hoc/allow-override.js';
import { getResourceElementCss } from '../../../utils/index.js';
import PropertyHeader from './property-header.js';
import { display } from './utils/display.js';

/**
 * @memberof RecordsTableHeader
 * @alias RecordsTableHeaderProps
 */

/**
 * Prints `thead` section for table with records.
 *
 * ```
 * import { RecordsTableHeader } from 'adminjs'
 * ```
 *
 * @component
 * @subcategory Application
 * @example <caption>List with 2 properties</caption>
 * const properties = [{
 *   label: 'First Name',
 *   name: 'firstName',
 *   isSortable: true,
 * }, {
 *   label: 'Last Name',
 *   name: 'lastName',
 * }]
 * return (
 * <Box py="xl">
 *   <Table>
 *    <RecordsTableHeader
 *      properties={properties}
 *      titleProperty={properties[0]}
 *      sortBy={'firstName'}
 *      direction={'asc'}
 *    />
 *    <TableBody>
 *      <TableRow>
 *        <TableCell>John</TableCell>
 *        <TableCell>Doe</TableCell>
 *        <TableCell></TableCell>
 *      </TableRow>
 *      <TableRow>
 *        <TableCell>Max</TableCell>
 *        <TableCell>Kodaly</TableCell>
 *        <TableCell></TableCell>
 *      </TableRow>
 *    </TableBody>
 *   </Table>
 * </Box>
 * )
 */
const RecordsTableHeader = props => {
  const {
    titleProperty,
    properties,
    sortBy,
    direction,
    onSelectAll,
    selectedAll
  } = props;
  const contentTag = getResourceElementCss(titleProperty.resourceId, 'table-head');
  const rowTag = `${titleProperty.resourceId}-table-head-row`;
  const checkboxCss = `${titleProperty.resourceId}-checkbox-table-cell`;
  return /*#__PURE__*/React.createElement(TableHead, {
    "data-css": contentTag
  }, /*#__PURE__*/React.createElement(TableRow, {
    "data-css": rowTag
  }, /*#__PURE__*/React.createElement(TableCell, {
    "data-css": checkboxCss
  }, onSelectAll ? /*#__PURE__*/React.createElement(CheckBox, {
    style: {
      marginLeft: 5
    },
    onChange: () => onSelectAll(),
    checked: selectedAll
  }) : null), properties.map(property => /*#__PURE__*/React.createElement(PropertyHeader, {
    display: display(property.isTitle),
    key: property.propertyPath,
    titleProperty: titleProperty,
    property: property,
    sortBy: sortBy,
    direction: direction
  })), /*#__PURE__*/React.createElement(TableCell, {
    key: "actions",
    style: {
      width: 80
    }
  })));
};
const OverridableRecordsTableHeader = allowOverride(RecordsTableHeader, 'RecordsTableHeader');
export { OverridableRecordsTableHeader as default, OverridableRecordsTableHeader as RecordsTableHeader, RecordsTableHeader as OriginalRecordsTableHeader };