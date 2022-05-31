import supertest from 'supertest';
import app from '../..';
import fs from 'fs';
import path from 'path';
const request = supertest(app);

describe('Test the images endpoint response', (): void => {
  it('get tha api images with width and height', async (): Promise<void> => {
    const response = await request.get(
      '/api/images?filename=encenadaport&width=200&height=200'
    );
    fs.unlinkSync(
      path.normalize(
        __dirname + `../../../../images/thumb/encenadaport_200_200.jpg`
      )
    );
    expect(response.status).toBe(200);
  });
});
