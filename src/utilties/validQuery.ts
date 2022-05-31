import express from 'express';
const validQuery = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const { filename, width, height } = req.query;
  if (filename !== undefined && width !== undefined && height !== undefined) {
    res.locals.filename = filename;
    res.locals.width = width;
    res.locals.height = height;
    next();
  } else {
    let err: string = '';
    let cnt: number = 0;
    if (filename === undefined) {
      err += 'filename ';
      cnt += 1;
    }
    if (width === undefined) {
      cnt != 0 ? (err += ',width') : (err += 'width ');
      cnt += 1;
    }
    if (height === undefined) {
      cnt != 0 ? (err += ',height') : (err += 'height ');
      cnt += 1;
    }
    res.send((err += cnt >= 2 ? ' are undefined' : ' is undefined'));
  }
};
export default validQuery;
