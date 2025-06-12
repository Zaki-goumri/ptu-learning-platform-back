"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCacheManager = createCacheManager;
const cache_manager_1 = require("cache-manager");
const keyv_1 = __importDefault(require("keyv"));
const cache_constants_1 = require("./cache.constants");
const cache_module_definition_1 = require("./cache.module-definition");
/**
 * Creates a CacheManager Provider.
 *
 * @publicApi
 */
function createCacheManager() {
    return {
        provide: cache_constants_1.CACHE_MANAGER,
        useFactory: async (options) => {
            const cachingFactory = async (store, options) => {
                if (store instanceof keyv_1.default) {
                    return store;
                }
                return new keyv_1.default({
                    store,
                    ttl: options.ttl,
                    namespace: options.namespace,
                });
            };
            const stores = Array.isArray(options.stores)
                ? await Promise.all(options.stores.map(store => cachingFactory(store, options)))
                : options.stores
                    ? [await cachingFactory(options.stores, options)]
                    : undefined;
            const cacheManager = stores
                ? (0, cache_manager_1.createCache)({
                    ...options,
                    stores,
                })
                : (0, cache_manager_1.createCache)({
                    ttl: options.ttl,
                    refreshThreshold: options.refreshThreshold,
                    nonBlocking: options.nonBlocking,
                });
            cacheManager.onModuleDestroy = async () => {
                if (!stores) {
                    return;
                }
                await Promise.all(stores.map(async (store) => store.disconnect()));
            };
            return cacheManager;
        },
        inject: [cache_module_definition_1.MODULE_OPTIONS_TOKEN],
    };
}
