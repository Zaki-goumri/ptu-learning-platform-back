function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { render } from '@testing-library/react';
import sinon from 'sinon';
import { expect } from 'chai';
import { factory } from 'factory-girl';
import { Provider } from 'react-redux';
import { RecordsTable } from './records-table.js';
import TestContextProvider from '../../spec/test-context-provider.js';
import createStore from '../../../store/store.js';
import '../../spec/resource-json.factory.js';
import '../../spec/record-json.factory.js';
import '../../spec/property-json.factory.js';
const renderSubject = props => {
  const onSelect = sinon.stub();
  const onSelectAll = sinon.stub();
  const renderResult = render( /*#__PURE__*/React.createElement(TestContextProvider, null, /*#__PURE__*/React.createElement(Provider, {
    store: createStore({})
  }, /*#__PURE__*/React.createElement(RecordsTable, _extends({}, props, {
    onSelect: onSelect,
    onSelectAll: onSelectAll
  })))));
  return {
    ...renderResult,
    onSelect,
    onSelectAll
  };
};
describe('<RecordsTable />', function () {
  let properties;
  let resource;
  let records;
  let container;
  beforeEach(async function () {
    const name = await factory.build('PropertyJSON', {
      path: 'path',
      isTitle: true
    });
    properties = [await factory.build('PropertyJSON', {
      path: 'id',
      isId: true
    }), name, await factory.build('PropertyJSON', {
      path: 'surname'
    })];
    resource = await factory.build('ResourceJSON', {
      listProperties: properties,
      titleProperty: name
    });
  });
  afterEach(function () {
    sinon.restore();
  });
  context('10 records are given without bulk and list actions', function () {
    beforeEach(async function () {
      records = await factory.buildMany('RecordJSON', 10, {
        params: {
          id: factory.sequence('record.id'),
          name: factory.sequence('record.name', n => `name ${n}`),
          surname: factory.sequence('record.surname', n => `surname ${n}`)
        }
      });
      ({
        container
      } = renderSubject({
        resource,
        records,
        selectedRecords: []
      }));
    });
    it('renders each record as a separate <tr> tag', function () {
      expect(container.querySelectorAll('tbody > tr')).to.have.lengthOf(10);
    });
    it('does not render any link in the record rows', function () {
      expect(container.querySelectorAll('tbody > tr a')).to.have.lengthOf(0);
    });
    it('does not render checkbox for selecting particular record', function () {
      expect(container.querySelectorAll('tbody > tr input')).to.have.lengthOf(0);
    });
  });
  context('10 records are given with bulk delete and show actions', function () {
    beforeEach(async function () {
      records = await factory.buildMany('RecordJSON', 10, {
        params: {
          id: factory.sequence('record.id'),
          name: factory.sequence('record.name', n => `name ${n}`),
          surname: factory.sequence('record.surname', n => `surname ${n}`)
        },
        recordActions: [await factory.build('ActionJSON', {
          name: 'show',
          actionType: 'record'
        })],
        bulkActions: [await factory.build('ActionJSON', {
          name: 'bulkDelete',
          actionType: 'bulk'
        })]
      });
      ({
        container
      } = renderSubject({
        resource,
        records,
        selectedRecords: []
      }));
    });
    it('renders input checkbox for selecting many records', function () {
      expect(container.querySelectorAll('tbody td:first-child input')).to.have.lengthOf(10);
    });
  });
});