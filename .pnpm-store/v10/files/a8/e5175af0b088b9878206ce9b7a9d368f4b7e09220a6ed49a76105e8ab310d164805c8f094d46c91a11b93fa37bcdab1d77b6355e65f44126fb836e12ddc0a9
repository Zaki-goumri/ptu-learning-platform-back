import { z } from 'zod';
import type { AuthenticationConfiguration } from './authentication-configuration.js';
/** Configuration for the OpenAPI/Swagger specification */
export declare const specConfigurationSchema: z.ZodObject<{
    /**
     * URL to an OpenAPI/Swagger document
     *
     * @deprecated Please move `url` to the top level and remove the `spec` prefix.
     *
     * @example
     * ```ts
     * const oldConfiguration = {
     *   spec: {
     *     url: 'https://example.com/openapi.json',
     *   },
     * }
     *
     * const newConfiguration = {
     *   url: 'https://example.com/openapi.json',
     * }
     * ```
     **/
    url: z.ZodOptional<z.ZodString>;
    /**
     * Directly embed the OpenAPI document.
     * Can be a string, object, function returning an object, or null.
     *
     * @remarks It's recommended to pass a URL instead of content.
     *
     * @deprecated Please move `content` to the top level and remove the `spec` prefix.
     *
     * @example
     * ```ts
     * const oldConfiguration = {
     *   spec: {
     *     content: '…',
     *   },
     * }
     *
     * const newConfiguration = {
     *   content: '…',
     * }
     * ```
     **/
    content: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodRecord<z.ZodString, z.ZodAny>>, z.ZodNull]>>;
    /**
     * The title of the OpenAPI document.
     *
     * @example 'Scalar Galaxy'
     *
     * @deprecated Please move `title` to the top level and remove the `spec` prefix.
     */
    title: z.ZodOptional<z.ZodString>;
    /**
     * The slug of the OpenAPI document used in the URL.
     *
     * If none is passed, the title will be used.
     *
     * If no title is used, it'll just use the index.
     *
     * @example 'scalar-galaxy'
     *
     * @deprecated Please move `slug` to the top level and remove the `spec` prefix.
     */
    slug: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    url?: string | undefined;
    content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
    slug?: string | undefined;
}, {
    title?: string | undefined;
    url?: string | undefined;
    content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
    slug?: string | undefined;
}>;
export type SpecConfiguration = z.infer<typeof specConfigurationSchema>;
/** Configuration for the Api Client */
export declare const apiClientConfigurationSchema: z.ZodObject<{
    /**
     * URL to an OpenAPI/Swagger document
     **/
    url: z.ZodOptional<z.ZodString>;
    /**
     * Directly embed the OpenAPI document.
     * Can be a string, object, function returning an object, or null.
     *
     * @remarks It's recommended to pass a URL instead of content.
     **/
    content: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodRecord<z.ZodString, z.ZodAny>>, z.ZodNull]>>;
    /**
     * The title of the OpenAPI document.
     *
     * @example 'Scalar Galaxy'
     */
    title: z.ZodOptional<z.ZodString>;
    /**
     * The slug of the OpenAPI document used in the URL.
     *
     * If none is passed, the title will be used.
     *
     * If no title is used, it'll just use the index.
     *
     * @example 'scalar-galaxy'
     */
    slug: z.ZodOptional<z.ZodString>;
    /**
     * The OpenAPI/Swagger document to render
     *
     * @deprecated Use `url` and `content` on the top level instead.
     **/
    spec: z.ZodOptional<z.ZodObject<{
        /**
         * URL to an OpenAPI/Swagger document
         *
         * @deprecated Please move `url` to the top level and remove the `spec` prefix.
         *
         * @example
         * ```ts
         * const oldConfiguration = {
         *   spec: {
         *     url: 'https://example.com/openapi.json',
         *   },
         * }
         *
         * const newConfiguration = {
         *   url: 'https://example.com/openapi.json',
         * }
         * ```
         **/
        url: z.ZodOptional<z.ZodString>;
        /**
         * Directly embed the OpenAPI document.
         * Can be a string, object, function returning an object, or null.
         *
         * @remarks It's recommended to pass a URL instead of content.
         *
         * @deprecated Please move `content` to the top level and remove the `spec` prefix.
         *
         * @example
         * ```ts
         * const oldConfiguration = {
         *   spec: {
         *     content: '…',
         *   },
         * }
         *
         * const newConfiguration = {
         *   content: '…',
         * }
         * ```
         **/
        content: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodRecord<z.ZodString, z.ZodAny>>, z.ZodNull]>>;
        /**
         * The title of the OpenAPI document.
         *
         * @example 'Scalar Galaxy'
         *
         * @deprecated Please move `title` to the top level and remove the `spec` prefix.
         */
        title: z.ZodOptional<z.ZodString>;
        /**
         * The slug of the OpenAPI document used in the URL.
         *
         * If none is passed, the title will be used.
         *
         * If no title is used, it'll just use the index.
         *
         * @example 'scalar-galaxy'
         *
         * @deprecated Please move `slug` to the top level and remove the `spec` prefix.
         */
        slug: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        url?: string | undefined;
        content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
        slug?: string | undefined;
    }, {
        title?: string | undefined;
        url?: string | undefined;
        content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
        slug?: string | undefined;
    }>>;
    /** Prefill authentication */
    authentication: z.ZodOptional<z.ZodAny>;
    /** Base URL for the API server */
    baseServerURL: z.ZodOptional<z.ZodString>;
    /**
     * Whether to hide the client button
     * @default false
     */
    hideClientButton: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /** URL to a request proxy for the API client */
    proxyUrl: z.ZodOptional<z.ZodString>;
    /** Key used with CTRL/CMD to open the search modal (defaults to 'k' e.g. CMD+k) */
    searchHotKey: z.ZodOptional<z.ZodEnum<["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]>>;
    /** List of OpenAPI server objects */
    servers: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    /**
     * Whether to show the sidebar
     * @default true
     */
    showSidebar: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /** A string to use one of the color presets */
    theme: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodEnum<["alternate", "default", "moon", "purple", "solarized", "bluePlanet", "deepSpace", "saturn", "kepler", "elysiajs", "fastify", "mars", "laserwave", "none"]>>>>;
    /** Integration type identifier */
    _integration: z.ZodOptional<z.ZodNullable<z.ZodEnum<["adonisjs", "docusaurus", "dotnet", "elysiajs", "express", "fastapi", "fastify", "go", "hono", "html", "laravel", "litestar", "nestjs", "nextjs", "nitro", "nuxt", "platformatic", "react", "rust", "svelte", "vue"]>>>;
    /** onRequestSent is fired when a request is sent */
    onRequestSent: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodVoid>>;
    /** Whether to persist auth to local storage */
    persistAuth: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /** Plugins for the API client */
    plugins: z.ZodOptional<z.ZodArray<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodObject<{
        name: z.ZodString;
        views: z.ZodObject<{
            'request.section': z.ZodArray<z.ZodObject<{
                title: z.ZodOptional<z.ZodString>;
                component: z.ZodUnknown;
                props: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }, {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }>, "many">;
            'response.section': z.ZodArray<z.ZodObject<{
                title: z.ZodOptional<z.ZodString>;
                component: z.ZodUnknown;
                props: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }, {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            'request.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
            'response.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
        }, {
            'request.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
            'response.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
        }>;
        hooks: z.ZodObject<{
            onBeforeRequest: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnion<[z.ZodVoid, z.ZodPromise<z.ZodVoid>]>>;
            onResponseReceived: z.ZodFunction<z.ZodTuple<[z.ZodObject<{
                response: z.ZodType<Response, z.ZodTypeDef, Response>;
                operation: z.ZodRecord<z.ZodString, z.ZodAny>;
            }, "strip", z.ZodTypeAny, {
                response: Response;
                operation: Record<string, any>;
            }, {
                response: Response;
                operation: Record<string, any>;
            }>], z.ZodUnknown>, z.ZodUnion<[z.ZodVoid, z.ZodPromise<z.ZodVoid>]>>;
        }, "strip", z.ZodTypeAny, {
            onBeforeRequest: (...args: unknown[]) => void | Promise<void>;
            onResponseReceived: (args_0: {
                response: Response;
                operation: Record<string, any>;
            }, ...args: unknown[]) => void | Promise<void>;
        }, {
            onBeforeRequest: (...args: unknown[]) => void | Promise<void>;
            onResponseReceived: (args_0: {
                response: Response;
                operation: Record<string, any>;
            }, ...args: unknown[]) => void | Promise<void>;
        }>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        views: {
            'request.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
            'response.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
        };
        hooks: {
            onBeforeRequest: (...args: unknown[]) => void | Promise<void>;
            onResponseReceived: (args_0: {
                response: Response;
                operation: Record<string, any>;
            }, ...args: unknown[]) => void | Promise<void>;
        };
    }, {
        name: string;
        views: {
            'request.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
            'response.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
        };
        hooks: {
            onBeforeRequest: (...args: unknown[]) => void | Promise<void>;
            onResponseReceived: (args_0: {
                response: Response;
                operation: Record<string, any>;
            }, ...args: unknown[]) => void | Promise<void>;
        };
    }>>, "many">>;
}, "strip", z.ZodTypeAny, {
    hideClientButton: boolean;
    showSidebar: boolean;
    theme: "alternate" | "default" | "moon" | "purple" | "solarized" | "bluePlanet" | "deepSpace" | "saturn" | "kepler" | "elysiajs" | "fastify" | "mars" | "laserwave" | "none";
    persistAuth: boolean;
    title?: string | undefined;
    url?: string | undefined;
    content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
    slug?: string | undefined;
    spec?: {
        title?: string | undefined;
        url?: string | undefined;
        content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
        slug?: string | undefined;
    } | undefined;
    authentication?: any;
    baseServerURL?: string | undefined;
    proxyUrl?: string | undefined;
    searchHotKey?: "c" | "r" | "a" | "b" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | undefined;
    servers?: any[] | undefined;
    _integration?: "go" | "elysiajs" | "fastify" | "adonisjs" | "docusaurus" | "dotnet" | "express" | "fastapi" | "hono" | "html" | "laravel" | "litestar" | "nestjs" | "nextjs" | "nitro" | "nuxt" | "platformatic" | "react" | "rust" | "svelte" | "vue" | null | undefined;
    onRequestSent?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    plugins?: ((...args: unknown[]) => {
        name: string;
        views: {
            'request.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
            'response.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
        };
        hooks: {
            onBeforeRequest: (...args: unknown[]) => void | Promise<void>;
            onResponseReceived: (args_0: {
                response: Response;
                operation: Record<string, any>;
            }, ...args: unknown[]) => void | Promise<void>;
        };
    })[] | undefined;
}, {
    title?: string | undefined;
    url?: string | undefined;
    content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
    slug?: string | undefined;
    spec?: {
        title?: string | undefined;
        url?: string | undefined;
        content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
        slug?: string | undefined;
    } | undefined;
    authentication?: any;
    baseServerURL?: string | undefined;
    hideClientButton?: unknown;
    proxyUrl?: string | undefined;
    searchHotKey?: "c" | "r" | "a" | "b" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | undefined;
    servers?: any[] | undefined;
    showSidebar?: unknown;
    theme?: unknown;
    _integration?: "go" | "elysiajs" | "fastify" | "adonisjs" | "docusaurus" | "dotnet" | "express" | "fastapi" | "hono" | "html" | "laravel" | "litestar" | "nestjs" | "nextjs" | "nitro" | "nuxt" | "platformatic" | "react" | "rust" | "svelte" | "vue" | null | undefined;
    onRequestSent?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    persistAuth?: unknown;
    plugins?: ((...args: unknown[]) => {
        name: string;
        views: {
            'request.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
            'response.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
        };
        hooks: {
            onBeforeRequest: (...args: unknown[]) => void | Promise<void>;
            onResponseReceived: (args_0: {
                response: Response;
                operation: Record<string, any>;
            }, ...args: unknown[]) => void | Promise<void>;
        };
    })[] | undefined;
}>;
export type ApiClientConfiguration = z.infer<typeof apiClientConfigurationSchema>;
/** Configuration for the Api Client without the transform since it cannot be merged */
declare const _apiReferenceConfigurationSchema: z.ZodObject<z.objectUtil.extendShape<{
    /**
     * URL to an OpenAPI/Swagger document
     **/
    url: z.ZodOptional<z.ZodString>;
    /**
     * Directly embed the OpenAPI document.
     * Can be a string, object, function returning an object, or null.
     *
     * @remarks It's recommended to pass a URL instead of content.
     **/
    content: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodRecord<z.ZodString, z.ZodAny>>, z.ZodNull]>>;
    /**
     * The title of the OpenAPI document.
     *
     * @example 'Scalar Galaxy'
     */
    title: z.ZodOptional<z.ZodString>;
    /**
     * The slug of the OpenAPI document used in the URL.
     *
     * If none is passed, the title will be used.
     *
     * If no title is used, it'll just use the index.
     *
     * @example 'scalar-galaxy'
     */
    slug: z.ZodOptional<z.ZodString>;
    /**
     * The OpenAPI/Swagger document to render
     *
     * @deprecated Use `url` and `content` on the top level instead.
     **/
    spec: z.ZodOptional<z.ZodObject<{
        /**
         * URL to an OpenAPI/Swagger document
         *
         * @deprecated Please move `url` to the top level and remove the `spec` prefix.
         *
         * @example
         * ```ts
         * const oldConfiguration = {
         *   spec: {
         *     url: 'https://example.com/openapi.json',
         *   },
         * }
         *
         * const newConfiguration = {
         *   url: 'https://example.com/openapi.json',
         * }
         * ```
         **/
        url: z.ZodOptional<z.ZodString>;
        /**
         * Directly embed the OpenAPI document.
         * Can be a string, object, function returning an object, or null.
         *
         * @remarks It's recommended to pass a URL instead of content.
         *
         * @deprecated Please move `content` to the top level and remove the `spec` prefix.
         *
         * @example
         * ```ts
         * const oldConfiguration = {
         *   spec: {
         *     content: '…',
         *   },
         * }
         *
         * const newConfiguration = {
         *   content: '…',
         * }
         * ```
         **/
        content: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodRecord<z.ZodString, z.ZodAny>>, z.ZodNull]>>;
        /**
         * The title of the OpenAPI document.
         *
         * @example 'Scalar Galaxy'
         *
         * @deprecated Please move `title` to the top level and remove the `spec` prefix.
         */
        title: z.ZodOptional<z.ZodString>;
        /**
         * The slug of the OpenAPI document used in the URL.
         *
         * If none is passed, the title will be used.
         *
         * If no title is used, it'll just use the index.
         *
         * @example 'scalar-galaxy'
         *
         * @deprecated Please move `slug` to the top level and remove the `spec` prefix.
         */
        slug: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        url?: string | undefined;
        content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
        slug?: string | undefined;
    }, {
        title?: string | undefined;
        url?: string | undefined;
        content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
        slug?: string | undefined;
    }>>;
    /** Prefill authentication */
    authentication: z.ZodOptional<z.ZodAny>;
    /** Base URL for the API server */
    baseServerURL: z.ZodOptional<z.ZodString>;
    /**
     * Whether to hide the client button
     * @default false
     */
    hideClientButton: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /** URL to a request proxy for the API client */
    proxyUrl: z.ZodOptional<z.ZodString>;
    /** Key used with CTRL/CMD to open the search modal (defaults to 'k' e.g. CMD+k) */
    searchHotKey: z.ZodOptional<z.ZodEnum<["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]>>;
    /** List of OpenAPI server objects */
    servers: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    /**
     * Whether to show the sidebar
     * @default true
     */
    showSidebar: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /** A string to use one of the color presets */
    theme: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodEnum<["alternate", "default", "moon", "purple", "solarized", "bluePlanet", "deepSpace", "saturn", "kepler", "elysiajs", "fastify", "mars", "laserwave", "none"]>>>>;
    /** Integration type identifier */
    _integration: z.ZodOptional<z.ZodNullable<z.ZodEnum<["adonisjs", "docusaurus", "dotnet", "elysiajs", "express", "fastapi", "fastify", "go", "hono", "html", "laravel", "litestar", "nestjs", "nextjs", "nitro", "nuxt", "platformatic", "react", "rust", "svelte", "vue"]>>>;
    /** onRequestSent is fired when a request is sent */
    onRequestSent: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodVoid>>;
    /** Whether to persist auth to local storage */
    persistAuth: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /** Plugins for the API client */
    plugins: z.ZodOptional<z.ZodArray<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodObject<{
        name: z.ZodString;
        views: z.ZodObject<{
            'request.section': z.ZodArray<z.ZodObject<{
                title: z.ZodOptional<z.ZodString>;
                component: z.ZodUnknown;
                props: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }, {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }>, "many">;
            'response.section': z.ZodArray<z.ZodObject<{
                title: z.ZodOptional<z.ZodString>;
                component: z.ZodUnknown;
                props: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }, {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            'request.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
            'response.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
        }, {
            'request.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
            'response.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
        }>;
        hooks: z.ZodObject<{
            onBeforeRequest: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnion<[z.ZodVoid, z.ZodPromise<z.ZodVoid>]>>;
            onResponseReceived: z.ZodFunction<z.ZodTuple<[z.ZodObject<{
                response: z.ZodType<Response, z.ZodTypeDef, Response>;
                operation: z.ZodRecord<z.ZodString, z.ZodAny>;
            }, "strip", z.ZodTypeAny, {
                response: Response;
                operation: Record<string, any>;
            }, {
                response: Response;
                operation: Record<string, any>;
            }>], z.ZodUnknown>, z.ZodUnion<[z.ZodVoid, z.ZodPromise<z.ZodVoid>]>>;
        }, "strip", z.ZodTypeAny, {
            onBeforeRequest: (...args: unknown[]) => void | Promise<void>;
            onResponseReceived: (args_0: {
                response: Response;
                operation: Record<string, any>;
            }, ...args: unknown[]) => void | Promise<void>;
        }, {
            onBeforeRequest: (...args: unknown[]) => void | Promise<void>;
            onResponseReceived: (args_0: {
                response: Response;
                operation: Record<string, any>;
            }, ...args: unknown[]) => void | Promise<void>;
        }>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        views: {
            'request.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
            'response.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
        };
        hooks: {
            onBeforeRequest: (...args: unknown[]) => void | Promise<void>;
            onResponseReceived: (args_0: {
                response: Response;
                operation: Record<string, any>;
            }, ...args: unknown[]) => void | Promise<void>;
        };
    }, {
        name: string;
        views: {
            'request.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
            'response.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
        };
        hooks: {
            onBeforeRequest: (...args: unknown[]) => void | Promise<void>;
            onResponseReceived: (args_0: {
                response: Response;
                operation: Record<string, any>;
            }, ...args: unknown[]) => void | Promise<void>;
        };
    }>>, "many">>;
}, {
    /**
     * The layout to use for the references
     * @default 'modern'
     */
    layout: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodEnum<["modern", "classic"]>>>>;
    /**
     * URL to a request proxy for the API client
     * @deprecated Use proxyUrl instead
     */
    proxy: z.ZodOptional<z.ZodString>;
    /**
     * Plugins for the API reference
     */
    plugins: z.ZodOptional<z.ZodArray<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodObject<{
        name: z.ZodString;
        extensions: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            component: z.ZodUnknown;
            renderer: z.ZodOptional<z.ZodUnknown>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            component?: unknown;
            renderer?: unknown;
        }, {
            name: string;
            component?: unknown;
            renderer?: unknown;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        extensions: {
            name: string;
            component?: unknown;
            renderer?: unknown;
        }[];
    }, {
        name: string;
        extensions: {
            name: string;
            component?: unknown;
            renderer?: unknown;
        }[];
    }>>, "many">>;
    /**
     * Allows the user to inject an editor for the spec
     * @default false
     */
    isEditable: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /**
     * Controls whether the references show a loading state in the intro
     * @default false
     */
    isLoading: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /**
     * Whether to show models in the sidebar, search, and content.
     * @default false
     */
    hideModels: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /**
     * Whether to show the "Download OpenAPI Document" button
     * @default false
     */
    hideDownloadButton: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /**
     * Whether to show the "Test Request" button
     * @default false
     */
    hideTestRequestButton: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /**
     * Whether to show the sidebar search bar
     * @default false
     */
    hideSearch: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /** Whether dark mode is on or off initially (light mode) */
    darkMode: z.ZodOptional<z.ZodBoolean>;
    /** forceDarkModeState makes it always this state no matter what */
    forceDarkModeState: z.ZodOptional<z.ZodEnum<["dark", "light"]>>;
    /**
     * Whether to show the dark mode toggle
     * @default false
     */
    hideDarkModeToggle: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /**
     * If used, passed data will be added to the HTML header
     * @see https://unhead.unjs.io/usage/composables/use-seo-meta
     */
    metaData: z.ZodOptional<z.ZodAny>;
    /**
     * Path to a favicon image
     * @default undefined
     * @example '/favicon.svg'
     */
    favicon: z.ZodOptional<z.ZodString>;
    /**
     * List of httpsnippet clients to hide from the clients menu
     * By default hides Unirest, pass `[]` to show all clients
     */
    hiddenClients: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodBoolean, z.ZodArray<z.ZodString, "many">]>>, z.ZodArray<z.ZodString, "many">, z.ZodLiteral<true>]>>;
    /** Determine the HTTP client that's selected by default */
    defaultHttpClient: z.ZodOptional<z.ZodObject<{
        targetKey: z.ZodType<"c" | "clojure" | "csharp" | "go" | "http" | "java" | "js" | "kotlin" | "node" | "objc" | "ocaml" | "php" | "powershell" | "python" | "r" | "ruby" | "shell" | "swift" | "dart", z.ZodTypeDef, "c" | "clojure" | "csharp" | "go" | "http" | "java" | "js" | "kotlin" | "node" | "objc" | "ocaml" | "php" | "powershell" | "python" | "r" | "ruby" | "shell" | "swift" | "dart">;
        clientKey: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        targetKey: "c" | "clojure" | "csharp" | "go" | "http" | "java" | "js" | "kotlin" | "node" | "objc" | "ocaml" | "php" | "powershell" | "python" | "r" | "ruby" | "shell" | "swift" | "dart";
        clientKey: string;
    }, {
        targetKey: "c" | "clojure" | "csharp" | "go" | "http" | "java" | "js" | "kotlin" | "node" | "objc" | "ocaml" | "php" | "powershell" | "python" | "r" | "ruby" | "shell" | "swift" | "dart";
        clientKey: string;
    }>>;
    /** Custom CSS to be added to the page */
    customCss: z.ZodOptional<z.ZodString>;
    /** onSpecUpdate is fired on spec/swagger content change */
    onSpecUpdate: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodVoid>>;
    /** onServerChange is fired on selected server change */
    onServerChange: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodVoid>>;
    /** onDocumentSelect is fired when the config is selected */
    onDocumentSelect: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnion<[z.ZodVoid, z.ZodPromise<z.ZodVoid>]>>>;
    /** Callback fired when the reference is fully loaded */
    onLoaded: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnion<[z.ZodVoid, z.ZodPromise<z.ZodVoid>]>>>;
    /**
     * onShowMore is fired when the user clicks the "Show more" button on the references
     * @param tagId - The ID of the tag that was clicked
     */
    onShowMore: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodUnion<[z.ZodVoid, z.ZodPromise<z.ZodVoid>]>>>;
    /**
     * onSidebarClick is fired when the user clicks on a sidebar item
     * @param href - The href of the sidebar item that was clicked
     */
    onSidebarClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodUnion<[z.ZodVoid, z.ZodPromise<z.ZodVoid>]>>>;
    /**
     * Route using paths instead of hashes, your server MUST support this
     * @example '/standalone-api-reference/:custom(.*)?'
     * @experimental
     * @default undefined
     */
    pathRouting: z.ZodOptional<z.ZodObject<{
        /** Base path for the API reference */
        basePath: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        basePath: string;
    }, {
        basePath: string;
    }>>;
    /**
     * Customize the heading portion of the hash
     * @param heading - The heading object
     * @returns A string ID used to generate the URL hash
     * @default (heading) => `#description/${heading.slug}`
     */
    generateHeadingSlug: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodObject<{
        slug: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        slug: string;
    }, {
        slug?: string | undefined;
    }>], z.ZodUnknown>, z.ZodString>>;
    /**
     * Customize the model portion of the hash
     * @param model - The model object with a name property
     * @returns A string ID used to generate the URL hash
     * @default (model) => slug(model.name)
     */
    generateModelSlug: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodObject<{
        name: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
    }, {
        name?: string | undefined;
    }>], z.ZodUnknown>, z.ZodString>>;
    /**
     * Customize the tag portion of the hash
     * @param tag - The tag object
     * @returns A string ID used to generate the URL hash
     * @default (tag) => slug(tag.name)
     */
    generateTagSlug: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodObject<{
        name: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
    }, {
        name?: string | undefined;
    }>], z.ZodUnknown>, z.ZodString>>;
    /**
     * Customize the operation portion of the hash
     * @param operation - The operation object
     * @returns A string ID used to generate the URL hash
     * @default (operation) => `${operation.method}${operation.path}`
     */
    generateOperationSlug: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodObject<{
        path: z.ZodString;
        operationId: z.ZodOptional<z.ZodString>;
        method: z.ZodString;
        summary: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        method: string;
        operationId?: string | undefined;
        summary?: string | undefined;
    }, {
        path: string;
        method: string;
        operationId?: string | undefined;
        summary?: string | undefined;
    }>], z.ZodUnknown>, z.ZodString>>;
    /**
     * Customize the webhook portion of the hash
     * @param webhook - The webhook object
     * @returns A string ID used to generate the URL hash
     * @default (webhook) => slug(webhook.name)
     */
    generateWebhookSlug: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodObject<{
        name: z.ZodString;
        method: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        method?: string | undefined;
    }, {
        name: string;
        method?: string | undefined;
    }>], z.ZodUnknown>, z.ZodString>>;
    /**
     * To handle redirects, pass a function that will recieve:
     * - The current path with hash if pathRouting is enabled
     * - The current hash if hashRouting (default)
     * And then passes that to history.replaceState
     *
     * @example hashRouting (default)
     * ```ts
     * redirect: (hash: string) => hash.replace('#v1/old-path', '#v2/new-path')
     * ```
     * @example pathRouting
     * ```ts
     * redirect: (pathWithHash: string) => {
     *   if (pathWithHash.includes('#')) {
     *     return pathWithHash.replace('/v1/tags/user#operation/get-user', '/v1/tags/user/operation/get-user')
     *   }
     *   return null
     * }
     * ```
     */
    redirect: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodOptional<z.ZodNullable<z.ZodString>>>>;
    /**
     * Whether to include default fonts
     * @default true
     */
    withDefaultFonts: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /** Whether to expand all tags by default */
    defaultOpenAllTags: z.ZodOptional<z.ZodBoolean>;
    /**
     * Function to sort tags
     * @default 'alpha' for alphabetical sorting
     */
    tagsSorter: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"alpha">, z.ZodFunction<z.ZodTuple<[z.ZodAny, z.ZodAny], z.ZodUnknown>, z.ZodNumber>]>>;
    /**
     * Function to sort operations
     * @default 'alpha' for alphabetical sorting
     */
    operationsSorter: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"alpha">, z.ZodLiteral<"method">, z.ZodFunction<z.ZodTuple<[z.ZodAny, z.ZodAny], z.ZodUnknown>, z.ZodNumber>]>>;
}>, "strip", z.ZodTypeAny, {
    hideClientButton: boolean;
    showSidebar: boolean;
    theme: "alternate" | "default" | "moon" | "purple" | "solarized" | "bluePlanet" | "deepSpace" | "saturn" | "kepler" | "elysiajs" | "fastify" | "mars" | "laserwave" | "none";
    persistAuth: boolean;
    layout: "modern" | "classic";
    isEditable: boolean;
    isLoading: boolean;
    hideModels: boolean;
    hideDownloadButton: boolean;
    hideTestRequestButton: boolean;
    hideSearch: boolean;
    hideDarkModeToggle: boolean;
    withDefaultFonts: boolean;
    title?: string | undefined;
    url?: string | undefined;
    content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
    slug?: string | undefined;
    spec?: {
        title?: string | undefined;
        url?: string | undefined;
        content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
        slug?: string | undefined;
    } | undefined;
    authentication?: any;
    baseServerURL?: string | undefined;
    proxyUrl?: string | undefined;
    searchHotKey?: "c" | "r" | "a" | "b" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | undefined;
    servers?: any[] | undefined;
    _integration?: "go" | "elysiajs" | "fastify" | "adonisjs" | "docusaurus" | "dotnet" | "express" | "fastapi" | "hono" | "html" | "laravel" | "litestar" | "nestjs" | "nextjs" | "nitro" | "nuxt" | "platformatic" | "react" | "rust" | "svelte" | "vue" | null | undefined;
    onRequestSent?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    plugins?: ((...args: unknown[]) => {
        name: string;
        extensions: {
            name: string;
            component?: unknown;
            renderer?: unknown;
        }[];
    })[] | undefined;
    proxy?: string | undefined;
    darkMode?: boolean | undefined;
    forceDarkModeState?: "dark" | "light" | undefined;
    metaData?: any;
    favicon?: string | undefined;
    hiddenClients?: true | string[] | Record<string, boolean | string[]> | undefined;
    defaultHttpClient?: {
        targetKey: "c" | "clojure" | "csharp" | "go" | "http" | "java" | "js" | "kotlin" | "node" | "objc" | "ocaml" | "php" | "powershell" | "python" | "r" | "ruby" | "shell" | "swift" | "dart";
        clientKey: string;
    } | undefined;
    customCss?: string | undefined;
    onSpecUpdate?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    onServerChange?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    onDocumentSelect?: ((...args: unknown[]) => void | Promise<void>) | undefined;
    onLoaded?: ((...args: unknown[]) => void | Promise<void>) | undefined;
    onShowMore?: ((args_0: string, ...args: unknown[]) => void | Promise<void>) | undefined;
    onSidebarClick?: ((args_0: string, ...args: unknown[]) => void | Promise<void>) | undefined;
    pathRouting?: {
        basePath: string;
    } | undefined;
    generateHeadingSlug?: ((args_0: {
        slug?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    generateModelSlug?: ((args_0: {
        name?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    generateTagSlug?: ((args_0: {
        name?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    generateOperationSlug?: ((args_0: {
        path: string;
        method: string;
        operationId?: string | undefined;
        summary?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    generateWebhookSlug?: ((args_0: {
        name: string;
        method?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    redirect?: ((args_0: string, ...args: unknown[]) => string | null | undefined) | undefined;
    defaultOpenAllTags?: boolean | undefined;
    tagsSorter?: "alpha" | ((args_0: any, args_1: any, ...args: unknown[]) => number) | undefined;
    operationsSorter?: "method" | "alpha" | ((args_0: any, args_1: any, ...args: unknown[]) => number) | undefined;
}, {
    title?: string | undefined;
    url?: string | undefined;
    content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
    slug?: string | undefined;
    spec?: {
        title?: string | undefined;
        url?: string | undefined;
        content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
        slug?: string | undefined;
    } | undefined;
    authentication?: any;
    baseServerURL?: string | undefined;
    hideClientButton?: unknown;
    proxyUrl?: string | undefined;
    searchHotKey?: "c" | "r" | "a" | "b" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | undefined;
    servers?: any[] | undefined;
    showSidebar?: unknown;
    theme?: unknown;
    _integration?: "go" | "elysiajs" | "fastify" | "adonisjs" | "docusaurus" | "dotnet" | "express" | "fastapi" | "hono" | "html" | "laravel" | "litestar" | "nestjs" | "nextjs" | "nitro" | "nuxt" | "platformatic" | "react" | "rust" | "svelte" | "vue" | null | undefined;
    onRequestSent?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    persistAuth?: unknown;
    plugins?: ((...args: unknown[]) => {
        name: string;
        extensions: {
            name: string;
            component?: unknown;
            renderer?: unknown;
        }[];
    })[] | undefined;
    layout?: unknown;
    proxy?: string | undefined;
    isEditable?: unknown;
    isLoading?: unknown;
    hideModels?: unknown;
    hideDownloadButton?: unknown;
    hideTestRequestButton?: unknown;
    hideSearch?: unknown;
    darkMode?: boolean | undefined;
    forceDarkModeState?: "dark" | "light" | undefined;
    hideDarkModeToggle?: unknown;
    metaData?: any;
    favicon?: string | undefined;
    hiddenClients?: true | string[] | Record<string, boolean | string[]> | undefined;
    defaultHttpClient?: {
        targetKey: "c" | "clojure" | "csharp" | "go" | "http" | "java" | "js" | "kotlin" | "node" | "objc" | "ocaml" | "php" | "powershell" | "python" | "r" | "ruby" | "shell" | "swift" | "dart";
        clientKey: string;
    } | undefined;
    customCss?: string | undefined;
    onSpecUpdate?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    onServerChange?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    onDocumentSelect?: ((...args: unknown[]) => void | Promise<void>) | undefined;
    onLoaded?: ((...args: unknown[]) => void | Promise<void>) | undefined;
    onShowMore?: ((args_0: string, ...args: unknown[]) => void | Promise<void>) | undefined;
    onSidebarClick?: ((args_0: string, ...args: unknown[]) => void | Promise<void>) | undefined;
    pathRouting?: {
        basePath: string;
    } | undefined;
    generateHeadingSlug?: ((args_0: {
        slug: string;
    }, ...args: unknown[]) => string) | undefined;
    generateModelSlug?: ((args_0: {
        name: string;
    }, ...args: unknown[]) => string) | undefined;
    generateTagSlug?: ((args_0: {
        name: string;
    }, ...args: unknown[]) => string) | undefined;
    generateOperationSlug?: ((args_0: {
        path: string;
        method: string;
        operationId?: string | undefined;
        summary?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    generateWebhookSlug?: ((args_0: {
        name: string;
        method?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    redirect?: ((args_0: string, ...args: unknown[]) => string | null | undefined) | undefined;
    withDefaultFonts?: unknown;
    defaultOpenAllTags?: boolean | undefined;
    tagsSorter?: "alpha" | ((args_0: any, args_1: any, ...args: unknown[]) => number) | undefined;
    operationsSorter?: "method" | "alpha" | ((args_0: any, args_1: any, ...args: unknown[]) => number) | undefined;
}>;
/** Configuration for the Api Reference */
export declare const apiReferenceConfigurationSchema: z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    /**
     * URL to an OpenAPI/Swagger document
     **/
    url: z.ZodOptional<z.ZodString>;
    /**
     * Directly embed the OpenAPI document.
     * Can be a string, object, function returning an object, or null.
     *
     * @remarks It's recommended to pass a URL instead of content.
     **/
    content: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodRecord<z.ZodString, z.ZodAny>>, z.ZodNull]>>;
    /**
     * The title of the OpenAPI document.
     *
     * @example 'Scalar Galaxy'
     */
    title: z.ZodOptional<z.ZodString>;
    /**
     * The slug of the OpenAPI document used in the URL.
     *
     * If none is passed, the title will be used.
     *
     * If no title is used, it'll just use the index.
     *
     * @example 'scalar-galaxy'
     */
    slug: z.ZodOptional<z.ZodString>;
    /**
     * The OpenAPI/Swagger document to render
     *
     * @deprecated Use `url` and `content` on the top level instead.
     **/
    spec: z.ZodOptional<z.ZodObject<{
        /**
         * URL to an OpenAPI/Swagger document
         *
         * @deprecated Please move `url` to the top level and remove the `spec` prefix.
         *
         * @example
         * ```ts
         * const oldConfiguration = {
         *   spec: {
         *     url: 'https://example.com/openapi.json',
         *   },
         * }
         *
         * const newConfiguration = {
         *   url: 'https://example.com/openapi.json',
         * }
         * ```
         **/
        url: z.ZodOptional<z.ZodString>;
        /**
         * Directly embed the OpenAPI document.
         * Can be a string, object, function returning an object, or null.
         *
         * @remarks It's recommended to pass a URL instead of content.
         *
         * @deprecated Please move `content` to the top level and remove the `spec` prefix.
         *
         * @example
         * ```ts
         * const oldConfiguration = {
         *   spec: {
         *     content: '…',
         *   },
         * }
         *
         * const newConfiguration = {
         *   content: '…',
         * }
         * ```
         **/
        content: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodRecord<z.ZodString, z.ZodAny>>, z.ZodNull]>>;
        /**
         * The title of the OpenAPI document.
         *
         * @example 'Scalar Galaxy'
         *
         * @deprecated Please move `title` to the top level and remove the `spec` prefix.
         */
        title: z.ZodOptional<z.ZodString>;
        /**
         * The slug of the OpenAPI document used in the URL.
         *
         * If none is passed, the title will be used.
         *
         * If no title is used, it'll just use the index.
         *
         * @example 'scalar-galaxy'
         *
         * @deprecated Please move `slug` to the top level and remove the `spec` prefix.
         */
        slug: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        url?: string | undefined;
        content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
        slug?: string | undefined;
    }, {
        title?: string | undefined;
        url?: string | undefined;
        content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
        slug?: string | undefined;
    }>>;
    /** Prefill authentication */
    authentication: z.ZodOptional<z.ZodAny>;
    /** Base URL for the API server */
    baseServerURL: z.ZodOptional<z.ZodString>;
    /**
     * Whether to hide the client button
     * @default false
     */
    hideClientButton: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /** URL to a request proxy for the API client */
    proxyUrl: z.ZodOptional<z.ZodString>;
    /** Key used with CTRL/CMD to open the search modal (defaults to 'k' e.g. CMD+k) */
    searchHotKey: z.ZodOptional<z.ZodEnum<["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]>>;
    /** List of OpenAPI server objects */
    servers: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    /**
     * Whether to show the sidebar
     * @default true
     */
    showSidebar: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /** A string to use one of the color presets */
    theme: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodEnum<["alternate", "default", "moon", "purple", "solarized", "bluePlanet", "deepSpace", "saturn", "kepler", "elysiajs", "fastify", "mars", "laserwave", "none"]>>>>;
    /** Integration type identifier */
    _integration: z.ZodOptional<z.ZodNullable<z.ZodEnum<["adonisjs", "docusaurus", "dotnet", "elysiajs", "express", "fastapi", "fastify", "go", "hono", "html", "laravel", "litestar", "nestjs", "nextjs", "nitro", "nuxt", "platformatic", "react", "rust", "svelte", "vue"]>>>;
    /** onRequestSent is fired when a request is sent */
    onRequestSent: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodVoid>>;
    /** Whether to persist auth to local storage */
    persistAuth: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /** Plugins for the API client */
    plugins: z.ZodOptional<z.ZodArray<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodObject<{
        name: z.ZodString;
        views: z.ZodObject<{
            'request.section': z.ZodArray<z.ZodObject<{
                title: z.ZodOptional<z.ZodString>;
                component: z.ZodUnknown;
                props: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }, {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }>, "many">;
            'response.section': z.ZodArray<z.ZodObject<{
                title: z.ZodOptional<z.ZodString>;
                component: z.ZodUnknown;
                props: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, "strip", z.ZodTypeAny, {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }, {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            'request.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
            'response.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
        }, {
            'request.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
            'response.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
        }>;
        hooks: z.ZodObject<{
            onBeforeRequest: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnion<[z.ZodVoid, z.ZodPromise<z.ZodVoid>]>>;
            onResponseReceived: z.ZodFunction<z.ZodTuple<[z.ZodObject<{
                response: z.ZodType<Response, z.ZodTypeDef, Response>;
                operation: z.ZodRecord<z.ZodString, z.ZodAny>;
            }, "strip", z.ZodTypeAny, {
                response: Response;
                operation: Record<string, any>;
            }, {
                response: Response;
                operation: Record<string, any>;
            }>], z.ZodUnknown>, z.ZodUnion<[z.ZodVoid, z.ZodPromise<z.ZodVoid>]>>;
        }, "strip", z.ZodTypeAny, {
            onBeforeRequest: (...args: unknown[]) => void | Promise<void>;
            onResponseReceived: (args_0: {
                response: Response;
                operation: Record<string, any>;
            }, ...args: unknown[]) => void | Promise<void>;
        }, {
            onBeforeRequest: (...args: unknown[]) => void | Promise<void>;
            onResponseReceived: (args_0: {
                response: Response;
                operation: Record<string, any>;
            }, ...args: unknown[]) => void | Promise<void>;
        }>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        views: {
            'request.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
            'response.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
        };
        hooks: {
            onBeforeRequest: (...args: unknown[]) => void | Promise<void>;
            onResponseReceived: (args_0: {
                response: Response;
                operation: Record<string, any>;
            }, ...args: unknown[]) => void | Promise<void>;
        };
    }, {
        name: string;
        views: {
            'request.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
            'response.section': {
                title?: string | undefined;
                component?: unknown;
                props?: Record<string, any> | undefined;
            }[];
        };
        hooks: {
            onBeforeRequest: (...args: unknown[]) => void | Promise<void>;
            onResponseReceived: (args_0: {
                response: Response;
                operation: Record<string, any>;
            }, ...args: unknown[]) => void | Promise<void>;
        };
    }>>, "many">>;
}, {
    /**
     * The layout to use for the references
     * @default 'modern'
     */
    layout: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodEnum<["modern", "classic"]>>>>;
    /**
     * URL to a request proxy for the API client
     * @deprecated Use proxyUrl instead
     */
    proxy: z.ZodOptional<z.ZodString>;
    /**
     * Plugins for the API reference
     */
    plugins: z.ZodOptional<z.ZodArray<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodObject<{
        name: z.ZodString;
        extensions: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            component: z.ZodUnknown;
            renderer: z.ZodOptional<z.ZodUnknown>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            component?: unknown;
            renderer?: unknown;
        }, {
            name: string;
            component?: unknown;
            renderer?: unknown;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        extensions: {
            name: string;
            component?: unknown;
            renderer?: unknown;
        }[];
    }, {
        name: string;
        extensions: {
            name: string;
            component?: unknown;
            renderer?: unknown;
        }[];
    }>>, "many">>;
    /**
     * Allows the user to inject an editor for the spec
     * @default false
     */
    isEditable: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /**
     * Controls whether the references show a loading state in the intro
     * @default false
     */
    isLoading: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /**
     * Whether to show models in the sidebar, search, and content.
     * @default false
     */
    hideModels: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /**
     * Whether to show the "Download OpenAPI Document" button
     * @default false
     */
    hideDownloadButton: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /**
     * Whether to show the "Test Request" button
     * @default false
     */
    hideTestRequestButton: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /**
     * Whether to show the sidebar search bar
     * @default false
     */
    hideSearch: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /** Whether dark mode is on or off initially (light mode) */
    darkMode: z.ZodOptional<z.ZodBoolean>;
    /** forceDarkModeState makes it always this state no matter what */
    forceDarkModeState: z.ZodOptional<z.ZodEnum<["dark", "light"]>>;
    /**
     * Whether to show the dark mode toggle
     * @default false
     */
    hideDarkModeToggle: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /**
     * If used, passed data will be added to the HTML header
     * @see https://unhead.unjs.io/usage/composables/use-seo-meta
     */
    metaData: z.ZodOptional<z.ZodAny>;
    /**
     * Path to a favicon image
     * @default undefined
     * @example '/favicon.svg'
     */
    favicon: z.ZodOptional<z.ZodString>;
    /**
     * List of httpsnippet clients to hide from the clients menu
     * By default hides Unirest, pass `[]` to show all clients
     */
    hiddenClients: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodBoolean, z.ZodArray<z.ZodString, "many">]>>, z.ZodArray<z.ZodString, "many">, z.ZodLiteral<true>]>>;
    /** Determine the HTTP client that's selected by default */
    defaultHttpClient: z.ZodOptional<z.ZodObject<{
        targetKey: z.ZodType<"c" | "clojure" | "csharp" | "go" | "http" | "java" | "js" | "kotlin" | "node" | "objc" | "ocaml" | "php" | "powershell" | "python" | "r" | "ruby" | "shell" | "swift" | "dart", z.ZodTypeDef, "c" | "clojure" | "csharp" | "go" | "http" | "java" | "js" | "kotlin" | "node" | "objc" | "ocaml" | "php" | "powershell" | "python" | "r" | "ruby" | "shell" | "swift" | "dart">;
        clientKey: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        targetKey: "c" | "clojure" | "csharp" | "go" | "http" | "java" | "js" | "kotlin" | "node" | "objc" | "ocaml" | "php" | "powershell" | "python" | "r" | "ruby" | "shell" | "swift" | "dart";
        clientKey: string;
    }, {
        targetKey: "c" | "clojure" | "csharp" | "go" | "http" | "java" | "js" | "kotlin" | "node" | "objc" | "ocaml" | "php" | "powershell" | "python" | "r" | "ruby" | "shell" | "swift" | "dart";
        clientKey: string;
    }>>;
    /** Custom CSS to be added to the page */
    customCss: z.ZodOptional<z.ZodString>;
    /** onSpecUpdate is fired on spec/swagger content change */
    onSpecUpdate: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodVoid>>;
    /** onServerChange is fired on selected server change */
    onServerChange: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodVoid>>;
    /** onDocumentSelect is fired when the config is selected */
    onDocumentSelect: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnion<[z.ZodVoid, z.ZodPromise<z.ZodVoid>]>>>;
    /** Callback fired when the reference is fully loaded */
    onLoaded: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnion<[z.ZodVoid, z.ZodPromise<z.ZodVoid>]>>>;
    /**
     * onShowMore is fired when the user clicks the "Show more" button on the references
     * @param tagId - The ID of the tag that was clicked
     */
    onShowMore: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodUnion<[z.ZodVoid, z.ZodPromise<z.ZodVoid>]>>>;
    /**
     * onSidebarClick is fired when the user clicks on a sidebar item
     * @param href - The href of the sidebar item that was clicked
     */
    onSidebarClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodUnion<[z.ZodVoid, z.ZodPromise<z.ZodVoid>]>>>;
    /**
     * Route using paths instead of hashes, your server MUST support this
     * @example '/standalone-api-reference/:custom(.*)?'
     * @experimental
     * @default undefined
     */
    pathRouting: z.ZodOptional<z.ZodObject<{
        /** Base path for the API reference */
        basePath: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        basePath: string;
    }, {
        basePath: string;
    }>>;
    /**
     * Customize the heading portion of the hash
     * @param heading - The heading object
     * @returns A string ID used to generate the URL hash
     * @default (heading) => `#description/${heading.slug}`
     */
    generateHeadingSlug: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodObject<{
        slug: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        slug: string;
    }, {
        slug?: string | undefined;
    }>], z.ZodUnknown>, z.ZodString>>;
    /**
     * Customize the model portion of the hash
     * @param model - The model object with a name property
     * @returns A string ID used to generate the URL hash
     * @default (model) => slug(model.name)
     */
    generateModelSlug: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodObject<{
        name: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
    }, {
        name?: string | undefined;
    }>], z.ZodUnknown>, z.ZodString>>;
    /**
     * Customize the tag portion of the hash
     * @param tag - The tag object
     * @returns A string ID used to generate the URL hash
     * @default (tag) => slug(tag.name)
     */
    generateTagSlug: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodObject<{
        name: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
    }, {
        name?: string | undefined;
    }>], z.ZodUnknown>, z.ZodString>>;
    /**
     * Customize the operation portion of the hash
     * @param operation - The operation object
     * @returns A string ID used to generate the URL hash
     * @default (operation) => `${operation.method}${operation.path}`
     */
    generateOperationSlug: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodObject<{
        path: z.ZodString;
        operationId: z.ZodOptional<z.ZodString>;
        method: z.ZodString;
        summary: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        method: string;
        operationId?: string | undefined;
        summary?: string | undefined;
    }, {
        path: string;
        method: string;
        operationId?: string | undefined;
        summary?: string | undefined;
    }>], z.ZodUnknown>, z.ZodString>>;
    /**
     * Customize the webhook portion of the hash
     * @param webhook - The webhook object
     * @returns A string ID used to generate the URL hash
     * @default (webhook) => slug(webhook.name)
     */
    generateWebhookSlug: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodObject<{
        name: z.ZodString;
        method: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        method?: string | undefined;
    }, {
        name: string;
        method?: string | undefined;
    }>], z.ZodUnknown>, z.ZodString>>;
    /**
     * To handle redirects, pass a function that will recieve:
     * - The current path with hash if pathRouting is enabled
     * - The current hash if hashRouting (default)
     * And then passes that to history.replaceState
     *
     * @example hashRouting (default)
     * ```ts
     * redirect: (hash: string) => hash.replace('#v1/old-path', '#v2/new-path')
     * ```
     * @example pathRouting
     * ```ts
     * redirect: (pathWithHash: string) => {
     *   if (pathWithHash.includes('#')) {
     *     return pathWithHash.replace('/v1/tags/user#operation/get-user', '/v1/tags/user/operation/get-user')
     *   }
     *   return null
     * }
     * ```
     */
    redirect: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodOptional<z.ZodNullable<z.ZodString>>>>;
    /**
     * Whether to include default fonts
     * @default true
     */
    withDefaultFonts: z.ZodCatch<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    /** Whether to expand all tags by default */
    defaultOpenAllTags: z.ZodOptional<z.ZodBoolean>;
    /**
     * Function to sort tags
     * @default 'alpha' for alphabetical sorting
     */
    tagsSorter: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"alpha">, z.ZodFunction<z.ZodTuple<[z.ZodAny, z.ZodAny], z.ZodUnknown>, z.ZodNumber>]>>;
    /**
     * Function to sort operations
     * @default 'alpha' for alphabetical sorting
     */
    operationsSorter: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"alpha">, z.ZodLiteral<"method">, z.ZodFunction<z.ZodTuple<[z.ZodAny, z.ZodAny], z.ZodUnknown>, z.ZodNumber>]>>;
}>, "strip", z.ZodTypeAny, {
    hideClientButton: boolean;
    showSidebar: boolean;
    theme: "alternate" | "default" | "moon" | "purple" | "solarized" | "bluePlanet" | "deepSpace" | "saturn" | "kepler" | "elysiajs" | "fastify" | "mars" | "laserwave" | "none";
    persistAuth: boolean;
    layout: "modern" | "classic";
    isEditable: boolean;
    isLoading: boolean;
    hideModels: boolean;
    hideDownloadButton: boolean;
    hideTestRequestButton: boolean;
    hideSearch: boolean;
    hideDarkModeToggle: boolean;
    withDefaultFonts: boolean;
    title?: string | undefined;
    url?: string | undefined;
    content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
    slug?: string | undefined;
    spec?: {
        title?: string | undefined;
        url?: string | undefined;
        content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
        slug?: string | undefined;
    } | undefined;
    authentication?: any;
    baseServerURL?: string | undefined;
    proxyUrl?: string | undefined;
    searchHotKey?: "c" | "r" | "a" | "b" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | undefined;
    servers?: any[] | undefined;
    _integration?: "go" | "elysiajs" | "fastify" | "adonisjs" | "docusaurus" | "dotnet" | "express" | "fastapi" | "hono" | "html" | "laravel" | "litestar" | "nestjs" | "nextjs" | "nitro" | "nuxt" | "platformatic" | "react" | "rust" | "svelte" | "vue" | null | undefined;
    onRequestSent?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    plugins?: ((...args: unknown[]) => {
        name: string;
        extensions: {
            name: string;
            component?: unknown;
            renderer?: unknown;
        }[];
    })[] | undefined;
    proxy?: string | undefined;
    darkMode?: boolean | undefined;
    forceDarkModeState?: "dark" | "light" | undefined;
    metaData?: any;
    favicon?: string | undefined;
    hiddenClients?: true | string[] | Record<string, boolean | string[]> | undefined;
    defaultHttpClient?: {
        targetKey: "c" | "clojure" | "csharp" | "go" | "http" | "java" | "js" | "kotlin" | "node" | "objc" | "ocaml" | "php" | "powershell" | "python" | "r" | "ruby" | "shell" | "swift" | "dart";
        clientKey: string;
    } | undefined;
    customCss?: string | undefined;
    onSpecUpdate?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    onServerChange?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    onDocumentSelect?: ((...args: unknown[]) => void | Promise<void>) | undefined;
    onLoaded?: ((...args: unknown[]) => void | Promise<void>) | undefined;
    onShowMore?: ((args_0: string, ...args: unknown[]) => void | Promise<void>) | undefined;
    onSidebarClick?: ((args_0: string, ...args: unknown[]) => void | Promise<void>) | undefined;
    pathRouting?: {
        basePath: string;
    } | undefined;
    generateHeadingSlug?: ((args_0: {
        slug?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    generateModelSlug?: ((args_0: {
        name?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    generateTagSlug?: ((args_0: {
        name?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    generateOperationSlug?: ((args_0: {
        path: string;
        method: string;
        operationId?: string | undefined;
        summary?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    generateWebhookSlug?: ((args_0: {
        name: string;
        method?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    redirect?: ((args_0: string, ...args: unknown[]) => string | null | undefined) | undefined;
    defaultOpenAllTags?: boolean | undefined;
    tagsSorter?: "alpha" | ((args_0: any, args_1: any, ...args: unknown[]) => number) | undefined;
    operationsSorter?: "method" | "alpha" | ((args_0: any, args_1: any, ...args: unknown[]) => number) | undefined;
}, {
    title?: string | undefined;
    url?: string | undefined;
    content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
    slug?: string | undefined;
    spec?: {
        title?: string | undefined;
        url?: string | undefined;
        content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
        slug?: string | undefined;
    } | undefined;
    authentication?: any;
    baseServerURL?: string | undefined;
    hideClientButton?: unknown;
    proxyUrl?: string | undefined;
    searchHotKey?: "c" | "r" | "a" | "b" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | undefined;
    servers?: any[] | undefined;
    showSidebar?: unknown;
    theme?: unknown;
    _integration?: "go" | "elysiajs" | "fastify" | "adonisjs" | "docusaurus" | "dotnet" | "express" | "fastapi" | "hono" | "html" | "laravel" | "litestar" | "nestjs" | "nextjs" | "nitro" | "nuxt" | "platformatic" | "react" | "rust" | "svelte" | "vue" | null | undefined;
    onRequestSent?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    persistAuth?: unknown;
    plugins?: ((...args: unknown[]) => {
        name: string;
        extensions: {
            name: string;
            component?: unknown;
            renderer?: unknown;
        }[];
    })[] | undefined;
    layout?: unknown;
    proxy?: string | undefined;
    isEditable?: unknown;
    isLoading?: unknown;
    hideModels?: unknown;
    hideDownloadButton?: unknown;
    hideTestRequestButton?: unknown;
    hideSearch?: unknown;
    darkMode?: boolean | undefined;
    forceDarkModeState?: "dark" | "light" | undefined;
    hideDarkModeToggle?: unknown;
    metaData?: any;
    favicon?: string | undefined;
    hiddenClients?: true | string[] | Record<string, boolean | string[]> | undefined;
    defaultHttpClient?: {
        targetKey: "c" | "clojure" | "csharp" | "go" | "http" | "java" | "js" | "kotlin" | "node" | "objc" | "ocaml" | "php" | "powershell" | "python" | "r" | "ruby" | "shell" | "swift" | "dart";
        clientKey: string;
    } | undefined;
    customCss?: string | undefined;
    onSpecUpdate?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    onServerChange?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    onDocumentSelect?: ((...args: unknown[]) => void | Promise<void>) | undefined;
    onLoaded?: ((...args: unknown[]) => void | Promise<void>) | undefined;
    onShowMore?: ((args_0: string, ...args: unknown[]) => void | Promise<void>) | undefined;
    onSidebarClick?: ((args_0: string, ...args: unknown[]) => void | Promise<void>) | undefined;
    pathRouting?: {
        basePath: string;
    } | undefined;
    generateHeadingSlug?: ((args_0: {
        slug: string;
    }, ...args: unknown[]) => string) | undefined;
    generateModelSlug?: ((args_0: {
        name: string;
    }, ...args: unknown[]) => string) | undefined;
    generateTagSlug?: ((args_0: {
        name: string;
    }, ...args: unknown[]) => string) | undefined;
    generateOperationSlug?: ((args_0: {
        path: string;
        method: string;
        operationId?: string | undefined;
        summary?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    generateWebhookSlug?: ((args_0: {
        name: string;
        method?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    redirect?: ((args_0: string, ...args: unknown[]) => string | null | undefined) | undefined;
    withDefaultFonts?: unknown;
    defaultOpenAllTags?: boolean | undefined;
    tagsSorter?: "alpha" | ((args_0: any, args_1: any, ...args: unknown[]) => number) | undefined;
    operationsSorter?: "method" | "alpha" | ((args_0: any, args_1: any, ...args: unknown[]) => number) | undefined;
}>, {
    hideClientButton: boolean;
    showSidebar: boolean;
    theme: "alternate" | "default" | "moon" | "purple" | "solarized" | "bluePlanet" | "deepSpace" | "saturn" | "kepler" | "elysiajs" | "fastify" | "mars" | "laserwave" | "none";
    persistAuth: boolean;
    layout: "modern" | "classic";
    isEditable: boolean;
    isLoading: boolean;
    hideModels: boolean;
    hideDownloadButton: boolean;
    hideTestRequestButton: boolean;
    hideSearch: boolean;
    hideDarkModeToggle: boolean;
    withDefaultFonts: boolean;
    title?: string | undefined;
    url?: string | undefined;
    content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
    slug?: string | undefined;
    spec?: {
        title?: string | undefined;
        url?: string | undefined;
        content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
        slug?: string | undefined;
    } | undefined;
    authentication?: any;
    baseServerURL?: string | undefined;
    proxyUrl?: string | undefined;
    searchHotKey?: "c" | "r" | "a" | "b" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | undefined;
    servers?: any[] | undefined;
    _integration?: "go" | "elysiajs" | "fastify" | "adonisjs" | "docusaurus" | "dotnet" | "express" | "fastapi" | "hono" | "html" | "laravel" | "litestar" | "nestjs" | "nextjs" | "nitro" | "nuxt" | "platformatic" | "react" | "rust" | "svelte" | "vue" | null | undefined;
    onRequestSent?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    plugins?: ((...args: unknown[]) => {
        name: string;
        extensions: {
            name: string;
            component?: unknown;
            renderer?: unknown;
        }[];
    })[] | undefined;
    proxy?: string | undefined;
    darkMode?: boolean | undefined;
    forceDarkModeState?: "dark" | "light" | undefined;
    metaData?: any;
    favicon?: string | undefined;
    hiddenClients?: true | string[] | Record<string, boolean | string[]> | undefined;
    defaultHttpClient?: {
        targetKey: "c" | "clojure" | "csharp" | "go" | "http" | "java" | "js" | "kotlin" | "node" | "objc" | "ocaml" | "php" | "powershell" | "python" | "r" | "ruby" | "shell" | "swift" | "dart";
        clientKey: string;
    } | undefined;
    customCss?: string | undefined;
    onSpecUpdate?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    onServerChange?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    onDocumentSelect?: ((...args: unknown[]) => void | Promise<void>) | undefined;
    onLoaded?: ((...args: unknown[]) => void | Promise<void>) | undefined;
    onShowMore?: ((args_0: string, ...args: unknown[]) => void | Promise<void>) | undefined;
    onSidebarClick?: ((args_0: string, ...args: unknown[]) => void | Promise<void>) | undefined;
    pathRouting?: {
        basePath: string;
    } | undefined;
    generateHeadingSlug?: ((args_0: {
        slug?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    generateModelSlug?: ((args_0: {
        name?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    generateTagSlug?: ((args_0: {
        name?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    generateOperationSlug?: ((args_0: {
        path: string;
        method: string;
        operationId?: string | undefined;
        summary?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    generateWebhookSlug?: ((args_0: {
        name: string;
        method?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    redirect?: ((args_0: string, ...args: unknown[]) => string | null | undefined) | undefined;
    defaultOpenAllTags?: boolean | undefined;
    tagsSorter?: "alpha" | ((args_0: any, args_1: any, ...args: unknown[]) => number) | undefined;
    operationsSorter?: "method" | "alpha" | ((args_0: any, args_1: any, ...args: unknown[]) => number) | undefined;
}, {
    title?: string | undefined;
    url?: string | undefined;
    content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
    slug?: string | undefined;
    spec?: {
        title?: string | undefined;
        url?: string | undefined;
        content?: string | Record<string, any> | ((...args: unknown[]) => Record<string, any>) | null | undefined;
        slug?: string | undefined;
    } | undefined;
    authentication?: any;
    baseServerURL?: string | undefined;
    hideClientButton?: unknown;
    proxyUrl?: string | undefined;
    searchHotKey?: "c" | "r" | "a" | "b" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | undefined;
    servers?: any[] | undefined;
    showSidebar?: unknown;
    theme?: unknown;
    _integration?: "go" | "elysiajs" | "fastify" | "adonisjs" | "docusaurus" | "dotnet" | "express" | "fastapi" | "hono" | "html" | "laravel" | "litestar" | "nestjs" | "nextjs" | "nitro" | "nuxt" | "platformatic" | "react" | "rust" | "svelte" | "vue" | null | undefined;
    onRequestSent?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    persistAuth?: unknown;
    plugins?: ((...args: unknown[]) => {
        name: string;
        extensions: {
            name: string;
            component?: unknown;
            renderer?: unknown;
        }[];
    })[] | undefined;
    layout?: unknown;
    proxy?: string | undefined;
    isEditable?: unknown;
    isLoading?: unknown;
    hideModels?: unknown;
    hideDownloadButton?: unknown;
    hideTestRequestButton?: unknown;
    hideSearch?: unknown;
    darkMode?: boolean | undefined;
    forceDarkModeState?: "dark" | "light" | undefined;
    hideDarkModeToggle?: unknown;
    metaData?: any;
    favicon?: string | undefined;
    hiddenClients?: true | string[] | Record<string, boolean | string[]> | undefined;
    defaultHttpClient?: {
        targetKey: "c" | "clojure" | "csharp" | "go" | "http" | "java" | "js" | "kotlin" | "node" | "objc" | "ocaml" | "php" | "powershell" | "python" | "r" | "ruby" | "shell" | "swift" | "dart";
        clientKey: string;
    } | undefined;
    customCss?: string | undefined;
    onSpecUpdate?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    onServerChange?: ((args_0: string, ...args: unknown[]) => void) | undefined;
    onDocumentSelect?: ((...args: unknown[]) => void | Promise<void>) | undefined;
    onLoaded?: ((...args: unknown[]) => void | Promise<void>) | undefined;
    onShowMore?: ((args_0: string, ...args: unknown[]) => void | Promise<void>) | undefined;
    onSidebarClick?: ((args_0: string, ...args: unknown[]) => void | Promise<void>) | undefined;
    pathRouting?: {
        basePath: string;
    } | undefined;
    generateHeadingSlug?: ((args_0: {
        slug: string;
    }, ...args: unknown[]) => string) | undefined;
    generateModelSlug?: ((args_0: {
        name: string;
    }, ...args: unknown[]) => string) | undefined;
    generateTagSlug?: ((args_0: {
        name: string;
    }, ...args: unknown[]) => string) | undefined;
    generateOperationSlug?: ((args_0: {
        path: string;
        method: string;
        operationId?: string | undefined;
        summary?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    generateWebhookSlug?: ((args_0: {
        name: string;
        method?: string | undefined;
    }, ...args: unknown[]) => string) | undefined;
    redirect?: ((args_0: string, ...args: unknown[]) => string | null | undefined) | undefined;
    withDefaultFonts?: unknown;
    defaultOpenAllTags?: boolean | undefined;
    tagsSorter?: "alpha" | ((args_0: any, args_1: any, ...args: unknown[]) => number) | undefined;
    operationsSorter?: "method" | "alpha" | ((args_0: any, args_1: any, ...args: unknown[]) => number) | undefined;
}>;
/** Configuration after parsing, this is the main type */
export type ApiReferenceConfiguration = Omit<z.infer<typeof _apiReferenceConfigurationSchema>, 'proxy' | 'spec' | 'authentication'> & {
    authentication?: AuthenticationConfiguration;
};
/** Api Config which includes the default config */
type ApiReferenceConfigurationWithDefault = ApiReferenceConfiguration & {
    /** Whether to use this config as the default one */
    default?: boolean;
};
/** Configuration for a single config with sources */
export type ApiReferenceConfigurationWithSources = Omit<ApiReferenceConfigurationWithDefault, 'default'> & {
    sources: (SpecConfiguration & {
        default?: boolean;
    })[];
};
/** Configuration for multiple Api References */
export type AnyApiReferenceConfiguration = Partial<ApiReferenceConfiguration> | Partial<ApiReferenceConfigurationWithSources> | Partial<ApiReferenceConfigurationWithDefault>[] | Partial<ApiReferenceConfigurationWithSources>[];
/** Typeguard to check to narrow the configs to the one with sources */
export declare const isConfigurationWithSources: (config: AnyApiReferenceConfiguration) => config is Partial<ApiReferenceConfigurationWithSources>;
export {};
//# sourceMappingURL=api-reference-configuration.d.ts.map