import React from "react";
import Loading from "./Loading"
import Weather from "./Weather"
import * as Location from "expo-location"
import {Alert} from "react-native"
import axios from "axios" // 네트워크 연결이 가능한 모듈
const API_KEY = "2e063e67d621a45645139e1dedc390a3"
// props와 state는 html 즉 출력에 파생되는 원시 데이터를 구상한다. 
// 정리하면 화면에서 변경되는 가변적인 값을 나타내는 친구들을 말한다고 볼 수 있다.
// 동작방식은 APP 실행 -> 서버에 데이터 요청 -> 서버로부터 받은 데이터 state에 저장 -> rendering -> 화면 출력
export default class extends React.Component {
  state = {
    isLoading : true
  }
  getWeather = async(lat,lon)=>{ // OpenWeather Api에서 axios를 통해 지속적으로 데이터를 불러온다.
      const {data:{main:{temp},weather}}= await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      this.setState({ // state를 변경한다.
        isLoading: false,
        temp,
        condition:weather[0].main,
      })
      
  }
  
  getLocation = async()=>{
    try {
      await Location.requestPermissionsAsync();
      const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude)
    }catch (error) {
      Alert.alert("Sorry")
    }
  }
  componentDidMount(){
      this.getLocation();
  }
  render(){
    const {isLoading, temp ,condition} = this.state
      return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>
  }
  
    
}