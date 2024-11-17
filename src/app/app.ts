// const express = require('express')
import express, { Request, Response } from 'express';
const app = express()
const port = 3000

//parsers
app.use(express.json())


app.get('/', (req:Request, res:Response) => {
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