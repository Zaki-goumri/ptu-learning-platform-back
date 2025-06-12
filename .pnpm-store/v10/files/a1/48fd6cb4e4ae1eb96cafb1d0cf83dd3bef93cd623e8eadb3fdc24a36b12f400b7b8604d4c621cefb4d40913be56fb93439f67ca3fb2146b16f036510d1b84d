import { z } from 'zod';
/**
 *
 * XML Object
 *
 * A metadata object that allows for more fine-tuned XML model definitions.
 *
 * When using arrays, XML element names are not inferred (for singular/plural forms) and the name field SHOULD be used
 * to add that information. See examples for expected behavior.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.1.md#xml-object
 */
export declare const XmlObjectSchema: z.ZodObject<{
    /**
     * Replaces the name of the element/attribute used for the described schema property.
     */
    name: z.ZodOptional<z.ZodString>;
    /**
     * The URI of the namespace definition. Value MUST be in the form of a URL.
     */
    namespace: z.ZodOptional<z.ZodString>;
    /**
     * The prefix to be used for the name.
     */
    prefix: z.ZodOptional<z.ZodString>;
    /**
     * Declares whether the property definition translates to an attribute instead of an element.
     * Default value is false.
     */
    attribute: z.ZodOptional<z.ZodBoolean>;
    /**
     * MAY be used only for an array definition.
     * Signifies whether the array is wrapped (for example, <books><book/><book/></books>)
     * or unwrapped (<book/><book/>). Default value is false.
     */
    wrapped: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    namespace?: string | undefined;
    prefix?: string | undefined;
    attribute?: boolean | undefined;
    wrapped?: boolean | undefined;
}, {
    name?: string | undefined;
    namespace?: string | undefined;
    prefix?: string | undefined;
    attribute?: boolean | undefined;
    wrapped?: boolean | undefined;
}>;
export type XMLObject = z.infer<typeof XmlObjectSchema>;
//# sourceMappingURL=xml-object.d.ts.map