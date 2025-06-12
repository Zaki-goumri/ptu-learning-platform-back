import { z } from 'zod';
/**
 * Server Variable Object
 *
 * An object representing a Server Variable for server URL template substitution.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#server-variable-object
 */
export declare const ServerVariableObjectSchema: z.ZodObject<{
    /**
     * An enumeration of string values to be used if the substitution options are from a limited set. The array MUST NOT be empty.
     */
    enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * REQUIRED. The default value to use for substitution, which SHALL be sent if an alternate value is not supplied.
     * Note this behavior is different than the Schema Object's treatment of default values, because in those cases
     * parameter values are optional. If the enum is defined, the value MUST exist in the enum's values.
     */
    default: z.ZodOptional<z.ZodString>;
    /**
     * An optional description for the server variable. CommonMark syntax MAY be used for rich text representation.
     */
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    description?: string | undefined;
    default?: string | undefined;
    enum?: string[] | undefined;
}, {
    description?: string | undefined;
    default?: string | undefined;
    enum?: string[] | undefined;
}>;
//# sourceMappingURL=server-variable-object.d.ts.map