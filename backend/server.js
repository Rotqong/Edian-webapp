const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');

require('dotenv').config();

//nodemon
const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());
app.use(session({
    secret : 'keyboard cat',
    cookie : {secure: true}
}));

//mongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connected!");
})

const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.listen(port, () => {
    console.log('Server is online on port ' + port);
});