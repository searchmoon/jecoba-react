import React from "react";
import styled from "styled-components";
//styled()를 이용한 확장 문법. 가로 안에 스타일을 덮어씌워주기

const ContentOne = styled.div`
    margin: 40px;
`;

const ContentTwo = styled.div`
    color:red;
`;

const ContentThree = styled(ContentTwo)`
    border: 1px solid black;
`

function App() {
    return (
        <div>
            <ContentOne>hello world</ContentOne>
            <ContentTwo>hello world</ContentTwo>
            <ContentThree>hello world</ContentThree>
        </div>
    );
}

export default App;
