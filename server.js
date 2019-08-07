const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const items = require('./routes/api/items');

const app = express();

// Middleware
app.use(bodyparser.json());

// Mongo DB
const db = require('./config/key').mongoURL;
mongoose
.connect(db,{ useNewUrlParser: true })
.then(()=>{
    console.log("Connected to DB");
})
.catch((err)=>console.log(err));

// Routes
app.use('/api/items',items);

// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log('Server started in '+PORT));