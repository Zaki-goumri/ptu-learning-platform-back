import { BaseAuthProvider } from './base-auth-provider.js';

// eslint-disable-next-line @typescript-eslint/no-empty-interface

export class DefaultAuthProvider extends BaseAuthProvider {
  constructor({
    authenticate
  }) {
    super();
    this.authenticate = authenticate;
  }
  async handleLogin(opts, context) {
    const {
      data = {}
    } = opts;
    const {
      email,
      password
    } = data;
    return this.authenticate({
      email,
      password
    }, context);
  }
}