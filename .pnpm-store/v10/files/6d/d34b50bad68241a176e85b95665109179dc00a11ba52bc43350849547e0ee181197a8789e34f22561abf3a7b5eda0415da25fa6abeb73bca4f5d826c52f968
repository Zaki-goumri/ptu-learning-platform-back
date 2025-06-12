import { z } from "zod";
const OpenApiExtensionSchema = z.object({
  /**
   * Name of specification extension property. Has to start with `x-`.
   *
   * @example
   * ```yaml
   * x-custom-extension: foobar
   * ```
   */
  name: z.string().regex(/^x-/),
  /**
   * Vue component to render the specification extension
   */
  component: z.unknown(),
  /**
   * Custom renderer to render the specification extension
   */
  renderer: z.unknown().optional()
});
const ApiReferencePluginSchema = z.function().returns(
  z.object({
    name: z.string(),
    extensions: z.array(OpenApiExtensionSchema)
  })
);
export {
  ApiReferencePluginSchema,
  OpenApiExtensionSchema
};
//# sourceMappingURL=api-reference-plugin.js.map
