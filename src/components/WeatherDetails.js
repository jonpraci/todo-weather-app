// src/components/WeatherDetails.js
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { fetchWeather } from '../services/weatherService';
import  {setWeather}  from '../redux/weather';
import { useSelector, useDispatch } from 'react-redux';
import { getUserLocation } from '../utils/locationUtils'; // Import the utility function

const WeatherDetails = () => {
    const [location, setLocation] = useState(null)

    const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData);

  useEffect(() => {
    getUserLocation()
      .then((userLocation) => {
        setLocation(userLocation);
        const { latitude, longitude } = userLocation;
        console.log(latitude, longitude);
        return fetchWeather(latitude, longitude);
      })
      .then((weather) => {
        dispatch(setWeather(weather));
      })
      .catch((error) => {
        console.error('Error:', error);
        setLocation(null);
      });
  }, [dispatch]);

  return (
    <Card>
      <CardContent className='title'>
        <Typography variant="h5" component="div">
          Weather Details
        </Typography>
        {weatherData && (
          <div > 
            <Typography variant="body1">
                Country: {weatherData.sys.country}
            </Typography>
            <Typography variant="body1">
              Today's Weather: {weatherData.weather[0].description}
            </Typography>
            <Typography variant="body1">
              Temperature max: {weatherData.main.temp_max} °C
            </Typography>
            <Typography variant="body1">
              Temperature min: {weatherData.main.temp_min} °C
            </Typography>

            <Typography variant="h6">Next 5 Days:</Typography>
              <div>
                <Typography variant="body2">
                  Date: {new Date(weatherData.dt * 1000).toLocaleDateString()}
                </Typography>
                <Typography variant="body2">
                  Weather: {weatherData.weather[0].description}
                </Typography>
                <Typography variant="body2">
                  Temperature: {weatherData.main.temp} °C
                </Typography>
              </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WeatherDetails;
