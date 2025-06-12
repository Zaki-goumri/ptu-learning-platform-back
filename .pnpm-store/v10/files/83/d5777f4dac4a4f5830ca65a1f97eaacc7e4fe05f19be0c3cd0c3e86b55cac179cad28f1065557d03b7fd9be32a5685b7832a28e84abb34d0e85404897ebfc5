import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import merge from 'lodash/merge.js';
import i18n from 'i18next';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import createStore from '../../store/store.js';
import RecordAction from './record-action.js';
import ApiClient from '../../utils/api-client.js';
import TestContextProvider from '../spec/test-context-provider.js';
import factory from '../spec/factory.js';
import { __testExports } from '../../../utils/translate-functions.factory.js';
const defaultStore = {
  paths: {}
};
const renderSubject = (store = {}, location) => {
  const path = '/resources/:resourceId/records/:recordId/:actionName';
  const storeWithDefault = merge(defaultStore, store);
  const renderResult = render( /*#__PURE__*/React.createElement(TestContextProvider, {
    location: location
  }, /*#__PURE__*/React.createElement(Provider, {
    store: createStore(storeWithDefault)
  }, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: path,
    element: /*#__PURE__*/React.createElement(RecordAction, null)
  })))));
  return renderResult;
};
describe('<RecordAction />', function () {
  let record;
  beforeEach(async function () {
    record = await factory.build('RecordJSON.total');
    sinon.stub(__testExports, 'createFunctions').returns({
      translateMessage: sinon.stub().returns('someMessage')
    });
    sinon.stub(ApiClient, 'getBaseUrl').returns('/admin');
    sinon.stub(i18n, 'exists').returns(false);
    sinon.stub(ApiClient.prototype, 'recordAction').resolves({
      data: {
        record
      }
    });
  });
  afterEach(function () {
    sinon.restore();
  });
  it('renders 404 when there is no resource', async function () {
    const {
      findByTestId
    } = renderSubject({}, '/resources/someResource/records/1234/show');
    const errorBox = await findByTestId('NoResourceError');
    expect(errorBox).not.to.be.undefined;
  });
});