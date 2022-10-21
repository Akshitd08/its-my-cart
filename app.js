const express = require('express');
const dontenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
//body parser
app.use(bodyParser.json());

app.use(cors());
app.get('/', (req,res) =>{
    res.send('Hello');
})


const connectDB = require('./db');
dontenv.config({path: './config.env'})
connectDB();

app.use('/', require('./index'));
PORT = 3000;
app.listen(PORT,() => console.log(`Listening to port ${PORT}`));