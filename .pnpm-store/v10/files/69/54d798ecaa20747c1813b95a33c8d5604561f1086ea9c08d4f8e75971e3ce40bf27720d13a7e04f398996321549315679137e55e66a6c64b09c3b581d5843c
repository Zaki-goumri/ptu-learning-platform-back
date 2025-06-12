import EventEmitter from 'node:events';
import { KeyvStoreAdapter, StoredData, Keyv, StoredDataRaw } from 'keyv';

type CacheManagerStore = {
    name: string;
    isCacheable?: (value: unknown) => boolean;
    get(key: string): Promise<any>;
    mget(...keys: string[]): Promise<unknown[]>;
    set(key: string, value: any, ttl?: number): Promise<any>;
    mset(data: Record<string, any>, ttl?: number): Promise<void>;
    del(key: string): Promise<void>;
    mdel(...keys: string[]): Promise<void>;
    ttl(key: string, ttl?: number): Promise<number>;
    keys(): Promise<string[]>;
    reset?(): Promise<void>;
    on?(event: string, listener: (...arguments_: any[]) => void): void;
    disconnect?(): Promise<void>;
};
declare class KeyvAdapter implements KeyvStoreAdapter {
    opts: any;
    namespace?: string | undefined;
    private readonly _cache;
    constructor(store: CacheManagerStore);
    get<T>(key: string): Promise<StoredData<T> | undefined>;
    set(key: string, value: any, ttl?: number): Promise<boolean>;
    delete(key: string): Promise<boolean>;
    clear(): Promise<void>;
    has?(key: string): Promise<boolean>;
    getMany?<T>(keys: string[]): Promise<Array<StoredData<T | undefined>>>;
    deleteMany?(key: string[]): Promise<boolean>;
    on(event: string, listener: (...arguments_: any[]) => void): this;
    disconnect?(): Promise<void>;
}

type CreateCacheOptions = {
    stores?: Keyv[];
    ttl?: number;
    refreshThreshold?: number;
    refreshAllStores?: boolean;
    nonBlocking?: boolean;
    cacheId?: string;
};
type WrapOptions<T> = {
    ttl?: number | ((value: T) => number);
    refreshThreshold?: number | ((value: T) => number);
};
type WrapOptionsRaw<T> = WrapOptions<T> & {
    raw: true;
};
type Cache = {
    get: <T>(key: string) => Promise<T | null>;
    mget: <T>(keys: string[]) => Promise<Array<T | null>>;
    ttl: (key: string) => Promise<number | null>;
    set: <T>(key: string, value: T, ttl?: number) => Promise<T>;
    mset: <T>(list: Array<{
        key: string;
        value: T;
        ttl?: number;
    }>) => Promise<Array<{
        key: string;
        value: T;
        ttl?: number;
    }>>;
    del: (key: string) => Promise<boolean>;
    mdel: (keys: string[]) => Promise<boolean>;
    clear: () => Promise<boolean>;
    on: <E extends keyof Events>(event: E, listener: Events[E]) => EventEmitter;
    off: <E extends keyof Events>(event: E, listener: Events[E]) => EventEmitter;
    disconnect: () => Promise<undefined>;
    cacheId: () => string;
    stores: Keyv[];
    wrap<T>(key: string, fnc: () => T | Promise<T>, ttl?: number | ((value: T) => number), refreshThreshold?: number | ((value: T) => number)): Promise<T>;
    wrap<T>(key: string, fnc: () => T | Promise<T>, options: WrapOptions<T>): Promise<T>;
    wrap<T>(key: string, fnc: () => T | Promise<T>, options: WrapOptionsRaw<T>): Promise<StoredDataRaw<T>>;
};
type Events = {
    set: <T>(data: {
        key: string;
        value: T;
        error?: unknown;
    }) => void;
    del: (data: {
        key: string;
        error?: unknown;
    }) => void;
    clear: (error?: unknown) => void;
    refresh: <T>(data: {
        key: string;
        value: T;
        error?: unknown;
    }) => void;
};
declare const createCache: (options?: CreateCacheOptions) => Cache;

export { type Cache, type CacheManagerStore, type CreateCacheOptions, type Events, KeyvAdapter, createCache };
