import express from 'express';
import path from 'path';
import sharp from 'sharp';

const resizing = async (
  filename: string,
  w: number,
  h: number,
  res: express.Response
): Promise<void> => {
  const originalPath = path.normalize(
    __dirname + `../../../images/full/${filename}.jpg`
  );
  try {
    await sharp(originalPath)
      .resize(w, h)
      .toFile(`./images/thumb/${filename}_${w}_${h}.jpg`)
      .then((): void => {
        res.sendFile(
          path.normalize(
            __dirname + `../../../images/thumb/${filename}_${w}_${h}.jpg`
          )
        );
      });
  } catch (err) {
    res.send(
      `the process of resizing is incomplete because of the value of width or height is not compatible`
    );
  }
};
export default resizing;
