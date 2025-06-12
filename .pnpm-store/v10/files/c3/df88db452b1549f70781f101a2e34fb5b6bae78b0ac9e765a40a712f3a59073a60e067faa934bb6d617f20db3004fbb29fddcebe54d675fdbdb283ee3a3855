import { z } from 'zod';
/**
 * Server Object
 *
 * An object representing a Server.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#server-object
 */
export declare const ServerObjectSchema: z.ZodObject<{
    /**
     * REQUIRED. A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that
     * the host location is relative to the location where the OpenAPI document is being served. Variable substitutions
     * will be made when a variable is named in {brackets}.
     */
    url: z.ZodString;
    /**
     * An optional string describing the host designated by the URL. CommonMark syntax MAY be used for rich text
     * representation.
     */
    description: z.ZodOptional<z.ZodString>;
    /** A map between a variable name and its value. The value is used for substitution in the server's URL template. */
    variables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        default: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        description?: string | undefined;
        default?: string | undefined;
        enum?: string[] | undefined;
    }, {
        description?: string | undefined;
        default?: string | undefined;
        enum?: string[] | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    url: string;
    description?: string | undefined;
    variables?: Record<string, {
        description?: string | undefined;
        default?: string | undefined;
        enum?: string[] | undefined;
    }> | undefined;
}, {
    url: string;
    description?: string | undefined;
    variables?: Record<string, {
        description?: string | undefined;
        default?: string | undefined;
        enum?: string[] | undefined;
    }> | undefined;
}>;
//# sourceMappingURL=server-object.d.ts.map