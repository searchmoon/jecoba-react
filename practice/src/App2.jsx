// mouse 이벤트. console 창 확인

function App() {
    const handleOnMouseEnter = () => {
        console.log("안녕하세요!");
    };

    const handleOnMouseLeave = () => {
        console.log("안녕히가세요!");
    };

    return (
        <div>
            <p
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            >
                여기에 마우스를 올려보세요!
            </p>
        </div>
    );
}

export default App;