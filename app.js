const mongoose = require("mongoose");
const express = require("express");
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

var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');

app.use('/', indexRouter);
app.use('/users', usersRouter);

const port =process.env.PORT || 3000;

app.listen(port,() => {
  console.log(`App is runnig at ${port}`);
  console.log("MongoDB Connection String:", process.env.DATABASE);
})

module.exports = app;
