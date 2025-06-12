import { ErrorTypeEnum } from '../../../utils/error-type.enum.js';

/**
 * Property Errors
 * @alias PropertyErrors
 * @memberof ValidationError
 */

/**
 * Error which is thrown when there are validation errors with records
 * @category Errors
 */
export class ValidationError extends Error {
  /**
   * Validation errors for all properties
   */

  /**
   * One root validation error i.e. thrown when user wants to perform
   * an action which violates foreign key constraint
   */

  /**
   * HTTP Status code: 400
   */

  /**
   * @param {PropertyErrors} propertyErrors     error messages
   * @param {RecordError} [baseError]           base error message
   */
  constructor(propertyErrors, baseError) {
    super('Resource cannot be stored because of validation errors');
    this.statusCode = 400;
    this.propertyErrors = propertyErrors;
    this.baseError = baseError || null;
    this.name = ErrorTypeEnum.Validation;
  }
}
export default ValidationError;