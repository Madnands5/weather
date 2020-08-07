const express= require("express");
const app=express();
const weather=require('./routes/weather');

const mongoose= require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');

mongoose.set('useFindAndModify', false);
dotenv.config();

mongoose.connect(process.env.db_con,{ useNewUrlParser: true , useUnifiedTopology: true},()=>
    console.log("connected to db"));

mongoose.connection.on('error', function(err){
    console.log("Mongoose default connection has occured "+err+" error");
});

mongoose.connection.on('disconnected', function(){
    console.log("Mongoose default connection is disconnected");
});

//middleware
app.use(express.json()); 
var allowedOrigins = ['http://localhost:3000',
                      'http://yourapp.com'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }}));
app.all('*', cors());
app.use('/api/',weather)
PORT=process.env.PORT
app.listen(PORT,() => console.log("server:http://localhost:5000/"));