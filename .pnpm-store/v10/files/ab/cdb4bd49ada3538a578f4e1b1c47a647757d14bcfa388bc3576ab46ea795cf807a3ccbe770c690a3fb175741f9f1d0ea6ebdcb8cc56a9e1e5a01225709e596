import { z } from 'zod';
/**
 * Tag Object
 *
 * Adds metadata to a single tag that is used by the Operation Object. It is not mandatory to have a Tag Object per tag
 * defined in the Operation Object instances.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#tag-object
 */
export declare const TagObjectSchema: z.ZodObject<{
    /** REQUIRED. The name of the tag. */
    name: z.ZodString;
    /** A description for the tag. CommonMark syntax MAY be used for rich text representation. */
    description: z.ZodCatch<z.ZodOptional<z.ZodString>>;
    /** Additional external documentation for this tag. */
    externalDocs: z.ZodOptional<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        description?: string | undefined;
    }, {
        url: string;
        description?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    externalDocs?: {
        url: string;
        description?: string | undefined;
    } | undefined;
    description?: string | undefined;
}, {
    name: string;
    externalDocs?: {
        url: string;
        description?: string | undefined;
    } | undefined;
    description?: unknown;
}>;
//# sourceMappingURL=tag-object.d.ts.map