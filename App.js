import {Alert, StatusBar, StyleSheet, Text, View} from 'react-native';
import * as Location from "expo-location"
import {useEffect, useState} from "react";
import axios  from "axios";
import Loading from "./Loading";
import Weather from "./Weather";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherNow, setWeatherNow] = useState(null);
  const API_KEY = '5f83862fb9217bbd4982eda55bb5981f';

  const getWeather = async (lat, lon) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
      setWeatherNow(response.data)
      setIsLoading(false)
    } catch (error){
      Alert.alert('I can not determine the weather')
    }
  }
  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
      await getWeather(latitude, longitude)
    } catch (error){
      Alert.alert('I can not determine the location')
    }
  }

  useEffect(() => {
    getLocation();
  }, [])

  return (
      <>
        <StatusBar barStyle={"light-content"}/>
        {isLoading? <Loading/> : <Weather place={weatherNow.name} temp={Math.round(weatherNow.main.temp)} condition={weatherNow.weather[0].main}/>}
      </>
  );
}
