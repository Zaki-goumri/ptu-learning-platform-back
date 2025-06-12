import { expect } from 'chai';
import sinon from 'sinon';
import { BaseProperty } from '../../../adapters/property/index.js';
import { overrideFromOptions } from './override-from-options.js';
describe('overrideFromOptions', () => {
  const propertyName = 'type';
  const rawValue = 'boolean';
  const optionsValue = 'string';
  let property;
  beforeEach(() => {
    property = sinon.createStubInstance(BaseProperty, {
      [propertyName]: sinon.stub().returns(rawValue)
    });
  });
  it('returns value from BaseProperty function when options are not given', () => {
    expect(overrideFromOptions(propertyName, property, {})).to.eq(rawValue);
  });
  it('returns value from options it is given', () => {
    expect(overrideFromOptions(propertyName, property, {
      [propertyName]: optionsValue
    })).to.eq(optionsValue);
  });
});