import { NextFunction } from './../../node_modules/@types/express-serve-static-core/index.d';


// const express = require('express')
import { error } from 'console';
import express, { NextFunction, Request, response, Response } from 'express';
const app = express()
const port = 3000

//parsers
app.use(express.json())





// router
const userRouter = express.Router()


app.use('/api/v1/users/', userRouter)
//middleware
const logger = (req:Request, res:Response, next:NextFunction) => {
    console.log('url',req.url, 'method',req.method, 'hostname',req.hostname);
   next() 
}

userRouter.get('/create-user', (req: Request, res: Response) => {
    const user = req.body
    console.log(user);
    res.json({
        success: true,
        message: 'User is created Successfully',
        data:user
    })
})

app.get('/',logger, (req:Request, res:Response,next:NextFunction) => {
    try {
     res.send(responsed)
    } catch (err) {
        next(err)
 }
})

app.post('/', (req:Request, res:Response) => {
    console.log(req.body);
    res.send({
        status: 200,
        message:'got data'
    })
})


//global error
app.use((error:any, req:Request, res:Response, next:NextFunction) => {
    if (error) {
        res.status(400).json({
            success: false,
            message:'Dur sala mor !'
       })
   }
})
export default app;