import type { ApiReferenceConfigurationWithSources } from './api-reference-configuration.js';
import { z } from 'zod';
/**
 * Zod schema for HTML rendering configuration
 */
export declare const htmlRenderingConfigurationSchema: z.ZodObject<{
    /**
     * The URL to the Scalar API Reference JS CDN.
     *
     * Use this to pin a specific version of the Scalar API Reference.
     *
     * @default https://cdn.jsdelivr.net/npm/@scalar/api-reference
     *
     * @example https://cdn.jsdelivr.net/npm/@scalar/api-reference@1.25.122
     */
    cdn: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    /**
     * The title of the page.
     */
    pageTitle: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    cdn: string;
    pageTitle: string;
}, {
    cdn?: string | undefined;
    pageTitle?: string | undefined;
}>;
/**
 * The configuration for the static HTML rendering using the CDN.
 *
 * It’s the ApiReferenceConfiguration, but extended with the `pageTitle` and `cdn` options.
 */
export type HtmlRenderingConfiguration = Partial<ApiReferenceConfigurationWithSources> & z.infer<typeof htmlRenderingConfigurationSchema>;
//# sourceMappingURL=html-rendering-configuration.d.ts.map