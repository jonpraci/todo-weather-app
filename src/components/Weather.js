import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { fetchWeather } from '../services/weatherService';
import { setWeather } from '../redux/weather';
import { getUserLocation } from '../utils/locationUtils'; // Import the utility function

const Weather = () => {
    const [loading, setLoading] = useState(true);
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
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setLocation({ message: `If you wanna see your weather Data Kindly allow your device location and refresh again`, error });
            });
    }, [dispatch]);

    return (
        <Card style={{ textAlign: 'center' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Current Weather
                </Typography>

                {loading && <div>Loading...</div>}
                {location != null && location.error && <div>
                    <b style={{ color: '#ff8585' }}>
                        {location.error.message}<br />
                    </b>
                    <b style={{ color: '#aaa' }}>
                        {location.message}

                    </b>
                </div>}
                {weatherData && (
                    <div>
                        <Typography variant="body1">
                            Location: {weatherData.name}, {weatherData.sys.country}
                        </Typography>
                        <Typography variant="body1">
                            Weather: {weatherData.weather[0].description}
                        </Typography>
                        <Typography variant="body1">
                            Temperature: {weatherData.main.temp} °C
                        </Typography>
                        <Link to='/weather-details'>
                            <Button variant="contained">
                                View Details
                            </Button>
                        </Link>
                    </div>
                )}
            </CardContent>

        </Card>
    );
};

export default Weather;
