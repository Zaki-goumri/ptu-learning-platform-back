var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
import { loadPackage } from '@nestjs/common/utils/load-package.util.js';
import { AbstractLoader } from './abstract.loader.js';
let ExpressLoader = class ExpressLoader extends AbstractLoader {
    async register(admin, httpAdapter, options) {
        const app = httpAdapter.getInstance();
        loadPackage('express', '@adminjs/nestjs');
        const adminJsExpressjs = await import('@adminjs/express');
        loadPackage('express-formidable', '@adminjs/nestjs');
        let router;
        if (options.auth) {
            loadPackage('express-session', '@adminjs/nestjs');
            router = adminJsExpressjs.default.buildAuthenticatedRouter(admin, options.auth, undefined, options.sessionOptions, options.formidableOptions);
        }
        else {
            router = adminJsExpressjs.default.buildRouter(admin, undefined, options.formidableOptions);
        }
        app.use(options.adminJsOptions.rootPath, function admin(req, res, next) {
            return router(req, res, next);
        });
        this.reorderRoutes(app);
    }
    reorderRoutes(app) {
        let jsonParser = [];
        let urlencodedParser = [];
        let admin = [];
        if (app && app._router && app._router.stack) {
            const jsonParserIndex = app._router.stack.findIndex((layer) => layer.name === 'jsonParser');
            if (jsonParserIndex >= 0) {
                jsonParser = app._router.stack.splice(jsonParserIndex, 1);
            }
            const urlencodedParserIndex = app._router.stack.findIndex((layer) => layer.name === 'urlencodedParser');
            if (urlencodedParserIndex >= 0) {
                urlencodedParser = app._router.stack.splice(urlencodedParserIndex, 1);
            }
            const adminIndex = app._router.stack.findIndex((layer) => layer.name === 'admin');
            if (adminIndex >= 0) {
                admin = app._router.stack.splice(adminIndex, 1);
            }
            const corsIndex = app._router.stack.findIndex((layer) => layer.name === 'corsMiddleware');
            const expressInitIndex = app._router.stack.findIndex((layer) => layer.name === 'expressInit');
            const initIndex = (corsIndex >= 0 ? corsIndex : expressInitIndex) + 1;
            app._router.stack.splice(initIndex, 0, ...admin, ...jsonParser, ...urlencodedParser);
        }
    }
};
ExpressLoader = __decorate([
    Injectable()
], ExpressLoader);
export { ExpressLoader };
