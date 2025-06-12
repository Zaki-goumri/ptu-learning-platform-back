import { z } from 'zod';
/**
 * Path Item Object
 *
 * Describes the operations available on a single path. A Path Item MAY be empty, due to ACL constraints. The path
 * itself is still exposed to the documentation viewer but they will not know which operations and parameters are
 * available.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#path-item-object
 */
export declare const PathItemObjectSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    summary: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
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
}, {
    parameters: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<{
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
    }, {
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
        content: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<z.objectUtil.extendShape<{
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
        }, {
            schema: z.ZodOptional<z.ZodType<any, z.ZodTypeDef, any>>;
            example: z.ZodOptional<z.ZodAny>;
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
            encoding: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<z.objectUtil.extendShape<{
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
            }, {
                headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
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
                }>, z.ZodObject<z.objectUtil.extendShape<{
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
                    schema: z.ZodOptional<z.ZodType<any, z.ZodTypeDef, any>>;
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
                }>]>>>;
            }>, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>>>;
        }>, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>>>;
    }>, "strip", z.ZodTypeAny, {
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
    }>]>, "many">>;
}>, {
    /**
     * Allows for a referenced definition of this path item. The value MUST be in the form of a URI, and the referenced
     * structure MUST be in the form of a Path Item Object. In case a Path Item Object field appears both in the defined
     * object and the referenced object, the behavior is undefined. See the rules for resolving Relative References.
     *
     * Note: The behavior of $ref with adjacent properties is likely to change in future versions of this specification to
     * bring it into closer alignment with the behavior of the Reference Object.
     *
     * Q: Why don’t we just use `ReferenceObjectSchema`?
     * A: References work a little bit different here. It’s the only place where they can be combined with other
     *    properties.
     */
    $ref: z.ZodOptional<z.ZodString>;
    /**
     * A definition of a GET operation on this path.
     */
    get: z.ZodOptional<z.ZodType<{
        security?: Record<string, string[]>[] | undefined;
        tags?: string[] | undefined;
        externalDocs?: {
            url: string;
            description?: string | undefined;
        } | undefined;
        description?: string | undefined;
        summary?: string | undefined;
        operationId?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
    }, z.ZodTypeDef, {
        security?: Record<string, string[]>[] | undefined;
        tags?: string[] | undefined;
        externalDocs?: {
            url: string;
            description?: string | undefined;
        } | undefined;
        description?: string | undefined;
        summary?: string | undefined;
        operationId?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
    }>>;
    /**
     * A definition of a PUT operation on this path.
     */
    put: z.ZodOptional<z.ZodType<{
        security?: Record<string, string[]>[] | undefined;
        tags?: string[] | undefined;
        externalDocs?: {
            url: string;
            description?: string | undefined;
        } | undefined;
        description?: string | undefined;
        summary?: string | undefined;
        operationId?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
    }, z.ZodTypeDef, {
        security?: Record<string, string[]>[] | undefined;
        tags?: string[] | undefined;
        externalDocs?: {
            url: string;
            description?: string | undefined;
        } | undefined;
        description?: string | undefined;
        summary?: string | undefined;
        operationId?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
    }>>;
    /**
     * A definition of a POST operation on this path.
     */
    post: z.ZodOptional<z.ZodType<{
        security?: Record<string, string[]>[] | undefined;
        tags?: string[] | undefined;
        externalDocs?: {
            url: string;
            description?: string | undefined;
        } | undefined;
        description?: string | undefined;
        summary?: string | undefined;
        operationId?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
    }, z.ZodTypeDef, {
        security?: Record<string, string[]>[] | undefined;
        tags?: string[] | undefined;
        externalDocs?: {
            url: string;
            description?: string | undefined;
        } | undefined;
        description?: string | undefined;
        summary?: string | undefined;
        operationId?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
    }>>;
    /**
     * A definition of a DELETE operation on this path.
     */
    delete: z.ZodOptional<z.ZodType<{
        security?: Record<string, string[]>[] | undefined;
        tags?: string[] | undefined;
        externalDocs?: {
            url: string;
            description?: string | undefined;
        } | undefined;
        description?: string | undefined;
        summary?: string | undefined;
        operationId?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
    }, z.ZodTypeDef, {
        security?: Record<string, string[]>[] | undefined;
        tags?: string[] | undefined;
        externalDocs?: {
            url: string;
            description?: string | undefined;
        } | undefined;
        description?: string | undefined;
        summary?: string | undefined;
        operationId?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
    }>>;
    /**
     * A definition of a OPTIONS operation on this path.
     */
    options: z.ZodOptional<z.ZodType<{
        security?: Record<string, string[]>[] | undefined;
        tags?: string[] | undefined;
        externalDocs?: {
            url: string;
            description?: string | undefined;
        } | undefined;
        description?: string | undefined;
        summary?: string | undefined;
        operationId?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
    }, z.ZodTypeDef, {
        security?: Record<string, string[]>[] | undefined;
        tags?: string[] | undefined;
        externalDocs?: {
            url: string;
            description?: string | undefined;
        } | undefined;
        description?: string | undefined;
        summary?: string | undefined;
        operationId?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
    }>>;
    /**
     * A definition of a HEAD operation on this path.
     */
    head: z.ZodOptional<z.ZodType<{
        security?: Record<string, string[]>[] | undefined;
        tags?: string[] | undefined;
        externalDocs?: {
            url: string;
            description?: string | undefined;
        } | undefined;
        description?: string | undefined;
        summary?: string | undefined;
        operationId?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
    }, z.ZodTypeDef, {
        security?: Record<string, string[]>[] | undefined;
        tags?: string[] | undefined;
        externalDocs?: {
            url: string;
            description?: string | undefined;
        } | undefined;
        description?: string | undefined;
        summary?: string | undefined;
        operationId?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
    }>>;
    /**
     * A definition of a PATCH operation on this path.
     */
    patch: z.ZodOptional<z.ZodType<{
        security?: Record<string, string[]>[] | undefined;
        tags?: string[] | undefined;
        externalDocs?: {
            url: string;
            description?: string | undefined;
        } | undefined;
        description?: string | undefined;
        summary?: string | undefined;
        operationId?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
    }, z.ZodTypeDef, {
        security?: Record<string, string[]>[] | undefined;
        tags?: string[] | undefined;
        externalDocs?: {
            url: string;
            description?: string | undefined;
        } | undefined;
        description?: string | undefined;
        summary?: string | undefined;
        operationId?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
    }>>;
    /**
     * A definition of a TRACE operation on this path.
     */
    trace: z.ZodOptional<z.ZodType<{
        security?: Record<string, string[]>[] | undefined;
        tags?: string[] | undefined;
        externalDocs?: {
            url: string;
            description?: string | undefined;
        } | undefined;
        description?: string | undefined;
        summary?: string | undefined;
        operationId?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
    }, z.ZodTypeDef, {
        security?: Record<string, string[]>[] | undefined;
        tags?: string[] | undefined;
        externalDocs?: {
            url: string;
            description?: string | undefined;
        } | undefined;
        description?: string | undefined;
        summary?: string | undefined;
        operationId?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
    }>>;
}>, "strip", z.ZodTypeAny, {
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
    $ref?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
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
    $ref?: string | undefined;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
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
        } | {
            $ref: string;
            description?: string | undefined;
            summary?: string | undefined;
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
        callbacks?: Record<string, z.infer<typeof import("./reference-object.js").ReferenceObjectSchema> | z.infer<typeof import("./callback-object.js").CallbackObjectSchema>>;
    }) | undefined;
}>;
//# sourceMappingURL=path-item-object.d.ts.map