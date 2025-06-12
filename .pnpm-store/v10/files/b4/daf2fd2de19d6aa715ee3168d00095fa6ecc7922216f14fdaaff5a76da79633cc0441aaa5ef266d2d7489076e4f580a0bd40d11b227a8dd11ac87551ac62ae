import { z } from 'zod';
/**
 * Base Path Item Object Schema
 *
 * This helps break circular dependencies between path-item-object and callback-object
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#path-item-object
 */
export declare const BasePathItemObjectSchema: z.ZodObject<{
    /**
     * An optional, string summary, intended to apply to all operations in this path.
     */
    summary: z.ZodOptional<z.ZodString>;
    /**
     * An optional, string description, intended to apply to all operations in this path. CommonMark syntax MAY be used
     * for rich text representation.
     */
    description: z.ZodOptional<z.ZodString>;
    /**
     * An alternative server array to service all operations in this path.
     */
    servers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
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
    }>, "many">>;
    /**
     * A list of parameters that are applicable for all the operations described under this path. These parameters can be
     * overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated parameters. A
     * unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link
     * to parameters that are defined at the OpenAPI Object's components/parameters.
     */
    parameters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        in: z.ZodEnum<["query", "header", "path", "cookie"]>;
        description: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        deprecated: z.ZodOptional<z.ZodBoolean>;
        allowEmptyValue: z.ZodOptional<z.ZodBoolean>;
        style: z.ZodOptional<z.ZodEnum<["matrix", "label", "form", "simple", "spaceDelimited", "pipeDelimited", "deepObject"]>>;
        explode: z.ZodOptional<z.ZodBoolean>;
        allowReserved: z.ZodOptional<z.ZodBoolean>;
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
            encoding: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                contentType: z.ZodString;
                headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
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
                }, "strip", z.ZodTypeAny, {
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
                    }> | undefined;
                    schema?: Record<string, any> | undefined;
                    style?: "matrix" | "label" | "simple" | "form" | "spaceDelimited" | "pipeDelimited" | "deepObject" | undefined;
                    explode?: boolean | undefined;
                }>>>;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
        }, {
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
        }>>>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
//# sourceMappingURL=base-path-item-object.d.ts.map