import { LOCALE_INITIALIZE } from '../actions/initialize-locale.js';
const defaultLocale = {
  language: 'en',
  translations: {}
};
export const localesReducer = (state = defaultLocale, action) => {
  switch (action.type) {
    case LOCALE_INITIALIZE:
      return action.data;
    default:
      return state;
  }
};