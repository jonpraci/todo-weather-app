import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import ToDoList from './components/ToDoList';
import WeatherDetails from './components/WeatherDetails';

function App() {
  return (
    <Router>
      <Container>
        <h1 className='title'>To-Do App</h1>
        <Routes>
          <Route path="/" exact element={<ToDoList />} />
          <Route path="/weather-details" exact element={<WeatherDetails />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
