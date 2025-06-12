import { z } from 'zod';
export declare const ApiClientPluginSchema: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodObject<{
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
}>>;
export type ApiClientPlugin = z.infer<typeof ApiClientPluginSchema>;
//# sourceMappingURL=api-client-plugin.d.ts.map