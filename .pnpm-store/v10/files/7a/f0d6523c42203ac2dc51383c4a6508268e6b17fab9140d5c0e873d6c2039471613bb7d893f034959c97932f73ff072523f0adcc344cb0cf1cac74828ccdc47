import flat from 'flat';
import merge from 'lodash/merge.js';
import * as theme from "../theme.js";
const {
  flatten,
  unflatten
} = flat;

/**
 * Applies new styles to the default theme
 *
 * ### Example
 *
 * ```jsx
 * import { combineStyles } from '@adminjs/design-system`
 *
 * const myTheme = combineStyles({
 *   colors: {
 *     primary100: '#000'
 *   }
 * })
 * ```
 *
 * @param {ThemeOverride} overrides
 * @memberof module:@adminjs/design-system
 *
 * @return  {Theme}
 */
const combineStyles = (...overrides) => {
  const merged = merge(flatten(theme), ...overrides.map((o = {}) => flatten(o)));
  return unflatten(merged);
};
export { combineStyles };