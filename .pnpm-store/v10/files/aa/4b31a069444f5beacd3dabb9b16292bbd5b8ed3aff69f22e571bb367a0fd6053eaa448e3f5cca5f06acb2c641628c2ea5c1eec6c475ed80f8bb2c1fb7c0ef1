import { z } from 'zod';
/**
 * Header Object
 *
 * Describes a single header for HTTP responses and for individual parts in multipart representations; see the relevant
 *  Response Object and Encoding Object documentation for restrictions on which headers can be described.
 *
 * The Header Object follows the structure of the Parameter Object, including determining its serialization strategy
 * based on whether schema or content is present, with the following changes:
 *
 * - name MUST NOT be specified, it is given in the corresponding headers map.
 * - in MUST NOT be specified, it is implicitly in header.
 * - All traits that are affected by the location MUST be applicable to a location of header (for example, style).
 *   This means that allowEmptyValue and allowReserved MUST NOT be used, and style, if used, MUST be limited to
 *   "simple".
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#header-object
 */
export declare const HeaderObjectSchema: z.ZodObject<z.objectUtil.extendShape<{
    description: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    deprecated: z.ZodOptional<z.ZodBoolean>;
    style: z.ZodOptional<z.ZodEnum<["matrix", "label", "simple", "form", "spaceDelimited", "pipeDelimited", "deepObject"]>>;
    explode: z.ZodOptional<z.ZodBoolean>;
    schema: z.ZodOptional<z.ZodType<Record<string, any>, z.ZodTypeDef, Record<string, any>>>;
    example: z.ZodOptional<z.ZodAny>;
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
    content: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        schema: z.ZodOptional<z.ZodType<Record<string, any>, z.ZodTypeDef, Record<string, any>>>;
        example: z.ZodOptional<z.ZodAny>;
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
    }>>>;
}, {
    /**
     * The schema defining the type used for the header.
     */
    schema: z.ZodOptional<z.ZodType<any, z.ZodTypeDef, any>>;
    /**
     * Examples of the parameter's potential value.
     */
    examples: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
        $ref: z.ZodString;
        summary: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        $ref: string;
        description?: string | undefined;
        summary?: string | undefined;
    }, {
        $ref: string;
        description?: string | undefined;
        summary?: string | undefined;
    }>, z.ZodObject<{
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
    }>]>>>;
    /**
     * A map containing the representations for the parameter.
     * The key is the media type and the value describes it.
     * Only one of content or schema should be specified.
     */
    content: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        schema: z.ZodOptional<z.ZodType<Record<string, any>, z.ZodTypeDef, Record<string, any>>>;
        example: z.ZodOptional<z.ZodAny>;
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
    }>>>;
}>, "strip", z.ZodTypeAny, {
    description?: string | undefined;
    deprecated?: boolean | undefined;
    content?: Record<string, {
        example?: any;
        examples?: Record<string, {
            description?: string | undefined;
            summary?: string | undefined;
            value?: any;
            externalValue?: string | undefined;
        }> | undefined;
        schema?: Record<string, any> | undefined;
    }> | undefined;
    required?: boolean | undefined;
    example?: any;
    examples?: Record<string, {
        description?: string | undefined;
        summary?: string | undefined;
        value?: any;
        externalValue?: string | undefined;
    } | {
        $ref: string;
        description?: string | undefined;
        summary?: string | undefined;
    }> | undefined;
    schema?: any;
    style?: "matrix" | "label" | "simple" | "form" | "spaceDelimited" | "pipeDelimited" | "deepObject" | undefined;
    explode?: boolean | undefined;
}, {
    description?: string | undefined;
    deprecated?: boolean | undefined;
    content?: Record<string, {
        example?: any;
        examples?: Record<string, {
            description?: string | undefined;
            summary?: string | undefined;
            value?: any;
            externalValue?: string | undefined;
        }> | undefined;
        schema?: Record<string, any> | undefined;
    }> | undefined;
    required?: boolean | undefined;
    example?: any;
    examples?: Record<string, {
        description?: string | undefined;
        summary?: string | undefined;
        value?: any;
        externalValue?: string | undefined;
    } | {
        $ref: string;
        description?: string | undefined;
        summary?: string | undefined;
    }> | undefined;
    schema?: any;
    style?: "matrix" | "label" | "simple" | "form" | "spaceDelimited" | "pipeDelimited" | "deepObject" | undefined;
    explode?: boolean | undefined;
}>;
//# sourceMappingURL=header-object.d.ts.map