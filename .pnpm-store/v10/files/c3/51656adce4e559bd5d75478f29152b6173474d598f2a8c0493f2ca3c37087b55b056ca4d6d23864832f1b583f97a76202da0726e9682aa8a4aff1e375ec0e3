import { DynamicModule, OnModuleInit } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { AdminModuleFactory } from './interfaces/admin-module-factory.interface.js';
import { AdminModuleOptions } from './interfaces/admin-module-options.interface.js';
import { CustomLoader } from './interfaces/custom-loader.interface.js';
import { AbstractLoader } from './loaders/abstract.loader.js';
export declare class AdminModule implements OnModuleInit {
    private readonly httpAdapterHost;
    private readonly loader;
    private readonly adminModuleOptions;
    constructor(httpAdapterHost: HttpAdapterHost, loader: AbstractLoader, adminModuleOptions: AdminModuleOptions);
    static createAdmin(options: AdminModuleOptions & CustomLoader): DynamicModule;
    static createAdminAsync(options: AdminModuleFactory & CustomLoader): DynamicModule;
    onModuleInit(): Promise<void>;
}
