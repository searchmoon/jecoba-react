
//key 값은 일반적으로 배열의 id 값을 넣어줍니다. 
//고유의 값을 찾을 수 없다면 인덱스를 key로 사용하면 되지만 나중에 순서와 관련된 문제가 발생할 수 있기 때문에 권장하지 않습니다.

function App() {
    return (
        <Hello name="licat" />
    );
}

function Hello(props) {
    const name = props.name;
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
    const numComponentsArray = num.map((i) => (
        <h1 key={i.toString()}>
            {console.log(i.toString())}
            안녕, {name} {i}호
        </h1>
    ));
    return (
        <div>
            {numComponentsArray}
        </div>
    )
}

export default App;