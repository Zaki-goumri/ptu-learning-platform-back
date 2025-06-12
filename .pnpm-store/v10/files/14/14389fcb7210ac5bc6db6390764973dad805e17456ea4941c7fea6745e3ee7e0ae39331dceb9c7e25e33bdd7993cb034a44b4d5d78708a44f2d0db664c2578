import { Router as AdminRouter } from "adminjs";
import { Router } from "express";
import formidableMiddleware from "express-formidable";
import path from "path";
import { WrongArgumentError } from "./errors.js";
import { log } from "./logger.js";
import { convertToExpressRoute } from "./convertRoutes.js";
const INVALID_ADMINJS_INSTANCE = "You have to pass an instance of AdminJS to the buildRouter() function";
export const initializeAdmin = (admin) => {
    var _a;
    if (((_a = admin === null || admin === void 0 ? void 0 : admin.constructor) === null || _a === void 0 ? void 0 : _a.name) !== "AdminJS") {
        throw new WrongArgumentError(INVALID_ADMINJS_INSTANCE);
    }
    admin.initialize().then(() => {
        log.debug("AdminJS: bundle ready");
    });
};
export const routeHandler = ({ admin, route }) => async (req, res, next) => {
    try {
        const controller = new route.Controller({ admin }, req.session && req.session.adminUser);
        const { params, query } = req;
        const method = req.method.toLowerCase();
        const payload = Object.assign(Object.assign({}, (req.fields || {})), (req.files || {}));
        const html = await controller[route.action](Object.assign(Object.assign({}, req), { params,
            query,
            payload,
            method }), res);
        if (route.contentType) {
            res.set({ "Content-Type": route.contentType });
        }
        if (html) {
            res.send(html);
        }
    }
    catch (e) {
        next(e);
    }
};
export const buildRoute = ({ route, router, admin, }) => {
    // we have to change routes defined in AdminJS from {recordId} to :recordId
    const expressPath = convertToExpressRoute(route.path);
    if (route.method === "GET") {
        router.get(expressPath, routeHandler({ admin, route }));
    }
    if (route.method === "POST") {
        router.post(expressPath, routeHandler({ admin, route }));
    }
};
export const buildRoutes = ({ admin, routes, router, }) => {
    routes.forEach((route) => buildRoute({ route, router, admin }));
};
export const buildAssets = ({ admin, assets, routes, router, }) => {
    // Note: We want components.bundle.js to be globally available. In production it is served as a .js asset, meanwhile
    // in local environments it's a route with "bundleComponents" action assigned.
    const componentBundlerRoute = routes.find((r) => r.action === "bundleComponents");
    if (componentBundlerRoute) {
        buildRoute({ route: componentBundlerRoute, router, admin });
    }
    assets.forEach((asset) => {
        router.get(asset.path, async (_req, res) => {
            res.sendFile(path.resolve(asset.src));
        });
    });
};
export const buildRouter = (admin, predefinedRouter, formidableOptions) => {
    initializeAdmin(admin);
    const { routes, assets } = AdminRouter;
    const router = predefinedRouter !== null && predefinedRouter !== void 0 ? predefinedRouter : Router();
    // todo fix types
    router.use(formidableMiddleware(formidableOptions));
    buildAssets({ admin, assets, routes, router });
    buildRoutes({ admin, routes, router });
    return router;
};
