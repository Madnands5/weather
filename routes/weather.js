const router= require("express").Router();
const Weather=require('../model/weather');
const dotenv=require('dotenv');
const fetch = require('node-fetch');
const cors=require('cors');
dotenv.config();
const test_prime= n =>
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}


router.route('/all').get(async(req,res) => {
    try {
        var d = new Date();
        var n = d.getDay();
      
        if(test_prime(n)){
          const url = process.env.url+"&appid="+process.env.weatherapp_id+"&units=metric";
         
          fetch(url)
          .then(res => res.json())
          .then(data => {
            
            res.send({"weatherdata":data,"status":1} );
          }).catch(e=>{
          console.log(e);
          })
        }
        else{
          res.send({"weatherdata":"Date is not prime so no weather details","status":0} );
        }
    }
    catch (err) { 
        res.send(err.details[0].message)
    }
    
    
});

router.post('/save',async(req,res)=>{
   
  const weather=new Weather({
    city: req.body.city,
    humidity:req.body.humidity,
    temprature: req.body.temprature
  });

  const weatherdata =  weather.save();
  res.send("saved");
})

module.exports=router;