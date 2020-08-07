import weatherreducer from './weatherReducer';
import {combineReducers} from 'redux';

 const allreducers=combineReducers({
    weather:weatherreducer,
})
export default allreducers;