import run from '../src';
import { Server } from 'http';
import request from 'supertest';

describe('http set', () => {
  let server: Server;
  beforeAll(() => {
    server = run(3000);
  });
  it('GET/admin', () => {
    return request(server)
      .get('/admin')
      .expect(200)
      .then((res) => {
        expect(res.body.length).toEqual(5);
        // expect(res.body).toStrictEqual([1, 2, 3, 4, 5]);
      });
  });
  afterAll(() => {
    server.close();
  });
});
