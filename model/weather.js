const mongoose= require('mongoose');

const WeatherSchema= new mongoose.Schema({
    city:{
        type:String,
        required:true,
    },
    humidity:{
        type:Number,
        required:true,
    },
    temprature:{
        type: Number,
        required:true,
       
    }

});
module.exports=mongoose.model('Weather',WeatherSchema);