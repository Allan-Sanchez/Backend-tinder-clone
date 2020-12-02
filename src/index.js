import express from "express";
import morgan from "morgan";
import Cors from "cors";
import './db';

import card from "./routes/card.router";
//ap config
const app = express();
const port = process.env.PORT || 4000;
//middleware
app.use(morgan('dev'));
app.use(Cors());
app.use(express.json());

//
app.get('/',(req,res) =>{
    res.status(200).send('hello');
});

app.use('/tinder/card',card)

app.listen(port,() =>{
    console.log(`server on port ${port}`);
});
