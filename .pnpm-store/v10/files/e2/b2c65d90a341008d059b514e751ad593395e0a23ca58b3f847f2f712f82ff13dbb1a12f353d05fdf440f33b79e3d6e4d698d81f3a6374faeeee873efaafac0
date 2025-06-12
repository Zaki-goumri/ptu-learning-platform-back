export declare enum QueryParams {
    Tab = "tab",
    Redirect = "redirectUrl",
    Refresh = "refresh"
}
export declare enum QueryListParams {
    Page = "page",
    SortBy = "sortBy",
    Direction = "direction",
    Filters = "filters",
    Query = "query"
}
type Params<ParamsT = Record<string, unknown>, FiltersT = Record<string, unknown>> = ParamsT & {
    sortBy: string;
    page: string;
    tab: string;
    redirectUrl: string;
    direction: 'asc' | 'desc';
    filters: FiltersT;
    refresh: boolean;
};
export declare function useQueryParams<ParamsT = Record<string, unknown>, FiltersT = Record<string, unknown>>(): {
    parsedQuery: Params<ParamsT, FiltersT>;
    listParams: Partial<Params<ParamsT, FiltersT>>;
    filters: FiltersT;
    sortBy: string;
    direction: "asc" | "desc";
    page: string;
    tab: string;
    redirectUrl: string;
    storeParams: (params: Partial<Params<ParamsT, FiltersT>>) => void;
    clearParams: (...params: string[]) => void;
    getParam: (param: keyof Params<ParamsT, FiltersT> & string) => void;
};
export {};
