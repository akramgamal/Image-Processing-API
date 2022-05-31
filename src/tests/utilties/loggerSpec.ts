import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

describe('Test if the file exist', (): void => {
  const filename = 'encenadaport';
  it('get the file ', (): void => {
    const exist = fs.existsSync(
      path.normalize(__dirname + `../../../../images/full/${filename}.jpg`)
    );
    expect(exist).toEqual(true);
  });
});

describe('Test the resize process', (): void => {
  it('handling the resize error', (): void => {
    function resize(): void {
      try {
        sharp(
          path.normalize(__dirname + `../../../../images/full/encenadaport.jpg`)
        ).resize(400, 300); // throw error when the vale of width and height is not compatible
      } catch (err) {
        throw new Error();
      }
    }
    expect(function (): void {
      resize();
    }).not.toThrow();
  });
  it('the resize process completed', async (): Promise<void> => {
    const filePath = path.normalize(
      __dirname + `../../../../images/thumb/icelandwaterfall_200_200.jpg`
    );
    const exist = fs.existsSync(filePath);
    if (exist) {
      fs.unlinkSync(filePath);
    }
    await sharp(
      path.normalize(__dirname + `../../../../images/full/icelandwaterfall.jpg`)
    )
      .resize(200, 200)
      .toFile(filePath)
      .then((): void => {
        expect(fs.existsSync(filePath)).toEqual(true);
      });
  });
});
