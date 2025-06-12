import type { Location } from 'react-router';
import { ROUTE_CHANGED, INITIAL_ROUTE } from '../actions/route-changed.js';
export type RouterInState = {
    from: Partial<Location>;
    to: Partial<Location>;
};
export declare const routerReducer: (state: RouterInState | undefined, action: {
    type: typeof INITIAL_ROUTE | typeof ROUTE_CHANGED;
    data: any;
}) => {
    from: any;
    to: Partial<Location>;
} | {
    from: {
        state?: any;
        key?: string | undefined;
        pathname?: string | undefined;
        search?: string | undefined;
        hash?: string | undefined;
    };
    to: any;
};
