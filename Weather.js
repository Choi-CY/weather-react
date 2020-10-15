import React from "react"
import {View,Text,StyleSheet,StatusBar} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { useKeepAwake } from 'expo-keep-awake';
//props는 properties를 줄인말로 컴포넌트 속성을 설정할 때 사용하는 표현을 말함
// 컴포넌트를 불러와 부모 컴포넌트에서 설정 가능하다.
import PropTypes from "prop-types"
import {MaterialCommunityIcons} from "@expo/vector-icons" // 엑스포의 아이콘 사용방법 


const weatherOptions ={
    Haze: {
        iconName: "weather-hail",
        gradient: ["#373B44","#4286f4"],
        title: "umm...",
        sub_title: "Just Do What you want"
    },
    Thunderstorm: {
        iconName:"weather-lightning",
        gradient:["#4DA0B0","#D39D38"],
        title:"Wow...Don't going out",
        sub_title:"Say again Don't going out"
    },
    Drizzle: {
        iconName:"weather-hail",
        gradient:["#89F7FE","#66A6FF"],
        title:"Fucking Rainy..",
        sub_title:"But this is Fucking Weak"
    },
    Rain: {
        iconName:"weather-rainy",
        gradient:["#00C6FB","#005BEA"],
        title:"Fucking Rainy..",
        sub_title: "Don't forget your Fucking umbrella."
    },
    Snow: {
        iconName:"weather-snowy",
        gradient:["#7DE2FC","#B9B6E5"],
        title:"Talling The Trash",
        sub_title:"Good Luck, soldiers"
    },
    Atmosphere: {
        iconName:"weather-hail",
        gradient:["#89F7FE","#66A6FF"],
        title: "umm...",
        sub_title:"Just Do What you want"
    },
    Clear:{
        iconName:"weather-sunny",
        gradient:["#FEF253","#FF7300"],
        title: "Good Day...",
        sub_title:"Let's go to the Date"
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:["#D7D2CC","#304352"],
        title:"Don't Fucking Forget the umbrella",
        sub_title:"But I'm not sure regardless of rain is come or not"
    },
    Mist: {
        iconName:"weather-hail",
        gradient:["#4DA0B0","#D39D38"],
        title:"Humid Weather",
        sub_title:"If I were you,I wouldn't be out."
    },
    Dust: {
        iconName:"weather-hail",    
        gradient:["#4DA0B0","#D39D38"],
        title: "Dust Day~",
        sub_title: "Please Wearing a Mask"
    }
};
export default function Weather({temp,condition}) {
    useKeepAwake();
    return (
            <LinearGradient
                // Button Linear Gradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
                <StatusBar barStyle="light-content"/> 

                <View style={styles.harf_container}>
                    <MaterialCommunityIcons 
                        name={weatherOptions[condition].iconName || "weather-sunset"} 
                        size={86} 
                        color ="white"/>
                    <Text style={styles.temp}>{temp}°</Text>
                </View>
                <View style={{...styles.harf_container, ...styles.textContainer}}> 
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.sub_title}>{weatherOptions[condition].sub_title}</Text>
                </View>
            </LinearGradient>
    )
}
 // ...styles.### ,...styles.#@@  이렇게 하면 두개의 스타일을 같이 사용 가능하다. es6 방식이라고 함
Weather.prototype = { //객체를 명시하는 기능??  // 함수 랜더링 시 효율적인 방식으로 진행하기 위해서 사용하는거 같음
    //함수 라이프사이클중에서 shouldComponentUpdate라는 함수를 활용해 렌더링할 부분을 제어가능한데
    //이때 prototype을 사용하면 필요한 부분의 객체를 정의하고 해당 부분에 대해서만 렌더링하도록 할 수 있게 한거같음
    temp: PropTypes.number.isRequired, // 랜더링 될 정수 형태의 객체를 정의
    // 열거형(enum)으로 처리하여 prop가 특정 값들로 제한되도록 할 수 있습니다.
    condition: PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Haze","Mist","Dust"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize: 42,
        color: "white"
    },
    harf_container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"

    },
    title:{
        color: "white",
        fontSize: 38,
        fontWeight: "300", // 폰트 굵기 
        marginBottom: 10
    },
    sub_title:{
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start", // 왼쪽으로 정렬
        width:"90%",
    },

})