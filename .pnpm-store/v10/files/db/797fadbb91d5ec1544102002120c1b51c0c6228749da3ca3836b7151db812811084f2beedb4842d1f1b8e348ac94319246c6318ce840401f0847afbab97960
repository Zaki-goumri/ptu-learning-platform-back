import startCase from 'lodash/startCase.js';
const DEFAULT_LOAD = 'currentOnly';
export const DEFAULT_NS = 'translation';
export const defaultLocale = {
  language: 'en',
  translations: {},
  availableLanguages: ['en']
};
export const defaultConfig = {
  debug: process.env.NODE_ENV === 'development',
  partialBundledLanguages: true,
  interpolation: {
    escapeValue: false
  },
  ns: [DEFAULT_NS],
  defaultNS: DEFAULT_NS,
  fallbackNS: DEFAULT_NS,
  load: DEFAULT_LOAD,
  react: {
    useSuspense: false
  },
  resources: {},
  parseMissingKeyHandler: (key, defaultValue) => defaultValue ?? startCase(key),
  get initImmediate() {
    return typeof window !== 'undefined';
  }
};