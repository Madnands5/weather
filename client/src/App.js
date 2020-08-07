import React,{ useEffect } from 'react'
import {useSelector,useDispatch } from 'react-redux'
import axios from 'axios';
import './App.css';
import {fetchPosts} from './actions/weatheractions'
export default function App() {
  const weather= useSelector(state => state.weather)

  const dispatch = useDispatch();

 
useEffect(() => {
    dispatch(fetchPosts());
  }, [])

if(weather.status===1){
//save function
  const save= async (city,humidity,temprature)=>{
    let params ={
       "city":city,
       "humidity": humidity,
       "temprature": temprature
     }
   let res = await axios.post('http://localhost:5000/api/save', params)
   alert(res.data);
 }


  return (
    <div className="App-header" >

     <h1>City:{weather.city}</h1>
     <br/>
     <h5>Humidity:{weather.humidity}(RH)</h5>
     <h5>tempreture:{weather.temprature}°c</h5>
     
     <button className="btn btn-outline-light btn-lg" onClick={function(){save(weather.city ,weather.humidity,weather.temprature)}}>Save</button>
    </div>
  )
}
else{
  return (
    <div className="App-header" >

    <h1>{weather.message} </h1>
    </div>
  )
}
}
