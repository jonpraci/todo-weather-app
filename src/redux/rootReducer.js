// src/redux/rootReducer.js
import { combineReducers } from 'redux';
import todosSlice from './todos';
import weatherSlice from './weather';

const rootReducer = combineReducers({
  todos: todosSlice,
  weatherData:weatherSlice
});

export default rootReducer;
