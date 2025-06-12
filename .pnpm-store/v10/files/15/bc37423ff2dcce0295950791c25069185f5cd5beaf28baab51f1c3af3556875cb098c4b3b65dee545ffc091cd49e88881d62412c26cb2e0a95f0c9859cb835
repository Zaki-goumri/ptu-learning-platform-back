/**
 * Link Object
 *
 * The Link Object represents a possible design-time link for a response. The presence of a link does not guarantee the
 * caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between
 * responses and other operations.
 *
 * Unlike dynamic links (i.e. links provided in the response payload), the OAS linking mechanism does not require link
 * information in the runtime response.
 *
 * For computing links and providing instructions to execute them, a runtime expression is used for accessing values in an
 * operation and using them as parameters while invoking the linked operation.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#link-object
 */
export declare const LinkObjectSchema: import("zod").ZodObject<{
    operationRef: import("zod").ZodOptional<import("zod").ZodString>;
    operationId: import("zod").ZodOptional<import("zod").ZodString>;
    parameters: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodEffects<import("zod").ZodString, string, string>>>;
    requestBody: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
    description: import("zod").ZodOptional<import("zod").ZodString>;
    server: import("zod").ZodOptional<import("zod").ZodObject<{
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
    }>>;
}, "strip", import("zod").ZodTypeAny, {
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
}>;
//# sourceMappingURL=link-object.d.ts.map