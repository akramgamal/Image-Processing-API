"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = require("../../utilties/logger");
var validQuery_1 = __importDefault(require("../../utilties/validQuery"));
var images = express_1.default.Router();
images.get('/', validQuery_1.default, logger_1.resize);
exports.default = images;
