// Require
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const sweetAlert = require('sweetalert');

// Require toDoListRouter into server
const listRouter = require('./router/listRouter.js')

// Require mongoose
const mongoose = require('mongoose');
const mongoURI = 'mongomongodb://localhost:27017/todolist';

// Attempt to connect to DB
mongoose.connect(mongoURI, { useNewUrlParser: true});
// Log success/Failure in terminal
mongoose.connection.on('open', () => {
    console.log('connected to mongo');
})
mongoose.connection.on('error', (error) => {
    console.log(error);
})

// Configure body-parser for Angular and jQuery
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // Required for Angular

// Static files
app.use(express.static('server/public'));
app.use('/toDoList', listRouter);

// Listen to requests from specific port
app.listen(PORT, () => {
    console.log('listening to port', PORT);

})