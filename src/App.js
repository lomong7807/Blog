/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {

    let post = '강남 우동 맛집';
    let [title, b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
    let [따봉, 변경] = useState(0);

    function 함수() {
        console.log(1);
    }

    return (<div className="App">
        <div className={"black-nav"}>
            <h4>ReactBlog</h4>
        </div>
        <div className={"list"}>
            <h4>{title[0]} <span onClick={() => {
                변경(따봉 + 1)
            }}>👍</span>{따봉}asaasdasdsdd</h4>
            <button onClick={() => {
                b(['여자 코트 추천',title[1],title[2]])
            }}>클릭
            </button>
            <p>2월 17일 발행</p>
        </div>


        <div className={"list"}>
            <h4>{title[1]}</h4>
            <p>2월 17일 발행1515</p>
        </div>
        <div className={"list"}>
            <h4>{title[2]}</h4>
            <p>2월 17일 발행</p>
        </div>
    </div>);
}


export default App;
