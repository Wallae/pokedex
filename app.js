/* DEPENDENCIES */
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* ROUTERS */
var indexRouter = require('./routes/index');
var listRouter = require('./routes/list');
var favsRouter = require('./routes/favs')

var app = express();

/* SET EJS TEMPLATE */
app.set('view engine', 'ejs');

/*  */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* RENDER PAGES */
app.use('/', indexRouter);
app.use('/list', listRouter);
app.use('/favs', favsRouter);

//Connect to MongoDB
const mongoose = require('mongoose');
mongoose
.connect('mongodb+srv://admin:admin@cluster0.glvj3nn.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err))

module.exports = app;
