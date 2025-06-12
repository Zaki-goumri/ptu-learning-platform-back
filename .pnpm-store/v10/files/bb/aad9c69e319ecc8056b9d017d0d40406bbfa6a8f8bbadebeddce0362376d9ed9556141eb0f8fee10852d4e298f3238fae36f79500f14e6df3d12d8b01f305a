import { AuthProviderConfig, AuthenticatePayload, BaseAuthProvider, LoginHandlerOptions } from './base-auth-provider.js';
export interface DefaultAuthenticatePayload extends AuthenticatePayload {
    email: string;
    password: string;
}
export interface DefaultAuthProviderConfig extends AuthProviderConfig<DefaultAuthenticatePayload> {
}
export declare class DefaultAuthProvider extends BaseAuthProvider {
    protected readonly authenticate: any;
    constructor({ authenticate }: DefaultAuthProviderConfig);
    handleLogin(opts: LoginHandlerOptions, context: any): Promise<any>;
}
