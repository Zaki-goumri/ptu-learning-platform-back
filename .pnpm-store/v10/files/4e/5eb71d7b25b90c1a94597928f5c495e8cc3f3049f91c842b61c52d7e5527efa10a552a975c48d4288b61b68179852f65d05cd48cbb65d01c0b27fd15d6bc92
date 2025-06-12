/* Solution inspired by https://stackoverflow.com/a/20732091/2594227 answer */
const UNITS = ['B', 'KB', 'MB', 'GB', 'TB'];
// eslint-disable-next-line import/prefer-default-export

/**
 * Changes size in bytes to string. If unit is not provided - tries to find the best match.
 *
 * @param {number} size
 * @param {'B' | 'KB' | 'MB' | 'GB' | 'TB'} [unit]
 * @returns {string}
 * @memberof module:@adminjs/design-system
 */
const humanFileSize = (size, unit) => {
  let foundUnitIndex = null;
  if (unit) {
    foundUnitIndex = UNITS.findIndex(u => u === unit);
  }
  const unitIndex = foundUnitIndex || Math.min(Math.floor(Math.log(+size) / Math.log(1024)), UNITS.length);
  const calculatedSize = +size / 1024 ** unitIndex;
  const guessedUnit = ['B', 'kB', 'MB', 'GB', 'TB'][unitIndex];
  return `${Math.round(calculatedSize)} ${guessedUnit}`;
};
export { humanFileSize };