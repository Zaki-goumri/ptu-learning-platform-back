import { expect } from 'chai';
import requestParser from './request-parser.js';
const buildResourceWithProperty = (key, property) => {
  const resource = {
    _decorated: {
      getPropertyByKey: path => key === path ? property : null
    }
  };
  return resource;
};
let resource;
describe('RequestParser', function () {
  const baseRequest = {
    params: {
      resourceId: 'resourceId',
      action: 'edit'
    },
    method: 'post',
    payload: {}
  };
  describe('boolean values', function () {
    beforeEach(function () {
      resource = buildResourceWithProperty('isHired', {
        type: () => 'boolean'
      });
    });
    it('sets value to `false` when empty string is given', function () {
      const request = {
        ...baseRequest,
        payload: {
          isHired: ''
        }
      };
      expect(requestParser(request, resource).payload?.isHired).to.be.false;
    });
    it('changes "true" string to true', function () {
      const request = {
        ...baseRequest,
        payload: {
          isHired: 'true'
        }
      };
      expect(requestParser(request, resource).payload?.isHired).to.be.true;
    });
    it('changes "false" string to true', function () {
      const request = {
        ...baseRequest,
        payload: {
          isHired: 'false'
        }
      };
      expect(requestParser(request, resource).payload?.isHired).to.be.false;
    });
  });
});