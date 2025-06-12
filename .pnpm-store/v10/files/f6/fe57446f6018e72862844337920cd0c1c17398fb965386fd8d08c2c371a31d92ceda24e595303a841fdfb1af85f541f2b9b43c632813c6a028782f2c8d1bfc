import startCase from 'lodash/startCase.js';

/**
 * @memberof TranslateFunctions
 * @alias TranslateFunction
 */

/**
 * Translate Functions are the helper functions which you can use to translate
 * your application.
 *
 * On the fronted they can be used with {@link useTranslation} hook. On the backend
 * they are injected to any {@link AdminJS} instance and {@link ActionContext}.
 */

const translate = (i18n, key, name, resourceId, options = {}) => {
  // cspell:disable-next-line
  if (i18n.language === 'cimode') return [key, name].join('.');
  let realOptions = {
    ...options,
    defaultValue: options.defaultValue ?? startCase(name)
  };
  let keys = [`${key}.${name}`];
  if (resourceId && typeof resourceId !== 'string') {
    realOptions = resourceId;
  } else if (resourceId) {
    keys = [`resources.${resourceId}.${key}.${name}`, ...keys];
  }
  return i18n.t(keys, realOptions);
};
export const createFunctions = i18n => {
  const translateAction = (actionName, resourceId, options) => translate(i18n, 'actions', actionName, resourceId, options);
  const translateButton = (buttonLabel, resourceId, options) => translate(i18n, 'buttons', buttonLabel, resourceId, options);
  const translateLabel = (label, resourceId, options) => translate(i18n, 'labels', label, resourceId, options);
  const translateProperty = (propertyName, resourceId, options) => translate(i18n, 'properties', propertyName, resourceId, options);
  const translateMessage = (messageName, resourceId, options) => translate(i18n, 'messages', messageName, resourceId, {
    ...options,
    defaultValue: options?.defaultValue ?? messageName
  });
  const translateComponent = (messageName, resourceId, options) => translate(i18n, 'components', messageName, resourceId, options);
  const translatePage = (messageName, resourceId, options) => translate(i18n, 'pages', messageName, resourceId, options);
  return {
    translateAction,
    ta: translateAction,
    translateButton,
    tb: translateButton,
    translateLabel,
    tl: translateLabel,
    translateProperty,
    tp: translateProperty,
    translateMessage,
    tm: translateMessage,
    translateComponent,
    tc: translateComponent,
    translatePage,
    t: i18n.t,
    translate: i18n.t
  };
};

/**
 * ES Modules exports are immutable thus Sinon cannot create stubs for e.g. createFunctions
 * Wrapping the exports in an object allows Sinon to modify it's properties.
 *
 * This prevents Sinon error from appearing:
 * "TypeError: ES Modules cannot be stubbed"
 */
export const __testExports = {
  createFunctions
};