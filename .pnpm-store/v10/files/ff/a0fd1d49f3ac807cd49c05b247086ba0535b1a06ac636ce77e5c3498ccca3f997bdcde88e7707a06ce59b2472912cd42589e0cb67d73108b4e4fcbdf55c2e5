import { Box, Pagination, Text } from '@adminjs/design-system';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import allowOverride from '../../hoc/allow-override.js';
import { useQueryParams } from '../../hooks/use-query-params.js';
import useRecords from '../../hooks/use-records/use-records.js';
import useSelectedRecords from '../../hooks/use-selected-records/use-selected-records.js';
import { getActionElementCss } from '../../utils/index.js';
import RecordsTable from '../app/records-table/records-table.js';
import { REFRESH_KEY } from './utils/append-force-refresh.js';
const List = ({
  resource,
  setTag
}) => {
  const {
    records,
    loading,
    direction,
    sortBy,
    page,
    total,
    fetchData,
    perPage
  } = useRecords(resource.id);
  const {
    selectedRecords,
    handleSelect,
    handleSelectAll,
    setSelectedRecords
  } = useSelectedRecords(records);
  const location = useLocation();
  const {
    storeParams
  } = useQueryParams();
  useEffect(() => {
    if (setTag) {
      setTag(total.toString());
    }
  }, [total]);
  useEffect(() => {
    setSelectedRecords([]);
  }, [resource.id]);
  useEffect(() => {
    const search = new URLSearchParams(location.search);
    if (search.get(REFRESH_KEY)) {
      setSelectedRecords([]);
    } else {
      const recordIds = search.get('recordIds')?.split?.(',') ?? [];
      setSelectedRecords(records.filter(r => recordIds.includes(r.id.toString())));
    }
  }, [location.search, records]);
  const handleActionPerformed = () => fetchData();
  const handlePaginationChange = pageNumber => {
    storeParams({
      page: pageNumber.toString()
    });
  };
  const contentTag = getActionElementCss(resource.id, 'list', 'table-wrapper');
  return /*#__PURE__*/React.createElement(Box, {
    variant: "container",
    "data-css": contentTag
  }, /*#__PURE__*/React.createElement(RecordsTable, {
    resource: resource,
    records: records,
    actionPerformed: handleActionPerformed,
    onSelect: handleSelect,
    onSelectAll: handleSelectAll,
    selectedRecords: selectedRecords,
    direction: direction,
    sortBy: sortBy,
    isLoading: loading
  }), /*#__PURE__*/React.createElement(Text, {
    mt: "xl",
    textAlign: "center"
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    perPage: perPage,
    total: total,
    onChange: handlePaginationChange
  })));
};
const OverridableList = allowOverride(List, 'DefaultListAction');
export { OverridableList as default, OverridableList as List, List as OriginalList };