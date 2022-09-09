import React from "react";
import styled from "styled-components";
// props를 이용한 styled-components
const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
  color: ${(props) => props.name === 'blue' ? 'blue' : 'red'}
`;


const App = () => {
    return (
        <ContentDiv>
            <ContentH2 name={'blue'}>Q&A</ContentH2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
                corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
                aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
                Nemo, ullam.
            </p>
            <Hello/>
        </ContentDiv>
    );
};

function Hello(){
    return <h2>hello world</h2>
}

export default App;
