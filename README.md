# weather-react
Learning React-Native by Buliding Weather Mobile App Practice

리엑트에 공부한 내용을 업로드 할 것입니다.
I gonna upload what I studied of React-Native in here.
# -프로젝트 이미지 - Project Images
<div>
    <img width = "250" src="https://user-images.githubusercontent.com/41564888/96101707-b70e6780-0f10-11eb-9e3b-59c60d7cc9c0.JPG">
    <img width = "250" src="https://user-images.githubusercontent.com/41564888/96101869-dd340780-0f10-11eb-9e6e-8fb177c23ec2.JPG">
    <img width = "250" src="https://user-images.githubusercontent.com/41564888/96101897-e58c4280-0f10-11eb-9fb0-e09fa77a5c6f.JPG">
</div>

# -프로젝트 설명

- nomardcoders에서 올려준 강의 내용을 바탕으로 공부하였습니다. 
- url : https://nomadcoders.co/react-native-fundamentals/lobby

총 2가지의 화면으로 구성된 기본적인 날씨 확인 모바일 앱을 개발하였습니다.

APP.js : React 코드를 생성하는 부분을 담당하며 컴포넌트 클래스를 상송받아 
리엑트 컴포넌트 메소드를 활용하여 기능을 구현하였습니다.

주 기능은 getCurrentPositionAsync을 활용하여 지리 정보를 불러오고 
OpenWeatherService API를 Axios 모듈을 활용하여 날씨 데이터를 불러와 이를 렌더링 시키는 역할을 수행합니다.

Loading.js : 단순하게 로딩 화면을 보여주기 위한 파일이며 App.js에서 날씨 정보를 불러오지 못하거나 불러올때 보여지는 화면입니다.

Weather.js : 각 날씨 상태에 따라 rendering 할 화면과 데이터 (이미지, 날씨 정보)등을 구별하여 날씨 정보를 표시하는 화면입니다.

# - React 문법 정리 -
* 리엑트는 컴포넌트 구조 *
    - 모든것이 컴포넌트로 되어있어서 캡슐화,확장성, 결합성, 재사용성 등의 장점이 있다.

* 리엑트는 단방향성 흐름 구조 *
    - 부모에서 자식에게로만 데이터 전달이 가능하다.

- 문법 - 
let - 기존의 var을 대체할 수 있는 키워드이다. 

람다식 함수 사용! 

- var a = function(a, b){ return a+b; } // 기존의 방식
- let a = (a,b) => {return a+b} // 이렇게 사용 가능하다.. 숙지하자
  + let a = (a,b) => return a+b // 이것도 당연히 가능

props와 state는 html 즉 출력에 파생되는 원시 데이터를 구상한다. 

정리하면 화면에서 변경되는 가변적인 값을 나타내는 친구들을 말한다고 볼 수 있다.
동작방식은 APP 실행 -> 서버에 데이터 요청 -> 서버로부터 받은 데이터 state에 저장 -> rendering -> 화면 출력

