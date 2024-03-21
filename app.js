const mongoose = require("mongoose");
const express = require("express");
const path = require('path');
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const config ={
  autoIndex:true,
}
mongoose.connect(process.env.DATABASE,config)
    .then(() => {
      console.log("DB CONNECTED");
    }).catch(() => {
      console.log("UNABLE to connect to DB");
    });

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var caloriesRouter = require('./routes/addcaloriespage');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register',registerRouter);
app.use('/addcaloriespage',caloriesRouter);

const port =process.env.PORT || 3000;

app.listen(port,() => {
  console.log(`App is runnig at ${port}`);
  //console.log("MongoDB Connection String:", process.env.DATABASE);
})

module.exports = app;
