import { z } from 'zod';
/**
 * Callback Object
 *
 * A map of possible out-of-band callbacks related to the parent operation. Each value in the map is a
 * Path Item Object that describes a set of requests that may be initiated by the API provider and the
 * expected responses. The key value used to identify the callback object is an expression, evaluated
 * at runtime, that identifies a URL to be used for the callback operation.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#callback-object
 */
export declare const CallbackObjectSchema: z.ZodRecord<z.ZodEffects<z.ZodString, string, string>, z.ZodType<{
    servers?: {
        url: string;
        description?: string | undefined;
        variables?: Record<string, {
            description?: string | undefined;
            default?: string | undefined;
            enum?: string[] | undefined;
        }> | undefined;
    }[] | undefined;
    description?: string | undefined;
    summary?: string | undefined;
    parameters?: {
        name: string;
        in: "path" | "query" | "header" | "cookie";
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
            encoding?: Record<string, {
                contentType: string;
                headers?: Record<string, {
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
                    }> | undefined;
                    schema?: Record<string, any> | undefined;
                    style?: "matrix" | "label" | "simple" | "form" | "spaceDelimited" | "pipeDelimited" | "deepObject" | undefined;
                    explode?: boolean | undefined;
                }> | undefined;
            }> | undefined;
        }> | undefined;
        required?: boolean | undefined;
        example?: any;
        examples?: Record<string, {
            description?: string | undefined;
            summary?: string | undefined;
            value?: any;
            externalValue?: string | undefined;
        }> | undefined;
        schema?: Record<string, any> | undefined;
        style?: "matrix" | "label" | "simple" | "form" | "spaceDelimited" | "pipeDelimited" | "deepObject" | undefined;
        explode?: boolean | undefined;
        allowEmptyValue?: boolean | undefined;
        allowReserved?: boolean | undefined;
    }[] | undefined;
} & {
    get?: z.infer<typeof import("./operation-object-without-callbacks.js").OperationObjectSchemaWithoutCallbacks>;
    put?: z.infer<typeof import("./operation-object-without-callbacks.js").OperationObjectSchemaWithoutCallbacks>;
    post?: z.infer<typeof import("./operation-object-without-callbacks.js").OperationObjectSchemaWithoutCallbacks>;
    delete?: z.infer<typeof import("./operation-object-without-callbacks.js").OperationObjectSchemaWithoutCallbacks>;
    options?: z.infer<typeof import("./operation-object-without-callbacks.js").OperationObjectSchemaWithoutCallbacks>;
    head?: z.infer<typeof import("./operation-object-without-callbacks.js").OperationObjectSchemaWithoutCallbacks>;
    patch?: z.infer<typeof import("./operation-object-without-callbacks.js").OperationObjectSchemaWithoutCallbacks>;
    trace?: z.infer<typeof import("./operation-object-without-callbacks.js").OperationObjectSchemaWithoutCallbacks>;
}, z.ZodTypeDef, {
    servers?: {
        url: string;
        description?: string | undefined;
        variables?: Record<string, {
            description?: string | undefined;
            default?: string | undefined;
            enum?: string[] | undefined;
        }> | undefined;
    }[] | undefined;
    description?: string | undefined;
    summary?: string | undefined;
    parameters?: {
        name: string;
        in: "path" | "query" | "header" | "cookie";
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
            encoding?: Record<string, {
                contentType: string;
                headers?: Record<string, {
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
                    }> | undefined;
                    schema?: Record<string, any> | undefined;
                    style?: "matrix" | "label" | "simple" | "form" | "spaceDelimited" | "pipeDelimited" | "deepObject" | undefined;
                    explode?: boolean | undefined;
                }> | undefined;
            }> | undefined;
        }> | undefined;
        required?: boolean | undefined;
        example?: any;
        examples?: Record<string, {
            description?: string | undefined;
            summary?: string | undefined;
            value?: any;
            externalValue?: string | undefined;
        }> | undefined;
        schema?: Record<string, any> | undefined;
        style?: "matrix" | "label" | "simple" | "form" | "spaceDelimited" | "pipeDelimited" | "deepObject" | undefined;
        explode?: boolean | undefined;
        allowEmptyValue?: boolean | undefined;
        allowReserved?: boolean | undefined;
    }[] | undefined;
} & {
    get?: z.infer<typeof import("./operation-object-without-callbacks.js").OperationObjectSchemaWithoutCallbacks>;
    put?: z.infer<typeof import("./operation-object-without-callbacks.js").OperationObjectSchemaWithoutCallbacks>;
    post?: z.infer<typeof import("./operation-object-without-callbacks.js").OperationObjectSchemaWithoutCallbacks>;
    delete?: z.infer<typeof import("./operation-object-without-callbacks.js").OperationObjectSchemaWithoutCallbacks>;
    options?: z.infer<typeof import("./operation-object-without-callbacks.js").OperationObjectSchemaWithoutCallbacks>;
    head?: z.infer<typeof import("./operation-object-without-callbacks.js").OperationObjectSchemaWithoutCallbacks>;
    patch?: z.infer<typeof import("./operation-object-without-callbacks.js").OperationObjectSchemaWithoutCallbacks>;
    trace?: z.infer<typeof import("./operation-object-without-callbacks.js").OperationObjectSchemaWithoutCallbacks>;
}>>;
//# sourceMappingURL=callback-object.d.ts.map