import React, { useState, useEffect } from 'react';//useEffect추가
// useEffect
function Counter() {
    const [count, setCount] = useState(0)
    const [first, setFirst] = useState(false)
    const countUp =()=>{
        setCount(count+1)
    }
    //count가 변했을때 동작할 행동을 useEffect를 이용해 구현
    //창을 새로고침 했을 때, count가 0이라서 홀수입니다가 alert로 뜨는데, 첫 화면에서 alert가 뜨지 않게 하려면
    // 초기값을 false로 하는 useState를 하나 더 만들어서 첫화면에 alert가 뜨지 않게 한다.
    useEffect(() => {
        if(first){
            if(count%2){
                alert("홀수입니다")
            }else{
                alert("짝수입니다")
            }
        }
        setFirst(true);
    }, [count])

    // const [date, setDate] = useState(new Date());
    // const [hour, setHour] = useState(date.getHours());
    // const [minute, setMinute] = useState(date.getMinutes());
    // const [second, setSecond] = useState(date.getSeconds());
    // const time = `시간: ${hour}시 ${minute}분 ${second}초`
    // useEffect(() => {
    //
    // }, hour, minute, second)
    return(
        <>
            <div>{count}</div>
            <button onClick={countUp}>up!</button>
            {/*<strong>{time}</strong>*/}
        </>
    )
}function Time(props) {
    const [today, setToday] = useState(new Date());
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();

    useEffect(() => {
        let time = setInterval(() => {
            const t = new Date();
            setToday(t);
        }, 1000);
        return () => {
            clearInterval(time);
        };
    }, [today]);

    return (
        <div>
            <h1>
                시간 : {hour}시 {min}분 {sec}초
            </h1>
        </div>
    );
}

function App() {
    return (
        <div>
            <Counter/>
            <Time/>
        </div>
    );
}

export default App;
