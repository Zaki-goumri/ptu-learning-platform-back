/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */

import { NotImplementedError } from '../errors/index.js';

// eslint-disable-next-line @typescript-eslint/no-empty-interface

/**
 * Extendable class which includes methods allowing you to build custom auth providers or modify existing ones.
 *
 * Documentation: https://docs.adminjs.co/basics/authentication
 */
export class BaseAuthProvider {
  /**
   * "getUiProps" method should be used to decide which configuration variables are needed
   * in the frontend. By default it returns an empty object.
   *
   * @returns an object sent to the frontend app, available in `window.__APP_STATE__`
   */
  getUiProps() {
    return {};
  }

  /**
   * Handle login action of user. The method should return a user object or null.
   *
   * @param opts          Basic REST request data: data (body), query, params, headers
   * @param context       Full request context specific to your framework, i. e. "request" and "response" in Express
   */
  async handleLogin(opts, context) {
    throw new NotImplementedError('BaseAuthProvider#handleLogin');
  }

  /**
   *  "handleLogout" allows you to perform extra actions to log out the user, you have access to request's context.
   *  For example, you could want to log out the user from external services besides destroying AdminJS session.
   *  By default, this method is always called by your framework plugin but does nothing.
   *
   * @param context       Full request context specific to your framework, i. e. "request" and "response" in Express
   * @returns             Returns anything, but the default plugin implementations don't do anything with the result.
   */
  async handleLogout(context) {
    return Promise.resolve();
  }

  /**
   * This method is assigned to an endpoint at your server's AdminJS "refreshTokenPath". It is not used by default.
   * In order to use this API Endpoint, override "AuthenticationBackgroundComponent" by using your ComponentLoader instance.
   * You can use that component to call API to refresh your user's session when specific conditions are met. The default
   * email/password authentication doesn't require you to refresh your session, but you may want to use "handleRefreshToken"
   * in case your authentication is integrated with an external IdP which issues short-lived access tokens.
   *
   * Any authentication metadata should ideally be stored under "_auth" property of CurrentAdmin.
   *
   * See more in the documentation: https://docs.adminjs.co/basics/authentication
   *
   * @param opts          Basic REST request data: data (body), query, params, headers
   * @param context       Full request context specific to your framework, i. e. "request" and "response" in Express
   * @returns             Updated session object to be merged with existing one.
   */
  async handleRefreshToken(opts, context) {
    return Promise.resolve({});
  }
}