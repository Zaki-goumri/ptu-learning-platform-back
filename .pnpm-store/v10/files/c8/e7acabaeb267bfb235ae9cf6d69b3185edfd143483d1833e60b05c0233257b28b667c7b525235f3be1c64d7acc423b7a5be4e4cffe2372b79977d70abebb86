import { z } from 'zod';
/**
 * Operation Object (without callbacks, used in callbacks)
 *
 * Describes a single API operation on a path.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#operation-object
 */
export declare const OperationObjectSchemaWithoutCallbacks: z.ZodObject<{
    /**
     * A list of tags for API documentation control. Tags can be used for logical
     * grouping of operations by resources or any other qualifier.
     */
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * A short summary of what the operation does.
     */
    summary: z.ZodOptional<z.ZodString>;
    /**
     * A verbose explanation of the operation behavior. CommonMark syntax MAY be used for rich text representation.
     */
    description: z.ZodOptional<z.ZodString>;
    /**
     * External documentation object
     */
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
    /**
     * Unique string used to identify the operation. The id MUST be unique among all operations described in the API.
     * The operationId value is case-sensitive. Tools and libraries MAY use the operationId to uniquely identify an
     * operation, therefore, it is RECOMMENDED to follow bin common programming naming conventions.
     */
    operationId: z.ZodOptional<z.ZodString>;
    /**
     * A list of parameters that are applicable for this operation. If a parameter is already defined at the Path Item,
     * the new definition will override it but can never remove it. The list MUST NOT include duplicated parameters. A
     * unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link
     * to parameters that are defined in the OpenAPI Object's components.parameters.
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
    /**
     * The request body applicable for this operation. The requestBody is fully supported in HTTP methods where the
     * HTTP 1.1 specification [RFC7231] has explicitly defined semantics for request bodies. In other cases where the
     * HTTP spec is vague (such as GET, HEAD and DELETE), requestBody is permitted but does not have well-defined
     * semantics and SHOULD be avoided if possible.
     */
    requestBody: z.ZodOptional<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        content: z.ZodRecord<z.ZodString, z.ZodObject<{
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
        }>>;
        required: z.ZodOptional<z.ZodBoolean>;
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
        content: Record<string, {
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
        }>;
        description?: string | undefined;
        required?: boolean | undefined;
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
        content: Record<string, {
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
        }>;
        description?: string | undefined;
        required?: boolean | undefined;
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
    }>>;
    /**
     * The list of possible responses as they are returned from executing this operation.
     */
    responses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        description: z.ZodString;
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
        links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            operationRef: z.ZodOptional<z.ZodString>;
            operationId: z.ZodOptional<z.ZodString>;
            parameters: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodString, string, string>>>;
            requestBody: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            description: z.ZodOptional<z.ZodString>;
            server: z.ZodOptional<z.ZodObject<{
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
            }>>;
        }, "strip", z.ZodTypeAny, {
            description?: string | undefined;
            operationId?: string | undefined;
            parameters?: Record<string, string> | undefined;
            requestBody?: string | undefined;
            operationRef?: string | undefined;
            server?: {
                url: string;
                description?: string | undefined;
                variables?: Record<string, {
                    description?: string | undefined;
                    default?: string | undefined;
                    enum?: string[] | undefined;
                }> | undefined;
            } | undefined;
        }, {
            description?: string | undefined;
            operationId?: string | undefined;
            parameters?: Record<string, string> | undefined;
            requestBody?: string | undefined;
            operationRef?: string | undefined;
            server?: {
                url: string;
                description?: string | undefined;
                variables?: Record<string, {
                    description?: string | undefined;
                    default?: string | undefined;
                    enum?: string[] | undefined;
                }> | undefined;
            } | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        description: string;
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
        links?: Record<string, {
            description?: string | undefined;
            operationId?: string | undefined;
            parameters?: Record<string, string> | undefined;
            requestBody?: string | undefined;
            operationRef?: string | undefined;
            server?: {
                url: string;
                description?: string | undefined;
                variables?: Record<string, {
                    description?: string | undefined;
                    default?: string | undefined;
                    enum?: string[] | undefined;
                }> | undefined;
            } | undefined;
        }> | undefined;
    }, {
        description: string;
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
        links?: Record<string, {
            description?: string | undefined;
            operationId?: string | undefined;
            parameters?: Record<string, string> | undefined;
            requestBody?: string | undefined;
            operationRef?: string | undefined;
            server?: {
                url: string;
                description?: string | undefined;
                variables?: Record<string, {
                    description?: string | undefined;
                    default?: string | undefined;
                    enum?: string[] | undefined;
                }> | undefined;
            } | undefined;
        }> | undefined;
    }>>>;
    /**
     * A declaration of which security mechanisms can be used across the API. The list of
     * values includes alternative security requirement objects that can be used. Only
     * one of the security requirement objects need to be satisfied to authorize a request.
     * Individual operations can override this definition. To make security optional, an empty
     * security requirement ({}) can be included in the array.
     */
    security: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>, "many">>;
    /**
     * Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default
     * value is false.
     */
    deprecated: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    security?: Record<string, string[]>[] | undefined;
    tags?: string[] | undefined;
    externalDocs?: {
        url: string;
        description?: string | undefined;
    } | undefined;
    description?: string | undefined;
    summary?: string | undefined;
    operationId?: string | undefined;
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
    requestBody?: {
        content: Record<string, {
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
        }>;
        description?: string | undefined;
        required?: boolean | undefined;
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
    } | undefined;
    responses?: Record<string, {
        description: string;
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
        links?: Record<string, {
            description?: string | undefined;
            operationId?: string | undefined;
            parameters?: Record<string, string> | undefined;
            requestBody?: string | undefined;
            operationRef?: string | undefined;
            server?: {
                url: string;
                description?: string | undefined;
                variables?: Record<string, {
                    description?: string | undefined;
                    default?: string | undefined;
                    enum?: string[] | undefined;
                }> | undefined;
            } | undefined;
        }> | undefined;
    }> | undefined;
    deprecated?: boolean | undefined;
}, {
    security?: Record<string, string[]>[] | undefined;
    tags?: string[] | undefined;
    externalDocs?: {
        url: string;
        description?: string | undefined;
    } | undefined;
    description?: string | undefined;
    summary?: string | undefined;
    operationId?: string | undefined;
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
    requestBody?: {
        content: Record<string, {
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
        }>;
        description?: string | undefined;
        required?: boolean | undefined;
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
    } | undefined;
    responses?: Record<string, {
        description: string;
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
        links?: Record<string, {
            description?: string | undefined;
            operationId?: string | undefined;
            parameters?: Record<string, string> | undefined;
            requestBody?: string | undefined;
            operationRef?: string | undefined;
            server?: {
                url: string;
                description?: string | undefined;
                variables?: Record<string, {
                    description?: string | undefined;
                    default?: string | undefined;
                    enum?: string[] | undefined;
                }> | undefined;
            } | undefined;
        }> | undefined;
    }> | undefined;
    deprecated?: boolean | undefined;
}>;
//# sourceMappingURL=operation-object-without-callbacks.d.ts.map