import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import {useEffect, useState} from "react";


function App() {

    let post = '강남 우동 맛집';
    let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
    let [good, setGood] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [checkNum, setCheckNum] = useState(0);
    let [insert, setInsert] = useState('');
    let today = new Date();
    let [date, setDate] = useState(['2023.10.10.', '2023.10.10.', '2023.10.10.']);


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

        {title.map(function (a, i) {
            return (<>
                <div className={"list"} key={i}>
                    <h4 onClick={() => {

                        setCheckNum(i)
                        i == checkNum ? setModal(!modal) : null
                    }}>{a}
                        <span onClick={(e) => {
                            e.stopPropagation();
                            let newGood = [...good];
                            newGood[i] = good[i] + 1;
                            setGood(newGood)
                        }}>👍</span>{good[i]}</h4>
                    <p>{date[i]}</p>
                    <button onClick={() => {
                        console.log(title[i]);
                        let newTitle = [...title];
                        console.log(newTitle);
                        console.log(newTitle[i]);

                        newTitle.splice(i, 1);
                        setTitle(newTitle);

                        console.log(newTitle);
                        console.log(title);
                    }}> 글 삭제
                    </button>
                </div>
                {modal == true && i == checkNum && <Modal color="orange" title={title} checkNum={checkNum}/>}</>)
        })}

        <input onChange={(e) => {
            setInsert(e.target.value)
            console.log(insert);
        }}/>

        <button onClick={() => {
            insert != '' && setTitle([insert, ...title]), setGood([0, ...good]), setDate([today.toLocaleString(), ...date]);

            /*let copy = [...title];
            copy.unshift(insert);
            setTitle(copy);*/
            console.log(title);
        }}> 발행
        </button>
        <Modal2></Modal2>
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

class Modal2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'kim',
            age: 20
        }
    }
    render(){
        return(
            <div>안녕{this.state.age}
                <button onClick={()=>{
                    this.setState({age: 21})
                }}>버튼</button>
            </div>
        )
    }
}

function Foot() {
    return (<>
        <div>
            푸터입니다.
        </div>
    </>)
}


export default App;