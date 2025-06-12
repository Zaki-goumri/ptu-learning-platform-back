/* eslint-disable no-unused-vars */
import pick from 'lodash/pick.js';
import { parse, stringify } from 'qs';
import { useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

// eslint-disable-next-line no-shadow
export let QueryParams = /*#__PURE__*/function (QueryParams) {
  QueryParams["Tab"] = "tab";
  QueryParams["Redirect"] = "redirectUrl";
  QueryParams["Refresh"] = "refresh";
  return QueryParams;
}({});

// eslint-disable-next-line no-shadow
export let QueryListParams = /*#__PURE__*/function (QueryListParams) {
  QueryListParams["Page"] = "page";
  QueryListParams["SortBy"] = "sortBy";
  QueryListParams["Direction"] = "direction";
  QueryListParams["Filters"] = "filters";
  QueryListParams["Query"] = "query";
  return QueryListParams;
}({});
export function useQueryParams() {
  const {
    pathname
  } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const parsedQuery = useMemo(() => parse(searchParams.toString(), {
    allowDots: true
  }), [searchParams, pathname]);
  const {
    sortBy,
    direction,
    page,
    tab,
    filters,
    redirectUrl
  } = parsedQuery;
  const listParams = useMemo(() => pick(parsedQuery, [QueryListParams.SortBy, QueryListParams.Filters, QueryListParams.Direction, QueryListParams.Page, QueryListParams.Query]), [parsedQuery]);
  function storeParams(params) {
    setSearchParams(stringify({
      sortBy,
      direction,
      page,
      tab,
      filters,
      redirectUrl,
      ...params
    }, {
      allowDots: true
    }));
  }
  function clearParams(...params) {
    const searchParamsKeys = Array.from(searchParams.keys());
    const clearCandidates = params.length ? params : searchParamsKeys;
    for (const param of searchParamsKeys) {
      for (const paramToClear of clearCandidates) {
        if (param.startsWith(paramToClear) && searchParams.get(param)) {
          searchParams.delete(param);
        }
      }
    }
    setSearchParams(searchParams);
  }
  function getParam(param) {
    searchParams.get(param);
  }
  return {
    parsedQuery,
    listParams,
    filters: filters,
    sortBy,
    direction,
    page,
    tab,
    redirectUrl,
    storeParams,
    clearParams,
    getParam
  };
}