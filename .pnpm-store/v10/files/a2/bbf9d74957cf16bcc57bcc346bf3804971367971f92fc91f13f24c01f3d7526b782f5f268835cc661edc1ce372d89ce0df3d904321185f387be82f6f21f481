import { expect } from 'chai';
import sinon from 'sinon';
import { BaseRecord, BaseResource } from '../../adapters/index.js';
import { PropertyDecorator, ResourceDecorator } from '../../decorators/index.js';
import { populateProperty } from './populate-property.js';
describe('populateProperty', () => {
  const userId = '1234';
  const path = 'userId';
  let resourceDecorator;
  let referenceResource;
  let record;
  let userRecord;
  let property;
  let populatedResponse;
  beforeEach(() => {
    resourceDecorator = sinon.createStubInstance(ResourceDecorator);
    referenceResource = sinon.createStubInstance(BaseResource);
    record = sinon.createStubInstance(BaseRecord);
    userRecord = sinon.createStubInstance(BaseRecord);
    property = sinon.createStubInstance(PropertyDecorator);
    property.resource.returns(resourceDecorator);
    property.reference.returns(referenceResource);
    property.property = {
      reference: 'someRawReference'
    };
    property.propertyPath = path;
  });
  afterEach(() => {
    sinon.restore();
  });
  it('returns empty array when no records are given', async () => {
    expect(await populateProperty([], property)).to.deep.eq([]);
  });
  context('2 same records with reference key', () => {
    beforeEach(async () => {
      record.get.returns(userId);
      record.selectParams.returns({
        [path]: userId
      });
      userRecord.id.returns(userId);
      referenceResource.findMany.resolves([userRecord]);
      populatedResponse = await populateProperty([record, record], property);
    });
    it('returns 2 records', async () => {
      expect(populatedResponse?.length).to.eq(2);
    });
    it('calls findMany in with the list of userIds just once', () => {
      expect(referenceResource.findMany).to.have.been.calledOnceWith([userId]);
    });
    it('adds reference resource to record.populated', () => {
      const populatedRecord = populatedResponse && populatedResponse[0];
      expect(populatedRecord?.populate).to.have.been.calledWith(path, userRecord);
    });
  });
  context('record with array property being also a reference', () => {
    const [userId1, userId2] = ['user1', 'user2'];
    beforeEach(async () => {
      record.get.returns([userId1, userId2]);
      // resourceDecorator
      userRecord.id.returns(userId);
      property.isArray.returns(true);
      referenceResource.findMany.resolves([userRecord]);
    });
    context('filled array ', () => {
      beforeEach(async () => {
        record.get.returns([userId1, userId2]);
        populatedResponse = await populateProperty([record, record], property);
      });
      it('properly finds references in arrays', async () => {
        expect(referenceResource.findMany).to.have.been.calledOnceWith([userId1, userId2]);
      });
    });
    context('array value set to null', () => {
      beforeEach(async () => {
        record.get.returns(undefined);
        populatedResponse = await populateProperty([record, record], property);
      });
      it('dees not look for any record', () => {
        expect(referenceResource.findMany).not.to.have.been.called;
      });
    });
  });
  context('empty references', () => {
    it('does not findMany for null values', async () => {
      record.get.returns(null);
      populatedResponse = await populateProperty([record], property);
      expect(referenceResource.findMany).not.to.have.been.called;
    });
    it('does not findMany for undefined values', async () => {
      record.get.returns(undefined);
      populatedResponse = await populateProperty([record], property);
      expect(referenceResource.findMany).not.to.have.been.called;
    });
    it('findMany for 0 values', async () => {
      record.get.returns(0);
      populatedResponse = await populateProperty([record], property);
      expect(referenceResource.findMany).to.have.been.called;
    });
    it('does not findMany for "" empty strings', async () => {
      record.get.returns('');
      populatedResponse = await populateProperty([record], property);
      expect(referenceResource.findMany).not.to.have.been.called;
    });
    it('does not findMany for "" empty strings in array', async () => {
      record.get.returns(['']);
      property.isArray.returns(true);
      populatedResponse = await populateProperty([record], property);
      expect(referenceResource.findMany).not.to.have.been.called;
    });
  });
});