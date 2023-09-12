// store.js
import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './redux/todos';
import weatherSlice from './redux/weather';

const store = configureStore({
  reducer: {
    todos: todosSlice,
    weatherData: weatherSlice,
  },
});

export default store;
