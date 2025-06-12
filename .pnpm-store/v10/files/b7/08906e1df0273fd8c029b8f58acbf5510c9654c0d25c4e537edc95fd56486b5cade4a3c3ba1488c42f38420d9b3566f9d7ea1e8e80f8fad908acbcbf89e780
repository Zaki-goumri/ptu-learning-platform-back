import { useState, useCallback } from 'react';
import ApiClient from '../../utils/api-client.js';
import { paramsToFormData } from './params-to-form-data.js';
import useNotice from '../use-notice.js';
import mergeRecordResponse from './merge-record-response.js';
import updateRecord from './update-record.js';
import isEntireRecordGiven from './is-entire-record-given.js';
import { filterRecordParams, isPropertyPermitted } from './filter-record.js';
import { flat } from '../../../utils/flat/index.js';
import { useQueryParams } from '../use-query-params.js';
const api = new ApiClient();

/**
 * @load ./use-record.doc.md
 * @subcategory Hooks
 * @class
 * @hideconstructor
 * @bundle
 * @param {RecordJSON} [initialRecord],
 * @param {string} resourceId
 * @param {UseRecordOptions} [options]
 * @return {UseRecordResult}
 */
export const useRecord = (initialRecord, resourceId, options) => {
  // setting up state
  const [loading, setLoading] = useState(false);
  const [isSynced, setIsSynced] = useState(true);
  const [progress, setProgress] = useState(0);
  const {
    parsedQuery
  } = useQueryParams();
  const filteredRecord = initialRecord ? filterRecordParams(initialRecord, options) : null;
  const [record, setRecord] = useState({
    ...filteredRecord,
    params: filteredRecord?.params ?? {},
    errors: initialRecord?.errors ?? {},
    populated: initialRecord?.populated ?? {}
  });

  // it keeps the same format as useState function which can take either value or function
  const setFilteredRecord = useCallback(value => {
    const newRecord = value instanceof Function ? value(record) : value;
    setRecord(filterRecordParams(newRecord, options));
  }, [options, record]);
  const onNotice = useNotice();
  const handleChange = useCallback((propertyOrRecord, value, incomingRecord) => {
    if (isEntireRecordGiven(propertyOrRecord, value)) {
      setFilteredRecord(propertyOrRecord);
    } else if (isPropertyPermitted(propertyOrRecord, options)) {
      setRecord(updateRecord(propertyOrRecord, value, incomingRecord));
    } else if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn([`You are trying to set property: "${propertyOrRecord}" which`, 'is not permitted. Take a look at `useRecord(..., { includeParams: [...]})`'].join('\n'));
    }
    setIsSynced(false);
  }, [setRecord, options]);
  const handleSubmit = useCallback((customParams = {}, submitOptions) => {
    setLoading(true);
    const mergedParams = flat.merge(record.params, customParams);
    const formData = paramsToFormData(mergedParams);
    const actionParams = {
      resourceId,
      onUploadProgress: e => setProgress(Math.round(e.loaded * 100 / (e.total ?? 1))),
      data: formData,
      params: parsedQuery,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    const promise = initialRecord?.id ? api.recordAction({
      ...actionParams,
      actionName: 'edit',
      recordId: record.id
    }) : api.resourceAction({
      ...actionParams,
      actionName: 'new'
    });
    promise.then(response => {
      if (response.data.notice) {
        onNotice(response.data.notice);
      }
      if (submitOptions?.updateOnSave !== false) {
        setFilteredRecord(prev => mergeRecordResponse(prev, response.data));
      }
      setProgress(0);
      setLoading(false);
      setIsSynced(true);
    }).catch(() => {
      onNotice({
        message: 'There was an error updating record, Check out console to see more information.',
        type: 'error'
      });
      setProgress(0);
      setLoading(false);
    });
    return promise;
  }, [record, resourceId, setLoading, setProgress, setRecord]);
  return {
    record,
    handleChange,
    submit: handleSubmit,
    loading,
    progress,
    setRecord: setFilteredRecord,
    isSynced
  };
};
export default useRecord;