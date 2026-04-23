const request = require('supertest');
const server = require('../server');

describe('GET /', () => {
  it('Debe retornar HTML con Hola Mundo', async () => {
    const res = await request(server).get('/');
    
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hola Mundo');
  });
});