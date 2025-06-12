import { z } from 'zod';
/**
 * Info Object
 *
 * The object provides metadata about the API. The metadata MAY be used by the clients if needed,
 * and MAY be presented in editing or documentation generation tools for convenience.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#info-object
 */
export declare const InfoObjectSchema: z.ZodObject<{
    /**
     * REQUIRED. The title of the API.
     */
    title: z.ZodCatch<z.ZodString>;
    /**
     * A short summary of the API.
     */
    summary: z.ZodCatch<z.ZodOptional<z.ZodString>>;
    /**
     * A description of the API. CommonMark syntax MAY be used for rich text representation.
     */
    description: z.ZodCatch<z.ZodOptional<z.ZodString>>;
    /**
     * A URL to the Terms of Service for the API. This MUST be in the form of a URL.
     */
    termsOfService: z.ZodCatch<z.ZodOptional<z.ZodString>>;
    /**
     * The contact information for the exposed API.
     */
    contact: z.ZodCatch<z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        url: z.ZodCatch<z.ZodOptional<z.ZodString>>;
        email: z.ZodCatch<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        url?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    }, {
        url?: unknown;
        name?: string | undefined;
        email?: unknown;
    }>>>;
    /**
     * The license information for the exposed API.
     **/
    license: z.ZodCatch<z.ZodOptional<z.ZodObject<{
        name: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        identifier: z.ZodCatch<z.ZodOptional<z.ZodString>>;
        url: z.ZodCatch<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        url?: string | undefined;
        name?: string | null | undefined;
        identifier?: string | undefined;
    }, {
        url?: unknown;
        name?: unknown;
        identifier?: unknown;
    }>>>;
    /**
     * REQUIRED. The version of the OpenAPI Document (which is distinct from the OpenAPI Specification version or the
     * version of the API being described or the version of the OpenAPI Description).
     */
    version: z.ZodCatch<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    version: string;
    description?: string | undefined;
    termsOfService?: string | undefined;
    contact?: {
        url?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    } | undefined;
    license?: {
        url?: string | undefined;
        name?: string | null | undefined;
        identifier?: string | undefined;
    } | undefined;
    summary?: string | undefined;
}, {
    title?: unknown;
    description?: unknown;
    termsOfService?: unknown;
    contact?: unknown;
    license?: unknown;
    version?: unknown;
    summary?: unknown;
}>;
//# sourceMappingURL=info-object.d.ts.map