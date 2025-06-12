var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AdminModule_1;
import { Inject, Module } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import AdminResourceService from './admin-resource.service.js';
import { AbstractLoader } from './loaders/abstract.loader.js';
import { serveStaticProvider } from './serve-static.provider.js';
import { CONFIG_TOKEN } from './token.constants.js';
let AdminModule = AdminModule_1 = class AdminModule {
    httpAdapterHost;
    loader;
    adminModuleOptions;
    constructor(httpAdapterHost, loader, adminModuleOptions) {
        this.httpAdapterHost = httpAdapterHost;
        this.loader = loader;
        this.adminModuleOptions = adminModuleOptions;
    }
    static createAdmin(options) {
        return {
            module: AdminModule_1,
            providers: [
                {
                    provide: CONFIG_TOKEN,
                    useValue: options,
                },
                options.customLoader ? {
                    provide: AbstractLoader,
                    useClass: options.customLoader,
                } : serveStaticProvider,
            ],
        };
    }
    static createAdminAsync(options) {
        return {
            imports: options.imports,
            module: AdminModule_1,
            providers: [
                {
                    provide: CONFIG_TOKEN,
                    useFactory: options.useFactory,
                    inject: options.inject,
                },
                options.customLoader ? {
                    provide: AbstractLoader,
                    useClass: options.customLoader,
                } : serveStaticProvider,
            ],
        };
    }
    async onModuleInit() {
        if ('shouldBeInitialized' in this.adminModuleOptions && !this.adminModuleOptions.shouldBeInitialized) {
            return;
        }
        const { default: AdminJS } = await import('adminjs');
        const forFeatureResources = AdminResourceService.getResources();
        const adminJSOptions = forFeatureResources.length > 0
            ? { ...this.adminModuleOptions.adminJsOptions, resources: forFeatureResources }
            : this.adminModuleOptions.adminJsOptions;
        const admin = new AdminJS(adminJSOptions);
        admin.watch();
        const { httpAdapter } = this.httpAdapterHost;
        this.loader.register(admin, httpAdapter, {
            ...this.adminModuleOptions,
            adminJsOptions: admin.options,
        });
    }
};
AdminModule = AdminModule_1 = __decorate([
    Module({}),
    __param(2, Inject(CONFIG_TOKEN)),
    __metadata("design:paramtypes", [HttpAdapterHost,
        AbstractLoader, Object])
], AdminModule);
export { AdminModule };
