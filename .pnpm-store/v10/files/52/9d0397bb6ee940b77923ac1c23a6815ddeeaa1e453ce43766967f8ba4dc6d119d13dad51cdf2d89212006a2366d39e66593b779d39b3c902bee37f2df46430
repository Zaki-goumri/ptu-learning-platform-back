import type { AdminJSOptions, BaseAuthProvider, CurrentAdmin } from 'adminjs';
import { SessionOptions } from 'express-session';
import { ExpressFormidableOptions } from './express-formidable-options.interface.js';
export type AdminModuleOptions = {
    adminJsOptions: AdminJSOptions;
    auth?: {
        authenticate?: (email: string, password: string, ctx?: any) => Promise<CurrentAdmin | null>;
        cookiePassword: string;
        cookieName: string;
        provider?: BaseAuthProvider;
    };
    formidableOptions?: ExpressFormidableOptions;
    sessionOptions?: SessionOptions;
    shouldBeInitialized?: boolean;
};
