import supertest from 'supertest';
import app from '..';
const request = supertest(app);
describe('Test the main api endpoint response', (): void => {
  it('get the main api', async (): Promise<void> => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});
