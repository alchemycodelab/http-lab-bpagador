const request = require('supertest');
const app = require('../lib/app');

describe('handle request routes ', () => {
  it('shows plain text reading hello', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hello');
      });
  });
});
