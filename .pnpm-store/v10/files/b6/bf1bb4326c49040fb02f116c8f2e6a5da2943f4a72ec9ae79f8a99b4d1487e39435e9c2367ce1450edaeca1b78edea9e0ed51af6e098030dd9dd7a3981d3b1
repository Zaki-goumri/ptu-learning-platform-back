import { z } from 'zod';
/**
 * Media Type Object (without encoding)
 *
 * Each Media Type Object provides schema and examples for the media type identified by its key.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#media-type-object
 */
export declare const MediaTypeObjectSchemaWithoutEncoding: z.ZodObject<{
    /**
     * The schema defining the content of the request, response, or parameter.
     */
    schema: z.ZodOptional<z.ZodType<Record<string, any>, z.ZodTypeDef, Record<string, any>>>;
    /**
     * Example of the media type. The example object SHOULD be in the correct format as specified by the media type.
     * The example field is mutually exclusive of the examples field. Furthermore, if referencing a schema which contains
     * an example, the example value SHALL override the example provided by the schema.
     */
    example: z.ZodOptional<z.ZodAny>;
    /**
     * Examples of the media type. Each example object SHOULD match the media type and specified schema if present.
     * The examples field is mutually exclusive of the example field. Furthermore, if referencing a schema which contains
     * an example, the examples value SHALL override the example provided by the schema.
     */
    examples: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        summary: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodAny>;
        externalValue: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        description?: string | undefined;
        summary?: string | undefined;
        value?: any;
        externalValue?: string | undefined;
    }, {
        description?: string | undefined;
        summary?: string | undefined;
        value?: any;
        externalValue?: string | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    example?: any;
    examples?: Record<string, {
        description?: string | undefined;
        summary?: string | undefined;
        value?: any;
        externalValue?: string | undefined;
    }> | undefined;
    schema?: Record<string, any> | undefined;
}, {
    example?: any;
    examples?: Record<string, {
        description?: string | undefined;
        summary?: string | undefined;
        value?: any;
        externalValue?: string | undefined;
    }> | undefined;
    schema?: Record<string, any> | undefined;
}>;
//# sourceMappingURL=media-type-object-without-encoding.d.ts.map