//Daniel Korkus 314629692
//Tamir Razon 207421322



const mongoose = require("mongoose");
const express = require("express");
const serverless = require("serverless-http");
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const config ={
  autoIndex:true,
}
mongoose.connect(process.env.DATABASE,config)  //mongoDB connection
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
app.use(express.static(path.join(__dirname, 'public')));  //css


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var caloriespageRouter = require('./routes/addcaloriespage');
var caloriesRouter = require('./routes/addcalories');
var reportRouter = require('./routes/report');
var aboutRouter = require('./routes/about');
//var cssRouter = require('./styles/app.css');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register',registerRouter);
app.use('/addcaloriespage',caloriespageRouter);
app.use('/addcalories',caloriesRouter);
app.use('/report',reportRouter);
app.use('/about',aboutRouter);
//app.use('/styles/app.css',cssRouter);


const port =process.env.PORT || 3000;

app.listen(port,() => {
  console.log(`App is runnig at ${port}`);
})

module.exports = app;
