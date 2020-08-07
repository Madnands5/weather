const initialstate={
    city:"Pune",
    humidity:0,
    temprature:0,
    status:0,
    message:""
  }
const weatherreducer=(state=initialstate,action)=>{
    switch(action.type){
      case "FETCHDATA":

        return{
          ...state,
          
          city: action.city,
          humidity:action.humidity,
          temprature:action.temprature,
          status:action.status,
          message:action.message
          };
      case "FETCHFAIL":

        return{
          ...state,
        
          message:action.message,
          status:0,
          };   
      
      default:
        return state;
  
    }
  }
  export default weatherreducer;