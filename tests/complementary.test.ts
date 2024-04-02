import request from 'supertest';
import app from '../app';

describe('GET /', () => {
    it('responds with status 200', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

    it('responds with text: "ok"', async () => {
        const response = await request(app).get('/');
        expect(JSON.parse(response.text).status).toBe("ok");
    });
});

describe('HEAD /', () => {
    it('responds with status 204', async () => {
        const response = await request(app).head('/');
        expect(response.status).toBe(200);
    });

    it('responds with correctly headers', async () => {
        const response = await request(app).get('/');
        expect(response.header['content-type']).toBe('application/json; charset=utf-8');
    });
});

describe('OPTIONS /', () => {
    it('responds with status 200', async () => {
        const response = await request(app).options('/');
        expect(response.status).toBe(204);
    });

    it('responds with correctly headers', async () => {
        const response = await request(app).options('/');
        expect(response.header['access-control-allow-methods']).toBe('GET,HEAD,PUT,PATCH,POST,DELETE');
    });
});
