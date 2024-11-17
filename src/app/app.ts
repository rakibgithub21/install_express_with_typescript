// const express = require('express')
import express, { NextFunction, Request, Response } from 'express';
const app = express()
const port = 3000

//parsers
app.use(express.json())

//middleware
const logger = (req:Request, res:Response, next:NextFunction) => {
    console.log('url',req.url, 'method',req.method, 'hostname',req.hostname);
   next() 
}

app.get('/',logger, (req:Request, res:Response) => {
  res.send('Hello Dev from, another world ! i am using nodemon')
})

app.post('/', (req:Request, res:Response) => {
    console.log(req.body);
    res.send({
        status: 200,
        message:'got data'
    })
})

export default app;