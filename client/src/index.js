import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import allreducer from "./reducers"
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];
//action
const fetchdata=()=>{
  
return{type:'FETCHDATA'}

}


//Store
const store=createStore(allreducer,composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

//dispatch
store.dispatch(fetchdata())

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
,
  document.getElementById('root')
);
