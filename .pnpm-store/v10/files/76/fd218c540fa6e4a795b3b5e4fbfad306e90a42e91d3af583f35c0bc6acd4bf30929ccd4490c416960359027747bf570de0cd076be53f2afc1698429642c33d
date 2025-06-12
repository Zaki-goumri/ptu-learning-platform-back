export function overrideFromOptions(optionName, property, options) {
  if (typeof options[optionName] === 'undefined') {
    return property[optionName]();
  }
  return options[optionName];
}