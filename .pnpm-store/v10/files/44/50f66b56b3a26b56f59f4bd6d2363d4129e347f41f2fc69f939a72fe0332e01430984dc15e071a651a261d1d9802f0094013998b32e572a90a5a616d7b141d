import { z } from 'zod';
/**
 * License Object
 *
 * License information for the exposed API.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#license-object
 */
export declare const LicenseObjectSchema: z.ZodObject<{
    /** REQUIRED. The license name used for the API. */
    name: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    /** An SPDX license expression for the API. The identifier field is mutually exclusive of the url field. */
    identifier: z.ZodCatch<z.ZodOptional<z.ZodString>>;
    /**
     * A URI for the license used for the API. This MUST be in the form of a URI. The url field is mutually exclusive of the identifier field.
     */
    url: z.ZodCatch<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    url?: string | undefined;
    name?: string | null | undefined;
    identifier?: string | undefined;
}, {
    url?: unknown;
    name?: unknown;
    identifier?: unknown;
}>;
//# sourceMappingURL=license-object.d.ts.map