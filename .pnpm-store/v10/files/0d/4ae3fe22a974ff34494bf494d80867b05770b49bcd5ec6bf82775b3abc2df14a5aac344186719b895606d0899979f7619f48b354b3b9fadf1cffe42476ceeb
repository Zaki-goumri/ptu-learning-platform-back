/**
 * Paths Object
 *
 * Holds the relative paths to the individual endpoints and their operations. The path is appended to the URL from the
 * Server Object in order to construct the full URL. The Paths Object MAY be empty, due to Access Control List (ACL)
 * constraints.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#paths-object
 */
export declare const PathsObjectSchema: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<import("zod").objectUtil.extendShape<{
    summary: import("zod").ZodOptional<import("zod").ZodString>;
    description: import("zod").ZodOptional<import("zod").ZodString>;
    servers: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
        url: import("zod").ZodString;
        description: import("zod").ZodOptional<import("zod").ZodString>;
        variables: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            enum: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            default: import("zod").ZodOptional<import("zod").ZodString>;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            default?: string | undefined;
            enum?: string[] | undefined;
        }, {
            description?: string | undefined;
            default?: string | undefined;
            enum?: string[] | undefined;
        }>>>;
    }, "strip", import("zod").ZodTypeAny, {
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
    parameters: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
        name: import("zod").ZodString;
        in: import("zod").ZodEnum<["query", "header", "path", "cookie"]>;
        description: import("zod").ZodOptional<import("zod").ZodString>;
        required: import("zod").ZodOptional<import("zod").ZodBoolean>;
        deprecated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        allowEmptyValue: import("zod").ZodOptional<import("zod").ZodBoolean>;
        style: import("zod").ZodOptional<import("zod").ZodEnum<["matrix", "label", "form", "simple", "spaceDelimited", "pipeDelimited", "deepObject"]>>;
        explode: import("zod").ZodOptional<import("zod").ZodBoolean>;
        allowReserved: import("zod").ZodOptional<import("zod").ZodBoolean>;
        schema: import("zod").ZodOptional<import("zod").ZodType<Record<string, any>, import("zod").ZodTypeDef, Record<string, any>>>;
        example: import("zod").ZodOptional<import("zod").ZodAny>;
        examples: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            summary: import("zod").ZodOptional<import("zod").ZodString>;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            value: import("zod").ZodOptional<import("zod").ZodAny>;
            externalValue: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
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
        content: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            schema: import("zod").ZodOptional<import("zod").ZodType<Record<string, any>, import("zod").ZodTypeDef, Record<string, any>>>;
            example: import("zod").ZodOptional<import("zod").ZodAny>;
            examples: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                summary: import("zod").ZodOptional<import("zod").ZodString>;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                value: import("zod").ZodOptional<import("zod").ZodAny>;
                externalValue: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
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
            encoding: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                contentType: import("zod").ZodString;
                headers: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    description: import("zod").ZodOptional<import("zod").ZodString>;
                    required: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    deprecated: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    style: import("zod").ZodOptional<import("zod").ZodEnum<["matrix", "label", "simple", "form", "spaceDelimited", "pipeDelimited", "deepObject"]>>;
                    explode: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    schema: import("zod").ZodOptional<import("zod").ZodType<Record<string, any>, import("zod").ZodTypeDef, Record<string, any>>>;
                    example: import("zod").ZodOptional<import("zod").ZodAny>;
                    examples: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                        summary: import("zod").ZodOptional<import("zod").ZodString>;
                        description: import("zod").ZodOptional<import("zod").ZodString>;
                        value: import("zod").ZodOptional<import("zod").ZodAny>;
                        externalValue: import("zod").ZodOptional<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    content: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                        schema: import("zod").ZodOptional<import("zod").ZodType<Record<string, any>, import("zod").ZodTypeDef, Record<string, any>>>;
                        example: import("zod").ZodOptional<import("zod").ZodAny>;
                        examples: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                            summary: import("zod").ZodOptional<import("zod").ZodString>;
                            description: import("zod").ZodOptional<import("zod").ZodString>;
                            value: import("zod").ZodOptional<import("zod").ZodAny>;
                            externalValue: import("zod").ZodOptional<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
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
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
        }, "strip", import("zod").ZodTypeAny, {
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
    }, "strip", import("zod").ZodTypeAny, {
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
}, {
    get: import("zod").ZodOptional<import("zod").ZodType<{
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }, import("zod").ZodTypeDef, {
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }>>;
    put: import("zod").ZodOptional<import("zod").ZodType<{
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }, import("zod").ZodTypeDef, {
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }>>;
    post: import("zod").ZodOptional<import("zod").ZodType<{
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }, import("zod").ZodTypeDef, {
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }>>;
    delete: import("zod").ZodOptional<import("zod").ZodType<{
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }, import("zod").ZodTypeDef, {
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }>>;
    options: import("zod").ZodOptional<import("zod").ZodType<{
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }, import("zod").ZodTypeDef, {
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }>>;
    head: import("zod").ZodOptional<import("zod").ZodType<{
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }, import("zod").ZodTypeDef, {
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }>>;
    patch: import("zod").ZodOptional<import("zod").ZodType<{
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }, import("zod").ZodTypeDef, {
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }>>;
    trace: import("zod").ZodOptional<import("zod").ZodType<{
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }, import("zod").ZodTypeDef, {
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }>>;
}>, "strip", import("zod").ZodTypeAny, {
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
    get?: ({
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }) | undefined;
    put?: ({
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }) | undefined;
    post?: ({
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }) | undefined;
    delete?: ({
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }) | undefined;
    options?: ({
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }) | undefined;
    head?: ({
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }) | undefined;
    patch?: ({
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }) | undefined;
    trace?: ({
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }) | undefined;
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
    get?: ({
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }) | undefined;
    put?: ({
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }) | undefined;
    post?: ({
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }) | undefined;
    delete?: ({
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }) | undefined;
    options?: ({
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }) | undefined;
    head?: ({
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }) | undefined;
    patch?: ({
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }) | undefined;
    trace?: ({
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
    } & {
        callbacks?: Record<string, import("zod").TypeOf<typeof import("../processed/index.js").CallbackObjectSchema>>;
    }) | undefined;
}>>;
//# sourceMappingURL=paths-object.d.ts.map