import { z } from 'zod';
export declare const OpenApiExtensionSchema: z.ZodObject<{
    /**
     * Name of specification extension property. Has to start with `x-`.
     *
     * @example
     * ```yaml
     * x-custom-extension: foobar
     * ```
     */
    name: z.ZodString;
    /**
     * Vue component to render the specification extension
     */
    component: z.ZodUnknown;
    /**
     * Custom renderer to render the specification extension
     */
    renderer: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    name: string;
    component?: unknown;
    renderer?: unknown;
}, {
    name: string;
    component?: unknown;
    renderer?: unknown;
}>;
export declare const ApiReferencePluginSchema: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodObject<{
    name: z.ZodString;
    extensions: z.ZodArray<z.ZodObject<{
        /**
         * Name of specification extension property. Has to start with `x-`.
         *
         * @example
         * ```yaml
         * x-custom-extension: foobar
         * ```
         */
        name: z.ZodString;
        /**
         * Vue component to render the specification extension
         */
        component: z.ZodUnknown;
        /**
         * Custom renderer to render the specification extension
         */
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
}>>;
export type SpecificationExtension = z.infer<typeof OpenApiExtensionSchema>;
export type ApiReferencePlugin = z.infer<typeof ApiReferencePluginSchema>;
//# sourceMappingURL=api-reference-plugin.d.ts.map