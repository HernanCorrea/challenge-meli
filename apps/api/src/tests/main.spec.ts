import * as supertest from 'supertest';
import {app, server} from '../main';

const requestWithSupertest = supertest(app);
describe('GET /api/items', () => {
  let res;
  beforeAll(async () => {
    res = await requestWithSupertest.get('/api/items?q=iphone');
  })
  test('Validate status', async () => {
    expect(res.status).toEqual(200);
  });

  // Create test that contains the response body "author, items" property
  test('Validate response body', async () => {
    expect(res.body).toHaveProperty(['author'])
    expect(res.body).toHaveProperty(['items'])
    expect(res.body).toHaveProperty(['categories'])
  });

});

describe('GET /api/items/:id', () => {
  let res;
  beforeAll(async () => {
    res = await requestWithSupertest.get('/api/items/MLA1121545487');
  })
  test('Validate status', async () => {
    expect(res.status).toEqual(200);
  });

  // Create test that contains the response body "author, items" property
  test('Validate response body', async () => {
    expect(res.body).toHaveProperty(['author'])
    expect(res.body).toHaveProperty(['item'])
  });
});

describe('GET On Fail', () => {
  test("Should return error", async () => {
    const res = await requestWithSupertest.get('/api/testing');
    expect(res.status).toEqual(404);
  })
  
  test("Should exist api", async () => {
    const res = await requestWithSupertest.get('/api');
    expect(res.status).toEqual(200);
    expect(res.text).toContain("It works");
  })

})

afterAll(() => {
  server.close();
});