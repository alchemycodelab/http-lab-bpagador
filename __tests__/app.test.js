const request = require('supertest');
const app = require('../lib/app');

describe('handle request routes ', () => {
  it('shows plain text', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hello');
      });
  });

  it('shows echo', () => {
    return request(app)
      .post('/echo')
      .send('hello')
      .then(res => {
        expect(res.text).toEqual('hello');
      });
  });
//   it('');
});
