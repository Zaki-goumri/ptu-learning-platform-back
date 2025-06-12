import AdminJS, { Router as AdminRouter } from "adminjs";
import { RequestHandler, Router } from "express";
import { FormidableOptions } from "./types.js";
export type RouteHandlerArgs = {
    admin: AdminJS;
    route: (typeof AdminRouter)["routes"][0];
};
export type BuildRoutesArgs = {
    admin: AdminJS;
    routes: (typeof AdminRouter)["routes"];
    router: Router;
};
export type BuildAssetsArgs = {
    admin: AdminJS;
    assets: (typeof AdminRouter)["assets"];
    routes: (typeof AdminRouter)["routes"];
    router: Router;
};
export declare const initializeAdmin: (admin: AdminJS) => void;
export declare const routeHandler: ({ admin, route }: RouteHandlerArgs) => RequestHandler;
export declare const buildRoute: ({ route, router, admin, }: {
    route: (typeof AdminRouter)["routes"][number];
    router: Router;
    admin: AdminJS;
}) => void;
export declare const buildRoutes: ({ admin, routes, router, }: BuildRoutesArgs) => void;
export declare const buildAssets: ({ admin, assets, routes, router, }: BuildAssetsArgs) => void;
export declare const buildRouter: (admin: AdminJS, predefinedRouter?: Router | null, formidableOptions?: FormidableOptions) => Router;
