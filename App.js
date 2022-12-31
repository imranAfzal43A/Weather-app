import { View, Text, ImageBackground } from 'react-native';
import styles from './components/style';
import Input from './components/input';
import Mybutton from './components/button';
import axios from 'axios';
import MyAppBar from './components/appbar';
import { useEffect, useState } from 'react';
import Icon from './components/icons';
import { ActivityIndicator } from 'react-native-paper';
import Card from './components/card';
export default function App() {
  const [city, setCity] = useState('lahore')
  const [temp, setTemp] = useState(null)
  const [tempFeel, setTempfeel] = useState(null)
  const [tmin, setTmin] = useState(null)
  const [tmax, setTmax] = useState(null)
  const [humidity, setHum] = useState(null)
  const [speed, setSpeed] = useState(null)
  const [curentC, setCurntC] = useState(null)
  const [loading, setLoading] = useState(false)
  const getCity = async () => {
    setLoading(true)
    const data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=e07c2117771a5aed45e34279c470839d`);
    setTemp(data.data.main.temp)
    setTempfeel(data.data.main.feels_like)
    setTmin(data.data.main.temp_min)
    setTmax(data.data.main.temp_max)
    setHum(data.data.main.humidity)
    setSpeed(data.data.wind.speed)
    setCurntC(city)
    console.log(data.data)
    setLoading(false)
  }
  useEffect(() => {
    getCity()
  }, [])
  return (
    <>
      <MyAppBar title='My weather' />
      <ImageBackground source={require('./assets/back.jpg')} style={styles.back}>
        <Text style={styles.simpletext}>Current Location :{curentC}</Text>
        <View style={styles.container}>
          <View style={styles.circle}>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }} >{temp}<Icon name='md-thermometer' /></Text>
          </View>
          <Input title='enter city name' onChangeText={(value) => setCity(value)} style={styles.textinput} />
          {!loading ? <Mybutton title='Check weather' style={styles.button} onPress={() => getCity()} /> : <ActivityIndicator />}
          <Card title='Feels like: ' value={tempFeel} icon='md-thermometer' />
          <Card title='Minimum Temprature: ' value={tmin} icon='md-thermometer' />
          <Card title='Maximum Temprature: ' value={tmax} icon='md-thermometer' />
          <Card title='Humidity: ' value={humidity + '% '} />
          <Card title='Wind speed:' value={speed} icon='md-speedometer' />
        </View>
      </ImageBackground>
    </>
  );
}