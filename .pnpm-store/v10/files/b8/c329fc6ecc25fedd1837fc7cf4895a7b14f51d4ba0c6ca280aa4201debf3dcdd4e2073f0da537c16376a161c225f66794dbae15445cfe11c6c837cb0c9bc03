/* eslint-disable import/prefer-default-export */

/**
 * Function used in React memo to compare if previous property value and next
 * property value are the same.
 *
 * @private
 */
export const recordPropertyIsEqual = (prevProps, nextProps) => {
  const prevValue = prevProps.record.params[prevProps.property.path];
  const nextValue = nextProps.record.params[nextProps.property.path];
  const prevError = prevProps.record.errors[prevProps.property.path];
  const nextError = nextProps.record.errors[nextProps.property.path];
  return prevValue === nextValue && prevError === nextError;
};