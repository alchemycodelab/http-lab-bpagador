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
  it('shows text for the color red', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>red</h1>');
      }); 
  });
  it('shows text for the color green', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1>green</h1>');
      }); 
  });
  it('shows text for the color blue', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<h1>blue</h1>');
      }); 
  });
});
