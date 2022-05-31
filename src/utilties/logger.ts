import express from 'express';
import path from 'path';
import fs from 'fs';
import resizing from './resizing';

const isFileExist = async (
  req: express.Request,
  res: express.Response
): Promise<boolean> => {
  const { filename } = res.locals;
  const exist = fs.existsSync(
    path.normalize(__dirname + `../../../images/full/${filename}.jpg`)
  );
  if (!exist) {
    res.send(`file ${filename} is not exist to be resized`);
    return false;
  }
  return true;
};
const resize = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const { filename, width, height } = res.locals;
  const w: number = +width; // convert to number
  const h: number = +height;
  if (await isFileExist(req, res)) {
    const exist = fs.existsSync(
      path.normalize(
        __dirname + `../../../images/thumb/${filename}_${width}_${height}.jpg`
      )
    );
    if (exist) {
      res.sendFile(
        path.normalize(
          __dirname + `../../../images/thumb/${filename}_${width}_${height}.jpg`
        )
      );
    } else {
      resizing(filename, w, h, res);
    }
  }
};

export { resize, isFileExist };
