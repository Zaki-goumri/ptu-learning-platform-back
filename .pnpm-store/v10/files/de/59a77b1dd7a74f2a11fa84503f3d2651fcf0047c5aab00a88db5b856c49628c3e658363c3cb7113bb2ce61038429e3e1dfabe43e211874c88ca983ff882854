import { Loader, Table, TableBody } from '@adminjs/design-system';
import React from 'react';
import allowOverride from '../../../hoc/allow-override.js';
import { getResourceElementCss } from '../../../utils/index.js';
import NoRecords from './no-records.js';
import RecordInList from './record-in-list.js';
import RecordsTableHeader from './records-table-header.js';
import SelectedRecords from './selected-records.js';

/**
 * @alias RecordsTableProps
 * @memberof RecordsTable
 */

/**
 * @classdesc
 * Renders an entire records table. To fill the data you might need:
 *
 * - {@link useRecords} and
 * - {@link useSelectedRecords} hooks
 *
 * so make sure to see at the documentation pages for both of them
 *
 * @component
 * @class
 * @hideconstructor
 * @subcategory Application
 */
const RecordsTable = props => {
  const {
    resource,
    records,
    actionPerformed,
    sortBy,
    direction,
    isLoading,
    onSelect,
    selectedRecords,
    onSelectAll
  } = props;
  if (!records.length) {
    if (isLoading) {
      return /*#__PURE__*/React.createElement(Loader, null);
    }
    return /*#__PURE__*/React.createElement(NoRecords, {
      resource: resource
    });
  }
  const selectedAll = selectedRecords && !!records.find(record => selectedRecords.find(selected => selected.id === record.id));
  const recordsHaveBulkAction = !!records.find(record => record.bulkActions.length);
  const contentTag = getResourceElementCss(resource.id, 'table');
  const selectedTag = getResourceElementCss(resource.id, 'table-selected-records');
  const bodyTag = getResourceElementCss(resource.id, 'table-body');
  return /*#__PURE__*/React.createElement(Table, {
    "data-css": contentTag
  }, /*#__PURE__*/React.createElement(SelectedRecords, {
    resource: resource,
    selectedRecords: selectedRecords,
    "data-css": selectedTag
  }), /*#__PURE__*/React.createElement(RecordsTableHeader, {
    properties: resource.listProperties,
    titleProperty: resource.titleProperty,
    direction: direction,
    sortBy: sortBy,
    onSelectAll: recordsHaveBulkAction ? onSelectAll : undefined,
    selectedAll: selectedAll
  }), /*#__PURE__*/React.createElement(TableBody, {
    "data-css": bodyTag
  }, records.map(record => /*#__PURE__*/React.createElement(RecordInList, {
    record: record,
    resource: resource,
    key: record.id,
    actionPerformed: actionPerformed,
    isLoading: isLoading,
    onSelect: onSelect,
    isSelected: selectedRecords && !!selectedRecords.find(selected => selected.id === record.id)
  }))));
};
const OverridableRecordsTable = allowOverride(RecordsTable, 'RecordsTable');
export { OverridableRecordsTable as default, OverridableRecordsTable as RecordsTable, RecordsTable as OriginalRecordsTable };