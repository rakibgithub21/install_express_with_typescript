"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//parsers
app.use(express_1.default.json());
// router
const userRouter = express_1.default.Router();
app.use('/api/v1/users/', userRouter);
//middleware
const logger = (req, res, next) => {
    console.log('url', req.url, 'method', req.method, 'hostname', req.hostname);
    next();
};
userRouter.get('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'User is created Successfully',
        data: user
    });
});
app.get('/', logger, (req, res, next) => {
    try {
        res.send(responsed);
    }
    catch (err) {
        next(err);
    }
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send({
        status: 200,
        message: 'got data'
    });
});
//global error
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: 'Dur sala mor !'
        });
    }
});
exports.default = app;
