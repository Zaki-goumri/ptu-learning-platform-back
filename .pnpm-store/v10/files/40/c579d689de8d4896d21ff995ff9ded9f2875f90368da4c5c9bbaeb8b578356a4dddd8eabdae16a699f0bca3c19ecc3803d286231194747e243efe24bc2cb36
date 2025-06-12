const getBulkActionsFromRecords = records => {
  const actions = Object.values(records.reduce((memo, record) => ({
    ...memo,
    ...record.bulkActions.reduce((actionsMemo, action) => ({
      ...actionsMemo,
      [action.name]: action
    }), {})
  }), {}));
  return actions;
};
export default getBulkActionsFromRecords;