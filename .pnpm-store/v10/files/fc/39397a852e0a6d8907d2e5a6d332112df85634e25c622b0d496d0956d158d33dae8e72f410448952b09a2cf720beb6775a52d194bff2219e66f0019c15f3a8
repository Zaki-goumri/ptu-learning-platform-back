import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import useNotice from '../use-notice.js';
import ApiClient from '../../utils/api-client.js';
import { hasForceRefresh, removeForceRefresh } from '../../components/actions/utils/append-force-refresh.js';
const api = new ApiClient();

/**
 * @load ./use-records.doc.md
 * @subcategory Hooks
 * @class
 * @hideconstructor
 *
 * @param {string} resourceId      id of a resource for which you want to fetch records
 * @return {UseRecordsResult}
 * @bundle
 * @type {Function}
 */
function useRecords(resourceId) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [direction, setDirection] = useState('asc');
  const [sortBy, setSortBy] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const addNotice = useNotice();
  const onNotice = useNotice();
  const fetchData = () => {
    setLoading(true);
    const query = new URLSearchParams(location.search);
    const promise = api.resourceAction({
      actionName: 'list',
      resourceId,
      params: query
    });
    promise.then(response => {
      const listActionResponse = response.data;
      if (listActionResponse.notice) {
        onNotice(listActionResponse.notice);
      }
      if (listActionResponse.redirectUrl) {
        navigate(listActionResponse.redirectUrl);
        return;
      }
      setRecords(listActionResponse.records);
      setPage(listActionResponse.meta.page);
      setPerPage(listActionResponse.meta.perPage);
      setTotal(listActionResponse.meta.total);
      setDirection(listActionResponse.meta.direction);
      setSortBy(listActionResponse.meta.sortBy);
      setLoading(false);
    }).catch(() => {
      addNotice({
        message: 'errorFetchingRecords',
        type: 'error',
        resourceId
      });
    });
    return promise;
  };
  useEffect(() => {
    if (hasForceRefresh(location.search)) {
      navigate({
        pathname: location.pathname,
        search: removeForceRefresh(location.search).toString()
      }, {
        replace: true
      });
    } else {
      fetchData();
    }
  }, [resourceId, location.search, location.state]);
  return {
    records,
    loading,
    page,
    total,
    direction,
    sortBy,
    perPage,
    fetchData
  };
}
export { useRecords as default, useRecords };