import { z } from 'zod';
/**
 * Parameter Object
 *
 * Describes a single operation parameter.
 *
 * A unique parameter is defined by a combination of a name and location.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#parameter-object
 */
export declare const ParameterObjectSchema: z.ZodObject<{
    /**
     * REQUIRED. The name of the parameter. Parameter names are case sensitive.
     *
     * - If in is "path", the name field MUST correspond to a template expression occurring within the path field in the
     *   Paths Object. See Path Templating for further information.
     * - If in is "header" and the name field is "Accept", "Content-Type" or "Authorization", the parameter definition
     *   SHALL be ignored.
     * - For all other cases, the name corresponds to the parameter name used by the in property.
     **/
    name: z.ZodString;
    /**
     * REQUIRED. The location of the parameter. Possible values are "query", "header", "path" or "cookie".
     **/
    in: z.ZodEnum<["query", "header", "path", "cookie"]>;
    /**
     * A brief description of the parameter. This could contain examples of use. CommonMark syntax MAY be used for rich
     * text representation.
     **/
    description: z.ZodOptional<z.ZodString>;
    /**
     * Determines whether this parameter is mandatory. If the parameter location is "path", this property is REQUIRED and
     * its value MUST be true. Otherwise, the property MAY be included and its default value is false.
     **/
    required: z.ZodOptional<z.ZodBoolean>;
    /**
     * Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is false.
     **/
    deprecated: z.ZodOptional<z.ZodBoolean>;
    /**
     * Sets the ability to pass empty-valued parameters. This is valid only for query parameters and allows sending a
     * parameter with an empty value. Default value is false. If style is used, and if behavior is n/a (cannot be
     * serialized), the value of allowEmptyValue SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is
     * likely to be removed in a later revision.
     **/
    allowEmptyValue: z.ZodOptional<z.ZodBoolean>;
    /**
     * Describes how the parameter value will be serialized depending on the type of the parameter value. Default values
     * (based on value of in): for query - form; for path - simple; for header - simple; for cookie - form.
     **/
    style: z.ZodOptional<z.ZodEnum<["matrix", "label", "form", "simple", "spaceDelimited", "pipeDelimited", "deepObject"]>>;
    /**
     * When this is true, parameter values of type array or object generate separate parameters for each value of the
     * array or key-value pair of the map. For other types of parameters this property has no effect. When style is form,
     * the default value is true. For all other styles, the default value is false. */
    explode: z.ZodOptional<z.ZodBoolean>;
    /**
     * Determines whether the parameter value SHOULD allow reserved characters, as defined by RFC3986 :/?#[]@!$&'()*+,;=
     * to be included without percent-encoding. This property only applies to parameters with an in value of query.
     * The default value is false.
     **/
    allowReserved: z.ZodOptional<z.ZodBoolean>;
    /**
     * The schema defining the type used for the parameter.
     **/
    schema: z.ZodOptional<z.ZodType<Record<string, any>, z.ZodTypeDef, Record<string, any>>>;
    /**
     * Example of the parameter's potential value. The example SHOULD match the specified schema and encoding properties
     * if present. The example field is mutually exclusive of the examples field. Furthermore, if referencing a schema
     * that contains an example, the example value SHALL override the example provided by the schema. To represent
     * examples of media types that cannot naturally be represented in JSON or YAML, a string value can contain the
     * example with escaping where necessary.
     **/
    example: z.ZodOptional<z.ZodAny>;
    /**
     * Examples of the parameter's potential value. Each example SHOULD contain a value in the correct format as
     * specified in the parameter encoding. The examples field is mutually exclusive of the example field. Furthermore,
     * if referencing a schema that contains an example, the examples value SHALL override the example provided by the
     * schema.
     **/
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
    /**
     * A map containing the representations for the parameter. The key is the media type and the value describes it.
     * The map MUST only contain one entry.
     **/
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
}>;
//# sourceMappingURL=parameter-object.d.ts.map