import { z } from 'zod';
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
export declare const LinkObjectSchema: z.ZodObject<{
    /**
     * A URI reference to an OAS operation. This field is mutually exclusive of the operationId field, and MUST point to
     * an Operation Object. Relative operationRef values MAY be used to locate an existing Operation Object in the OpenAPI Description.
     */
    operationRef: z.ZodOptional<z.ZodString>;
    /**
     * The name of an existing, resolvable OAS operation, as defined with a unique operationId. This field is mutually
     * exclusive of the operationRef field.
     */
    operationId: z.ZodOptional<z.ZodString>;
    /**
     * A map representing parameters to pass to an operation as specified with operationId or identified via
     * operationRef. The key is the parameter name to be used (optionally qualified with the parameter location, e.g.
     * path.id for an id parameter in the path), whereas the value can be a constant or an expression to be evaluated
     * and passed to the linked operation.
     */
    parameters: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodString, string, string>>>;
    /**
     * A literal value or {expression} to use as a request body when calling the target operation.
     */
    requestBody: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /**
     * A description of the link. CommonMark syntax MAY be used for rich text representation.
     */
    description: z.ZodOptional<z.ZodString>;
    /**
     * A server object to be used by the target operation.
     */
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
}>;
//# sourceMappingURL=link-object.d.ts.map