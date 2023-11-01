import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";


function App() {

    let post = '강남 우동 맛집';
    let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
    let [따봉, 변경] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [checkNum, setCheckNum] = useState(0)



    function 함수() {
        console.log(1);
    }

    return (<div className="App">
        <div className={"black-nav"}>
            <h4>ReactBlog</h4>
        </div>
        <button onClick={() => {
            let sort = [...title];
            sort = sort.sort();
            setTitle(sort);
        }}>가나다순 정렬
        </button>

        {/*<div className={"list"}>
            <h4>{title[0]} <span onClick={() => {
                변경(따봉 + 1)
            }}>👍</span>{따봉[0]}</h4>
            <button onClick={() => {
                let copy = [...title];
                copy[0] = '여자 코트 추천';
                b(copy)
            }}>클릭
            </button>
            <p>2월 17일 발행</p>
        </div>


        <div className={"list"}>
            <h4>{title[1]}</h4>
            <p>2월 17일 발행</p>
        </div>
        <div className={"list"}>
            <h4 onClick={
                () => {
                    setModal(!modal)
                }

            }>{title[2]}</h4>
            <p>2월 17일 발행</p>
        </div>*/}

        {title.map(function (a, i) {
            return (<><div className={"list"} key={i}>
                <h4 onClick={() => {

                    setCheckNum(i)
                    i == checkNum ? setModal(!modal) : null
                }}>{a}
                    <span onClick={() => {

                        let up따봉 = [...따봉];
                        up따봉[i] = 따봉[i] + 1;
                        변경(up따봉)
                    }}>👍</span>{따봉[i]}</h4>

                <p>2월 17일 발행</p>
            </div>
            {modal == true &&i==checkNum&& <Modal color="orange" title={title} checkNum={checkNum}/> }</>)
        })}



        <Foot></Foot>

    </div>);
}


function Modal(props) {
    let [action, setAction] = useState(true);
    console.log(props.checkNum)
    return (<>
        <div className={"modal"} style={{background: props.color}}>
            <h4>{action == true ? props.title[props.checkNum] : '여자 코트 추천'}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={() => {
                setAction(!action);
            }}>글수정
            </button>
        </div>
    </>)
}

function Foot() {
    return (<>
        <div>
            푸터입니다.
        </div>
    </>)
}


export default App;
