import { useState } from "react";

function App() {
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        //event preventDefault는 이벤트의 기본 동작을 방지하는 메서드이다.
        console.log("submit");
    };

    const handleLoginInput = (e) => {
        console.log("id", e.target.value);
    };

    const handlePasswordInput = (e) => {
        console.log("pw", e.target.value);
    };

    return (
        <form onSubmit={handleLoginSubmit}>
            <label>
                아이디 : <input type="text" onChange={handleLoginInput} />
            </label>
            <br />
            <label>
                비밀번호 :
                <input type="password" onChange={handlePasswordInput} />
            </label>
            <button type="submit">로그인</button>
        </form>
    );
}

export default App;