import { ServerResponse } from 'node:http';
import { ApiReferenceConfiguration } from '@scalar/types/api-reference';
import { Request, Response } from 'express';
import { FastifyRequest } from 'fastify';

type NestJSReferenceConfiguration = Partial<ApiReferenceConfiguration> & {
    withFastify?: boolean;
    cdn?: string;
};
type ApiReferenceOptions = Partial<ApiReferenceConfiguration> & {
    cdn?: string;
};
/**
 * The custom theme CSS for the API Reference.
 */
declare const customThemeCSS = "\n/* basic theme */\n.light-mode {\n  --scalar-color-1: #2a2f45;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n  --scalar-color-accent: #e0234d;\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f6f6f6;\n  --scalar-background-3: #e7e7e7;\n  --scalar-background-accent: #8ab4f81f;\n  --scalar-border-color: rgba(0, 0, 0, 0.1);\n}\n.dark-mode {\n  --scalar-color-1: rgba(255, 255, 255, 1);\n  --scalar-color-2: #b2bac2;\n  --scalar-color-3: #6e748b;\n  --scalar-color-accent: #e0234d;\n  --scalar-background-1: #11131e;\n  --scalar-background-2: #1c2132;\n  --scalar-background-3: #2f354a;\n  --scalar-background-accent: #8ab4f81f;\n  --scalar-border-color: rgba(255, 255, 255, 0.1);\n}\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: var(--scalar-background-3);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-color-1);\n  --scalar-sidebar-search-background: var(--scalar-background-2);\n  --scalar-sidebar-search-border-color: var(--scalar-background-2);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n}\n\n/* advanced */\n.light-mode {\n  --scalar-button-1: rgb(49 53 56);\n  --scalar-button-1-color: #fff;\n  --scalar-button-1-hover: rgb(28 31 33);\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);\n  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);\n}\n.dark-mode {\n  --scalar-button-1: #f6f6f6;\n  --scalar-button-1-color: #000;\n  --scalar-button-1-hover: #e7e7e7;\n  --scalar-color-green: #30beb0;\n  --scalar-color-red: #e91e63;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #2cb6f6;\n  --scalar-color-orange: #ff5656;\n  --scalar-color-purple: #6223e0;\n  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);\n  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);\n}\n";
/**
 * The HTML to load the @scalar/api-reference package.
 */
declare const ApiReference: (options: ApiReferenceOptions) => string;
/**
 * The HTML template to render the API Reference.
 */
declare function apiReference(options: NestJSReferenceConfiguration): ((_req: FastifyRequest, res: ServerResponse) => void) | ((_req: Request, res: Response) => void);

export { ApiReference, type ApiReferenceOptions, type NestJSReferenceConfiguration, apiReference, customThemeCSS };
