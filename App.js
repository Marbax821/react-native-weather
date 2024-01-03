// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

// api.openweathermap.org/data/2.5/weather?lang=ru&lat=52.22977&lon=21.01178&appid=1c6d01cad259b2c7fcc01721100919bb

const API_KEY = '1c6d01cad259b2c7fcc01721100919bb';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState([]);

  const [tempData, setTempData] = useState([]);

  const getWeather = async (lat, long) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&lat=${lat}&lon=${long}&appid=${API_KEY}`);
    setIsLoading(false);

    console.log(response);

    const { data: { main: { temp }, weather } } = response;
    const wethData = {
      temp: temp,
      condition: weather[0].main
    };
    setWeatherData(wethData);


    // setTempData(temp);
  }

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords: {
        latitude,
        longitude
      } } = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert('Не могу определить местоположение', 'Очень грустно :(*')
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    isLoading ? <Loading /> : <Weather data={weatherData} />
  );
}