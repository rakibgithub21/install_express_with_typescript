"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//parsers
app.use(express_1.default.json());
//middleware
const logger = (req, res, next) => {
    console.log('url', req.url, 'method', req.method, 'hostname', req.hostname);
    next();
};
app.get('/', logger, (req, res) => {
    res.send('Hello Dev from, another world ! i am using nodemon');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send({
        status: 200,
        message: 'got data'
    });
});
exports.default = app;
