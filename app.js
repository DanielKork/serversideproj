//Daniel Korkus 314629692
//Tamir Razon 207421322


// Import required modules
const mongoose = require("mongoose");
const express = require("express");
const serverless = require("serverless-http");
const path = require('path');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

// Create Express app
const app = express();

// Configure MongoDB connection
const config ={
  autoIndex:true,
}
mongoose.connect(process.env.DATABASE,config)  
    .then(() => {
      console.log("DB CONNECTED");
    }).catch(() => {
      console.log("UNABLE to connect to DB");
    });


// Middleware setup    
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.set('views', path.join(__dirname, 'views'));  //pug
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));  //css


// Import routers
//ar indexRouter = require('./routes/index');
//var caloriespageRouter = require('./routes/addcaloriespage');
var caloriesRouter = require('./routes/addcalories');
var reportRouter = require('./routes/report');
var aboutRouter = require('./routes/about');


// Define routes
//app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/register',registerRouter);
//app.use('/addcaloriespage',caloriespageRouter);
app.use('/addcalories',caloriesRouter);
app.use('/report',reportRouter);
app.use('/about',aboutRouter);


// Define port
const port =process.env.PORT || 3000;


// Start the server
app.listen(port,() => {
  console.log(`App is runnig at ${port}`);
})


// Export the Express app
module.exports = app;
