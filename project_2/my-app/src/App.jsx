import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserContext from "./context/UserContext";
import BlogDetail from "./pages/BlogDetail/BolgDetail";
import Home from "./pages/Home/Home"
// import data from "./database/data.json"

function App() {
    const [userId, setUserId] = useState(1)
    const [isLogin, setIsLogin] = useState(true)
    // isLogin이 true 면 로그인 상태, false면 로그아웃 상태
    // console.log(data);
    return (
        <UserContext.Provider value={{ userId, isLogin }}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/blog/:id"
                        element={<BlogDetail />}
                    />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>

    );
}

export default App;
