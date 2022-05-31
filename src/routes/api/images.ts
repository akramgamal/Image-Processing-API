import express from 'express';
import { resize } from '../../utilties/logger';

import validQuery from '../../utilties/validQuery';
const images = express.Router();

images.get('/', validQuery, resize);
export default images;
