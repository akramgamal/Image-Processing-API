"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validQuery = function (req, res, next) {
    var _a = req.query, filename = _a.filename, width = _a.width, height = _a.height;
    if (filename !== undefined && width !== undefined && height !== undefined) {
        res.locals.filename = filename;
        res.locals.width = width;
        res.locals.height = height;
        next();
    }
    else {
        var err = '';
        var cnt = 0;
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
exports.default = validQuery;
