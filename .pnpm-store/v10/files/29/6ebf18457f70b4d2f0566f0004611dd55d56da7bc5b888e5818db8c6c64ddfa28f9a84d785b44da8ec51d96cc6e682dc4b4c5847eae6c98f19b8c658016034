import { expect } from 'chai';
import layoutElementParser from './layout-element-parser.js';
describe('layoutElementParser', function () {
  const propertyName = 'name';
  const property2 = 'surname';
  const props = {
    mt: 'default',
    ml: 'xxxl'
  };
  it('parses regular string', function () {
    expect(layoutElementParser(propertyName)).to.deep.eq({
      properties: [propertyName],
      props: {},
      layoutElements: [],
      component: 'Box'
    });
  });
  it('parses list of strings', function () {
    expect(layoutElementParser([propertyName, property2])).to.deep.eq({
      properties: [propertyName, property2],
      props: {},
      layoutElements: [],
      component: 'Box'
    });
  });
  it('parses property and props', function () {
    expect(layoutElementParser([propertyName, props])).to.deep.eq({
      properties: [propertyName],
      props,
      layoutElements: [],
      component: 'Box'
    });
  });
  it('recursively parses and inner element as string', function () {
    const innerElement = ['string2', {
      width: 1 / 2
    }];
    expect(layoutElementParser([props, [innerElement]])).to.deep.eq({
      properties: [],
      props,
      layoutElements: [layoutElementParser(innerElement)],
      component: 'Box'
    });
  });
  it('recursively parses nested objects', function () {
    const nested = [['companyName', {
      ml: 'xxl'
    }], 'email', ['address', 'profilePhotoLocation']];
    const complicatedElement = [props, nested];
    expect(layoutElementParser(complicatedElement)).to.deep.eq({
      properties: [],
      props,
      layoutElements: nested.map(el => layoutElementParser(el)),
      component: 'Box'
    });
  });
  it('returns layoutElements when array is passed', function () {
    const arrayElements = [['string1', {
      width: 1 / 2
    }], ['string2', {
      width: 1 / 2
    }]];
    expect(layoutElementParser(arrayElements)).to.deep.eq({
      properties: [],
      props: {},
      component: 'Box',
      layoutElements: arrayElements.map(innerElement => layoutElementParser(innerElement))
    });
  });
  it('changes the component when @ is appended', function () {
    const headerProps = {
      children: 'Welcome my boy'
    };
    const componentElements = ['@Header', headerProps];
    expect(layoutElementParser(componentElements)).to.deep.eq({
      properties: [],
      props: headerProps,
      component: 'Header',
      layoutElements: []
    });
  });
});