import { z } from 'zod';
/**
 * Webhooks Object
 *
 * The incoming webhooks that MAY be received as part of this API and that the API consumer MAY choose to implement.
 * Closely related to the callbacks feature, this section describes requests initiated other than by an API call, for
 * example by an out of band registration.
 *
 * The key name is a unique string to refer to each webhook, while the
 * (optionally referenced) Path Item Object describes a request that may be initiated by the API provider and the
 * expected responses. An example is available.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#oas-webhooks
 */
export declare const WebhooksObjectSchema: z.ZodRecord<z.ZodString, z.ZodType<{
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
    parameters?: ({
        $ref: string;
        description?: string | undefined;
        summary?: string | undefined;
    } | {
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
            } | {
                $ref: string;
                description?: string | undefined;
                summary?: string | undefined;
            }> | undefined;
            schema?: any;
            encoding?: Record<string, {
                contentType: string;
                headers?: Record<string, {
                    $ref: string;
                    description?: string | undefined;
                    summary?: string | undefined;
                } | {
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
        }> | undefined;
        schema?: Record<string, any> | undefined;
        style?: "matrix" | "label" | "simple" | "form" | "spaceDelimited" | "pipeDelimited" | "deepObject" | undefined;
        explode?: boolean | undefined;
        allowEmptyValue?: boolean | undefined;
        allowReserved?: boolean | undefined;
    })[] | undefined;
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
    parameters?: ({
        $ref: string;
        description?: string | undefined;
        summary?: string | undefined;
    } | {
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
            } | {
                $ref: string;
                description?: string | undefined;
                summary?: string | undefined;
            }> | undefined;
            schema?: any;
            encoding?: Record<string, {
                contentType: string;
                headers?: Record<string, {
                    $ref: string;
                    description?: string | undefined;
                    summary?: string | undefined;
                } | {
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
        }> | undefined;
        schema?: Record<string, any> | undefined;
        style?: "matrix" | "label" | "simple" | "form" | "spaceDelimited" | "pipeDelimited" | "deepObject" | undefined;
        explode?: boolean | undefined;
        allowEmptyValue?: boolean | undefined;
        allowReserved?: boolean | undefined;
    })[] | undefined;
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
//# sourceMappingURL=webhooks-object.d.ts.map