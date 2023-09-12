// weatherService.js
import axios from 'axios';

const API_KEY = 'f6dba8d54afedcf09a04628305de9c14'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
