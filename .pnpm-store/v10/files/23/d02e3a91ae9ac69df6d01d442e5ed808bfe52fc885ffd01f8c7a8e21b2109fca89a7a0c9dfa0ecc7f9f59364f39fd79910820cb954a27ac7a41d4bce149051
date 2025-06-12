/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { expect } from 'chai';
import sinon from 'sinon';
import ActionDecorator from './action-decorator.js';
import AdminJS from '../../../adminjs.js';
import BaseResource from '../../adapters/resource/base-resource.js';
import ForbiddenError from '../../utils/errors/forbidden-error.js';
import ValidationError from '../../utils/errors/validation-error.js';
describe('ActionDecorator', function () {
  const request = {
    response: true
  };
  let admin;
  let resource;
  let context;
  let action;
  let handler;
  beforeEach(function () {
    admin = sinon.createStubInstance(AdminJS);
    resource = sinon.createStubInstance(BaseResource);
    action = {
      name: 'myAction'
    };
    context = {
      resource,
      _admin: admin,
      action
    };
    handler = sinon.stub();
  });
  afterEach(function () {
    sinon.restore();
  });
  describe('#before', function () {
    it('calls all functions if they were given as an array', async function () {
      // 3 hooks one adding response1 key and the other adding response2 key
      // and finally one async adding response3
      const before = [() => ({
        response1: true
      }), response => ({
        ...response,
        response2: true
      }), async response => ({
        ...response,
        response3: true
      })];
      const decorator = new ActionDecorator({
        action: {
          before,
          handler,
          name: 'myAction',
          actionType: 'resource'
        },
        admin,
        resource
      });
      const ret = await decorator.invokeBeforeHook({}, {});
      expect(ret).to.deep.eq({
        response1: true,
        response2: true,
        response3: true
      });
    });
  });
  describe('#after', function () {
    it('calls all functions if they were given as an array', async function () {
      // 2 hooks one adding response1 key and the other adding response2 key
      const after = [() => ({
        response1: true
      }), response => ({
        ...response,
        response2: true
      }), async response => ({
        ...response,
        response3: true
      })];
      const decorator = new ActionDecorator({
        action: {
          after,
          handler,
          name: 'myAction',
          actionType: 'resource'
        },
        admin,
        resource
      });
      const ret = await decorator.invokeAfterHook({}, {}, {});
      expect(ret).to.deep.eq({
        response1: true,
        response2: true,
        response3: true
      });
    });
  });
  describe('#handler', function () {
    it('calls the before action when it is given', async function () {
      const mockedRequest = {
        response: true
      };
      const before = sinon.stub().returns(mockedRequest);
      const decorator = new ActionDecorator({
        action: {
          before,
          handler,
          name: 'myAction',
          actionType: 'resource'
        },
        admin,
        resource
      });
      await decorator.handler(request, 'res', context);
      expect(before).to.have.been.calledWith(request);
      expect(handler).to.have.been.calledWith(sinon.match(mockedRequest));
    });
    it('calls the after action when it is given', async function () {
      const modifiedData = {
        records: false
      };
      const data = {};
      const after = sinon.stub().returns(modifiedData);
      handler = handler.resolves(data);
      const decorator = new ActionDecorator({
        action: {
          name: 'myAction',
          handler,
          after,
          actionType: 'resource'
        },
        admin,
        resource
      });
      const ret = await decorator.handler(request, 'res', context);
      expect(ret).to.equal(modifiedData);
      expect(handler).to.have.been.called;
      expect(after).to.have.been.calledWith(data);
    });
    it('returns forbidden error when its thrown', async function () {
      const errorMessage = 'you cannot edit this resource';
      const before = sinon.stub().throws(new ForbiddenError(errorMessage));
      const decorator = new ActionDecorator({
        action: {
          before,
          handler,
          name: 'myAction',
          actionType: 'record'
        },
        admin,
        resource
      });
      const ret = await decorator.handler(request, 'res', context);
      expect(before).to.have.been.calledWith(request);
      expect(ret).to.have.property('notice');
      expect(ret.notice).to.deep.equal({
        message: errorMessage,
        type: 'error'
      });
      expect(handler).not.to.have.been.called;
    });
    it('returns record with validation errors when they are thrown', async function () {
      const errors = {
        email: {
          message: 'Wrong email',
          type: 'notGood'
        }
      };
      const notice = {
        message: 'There are validation errors',
        type: 'validationError'
      };
      const before = sinon.stub().throws(new ValidationError(errors, notice));
      const decorator = new ActionDecorator({
        action: {
          before,
          handler,
          name: 'myAction',
          actionType: 'record'
        },
        admin,
        resource
      });
      const ret = await decorator.handler(request, 'res', context);
      expect(before).to.have.been.calledWith(request);
      expect(ret).to.have.property('notice');
      expect(ret.notice).to.deep.equal({
        message: notice.message,
        type: 'error'
      });
      expect(ret).to.have.property('record');
      expect(ret.record).to.have.property('errors');
      expect(ret.record.errors).to.deep.equal(errors);
      expect(handler).not.to.have.been.called;
    });
  });
});