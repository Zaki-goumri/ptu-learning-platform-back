/* eslint-disable @typescript-eslint/no-empty-function */
import { expect } from 'chai';
import { mergeResourceOptions } from './build-feature.js';
describe('mergeResourceOptions', function () {
  it('chaines before hooks', function () {
    const existingOptions = {
      actions: {
        new: {
          before: function firstBeforeHook() {},
          handler: null
        },
        edit: {
          after: [function firstAfterHook() {}]
        }
      }
    };
    const newOptions = {
      actions: {
        new: {
          before: function lastBeforeHook() {},
          handler: function lastHandler() {}
        },
        edit: {
          after: function lastAfterHook() {}
        },
        newAction: {
          handler: function newHandler() {}
        }
      }
    };
    expect(mergeResourceOptions(existingOptions, newOptions)).to.deep.eq({
      actions: {
        new: {
          before: [existingOptions.actions.new.before, newOptions.actions.new.before],
          handler: [newOptions.actions.new.handler]
        },
        edit: {
          after: [existingOptions.actions.edit.after[0], newOptions.actions.edit.after]
        },
        newAction: {
          handler: [newOptions.actions.newAction.handler]
        }
      }
    });
  });
  it('chaines properties', function () {
    const existingOptions = {
      properties: {
        password: {
          isVisible: true,
          component: 'ala'
        }
      }
    };
    const newOptions = {
      properties: {
        password2: {
          isVisible: false,
          component: 'ela'
        }
      }
    };
    expect(mergeResourceOptions(existingOptions, newOptions)).to.deep.eq({
      properties: {
        ...existingOptions.properties,
        ...newOptions.properties
      }
    });
  });
  it('merges falsey options', function () {
    const existingOptions = {
      navigation: {
        name: 'db'
      }
    };
    const newOptions = {
      navigation: false
    };
    expect(mergeResourceOptions(existingOptions, newOptions)).to.deep.eq({
      navigation: false
    });
  });
});