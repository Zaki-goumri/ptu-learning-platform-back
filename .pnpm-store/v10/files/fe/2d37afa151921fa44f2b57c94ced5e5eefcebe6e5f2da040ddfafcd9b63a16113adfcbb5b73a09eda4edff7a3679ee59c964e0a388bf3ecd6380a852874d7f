import { ErrorTypeEnum } from '../../../utils/error-type.enum.js';
/**
 * Error which can be thrown by developer in custom actions/hooks/components
 *
 * @category Errors
 */
export class AppError extends Error {
  /**
   * HTTP Status code, defaults to 400
   */

  /**
   * Base error message and type which is stored in the record
   */

  /**
   * Any custom message which should be seen in the UI
   */

  /**
   * Any additional error information
   */

  /**
   * Any additional notice configuration to show in UI
   */

  /**
   * @param {string} message    a message to be shared with the client
   * @param {string} data       additional data to be shared with the client
   */
  constructor(message, data, notice) {
    super(message);
    this.statusCode = 400;
    this.baseMessage = message;
    this.baseError = {
      message,
      type: ErrorTypeEnum.App
    };
    this.data = data;
    this.notice = notice;
    this.name = ErrorTypeEnum.App;
  }
}
export default AppError;