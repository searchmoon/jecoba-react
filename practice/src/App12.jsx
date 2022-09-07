import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
//App11 변형. route 사용하여 페이지 경로 만들어보기

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products/:id" element={<Products />} />
                <Route path="/users/*" element={<Outlet />}>
                    <Route path="" element={<Users />} />
                    <Route path="coupon/" element={<UsersCoupon />} />
                    <Route path="question/" element={<UsersQuestion />} />
                    <Route path="notice/" element={<UsersNotice />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function Homepage() {
    return <h1>home이란다</h1>
}

function Products() {
    return <h1>products</h1>
}
function Users() {
    return <h1>users</h1>
}
function UsersQuestion() {
    return <h1>users question</h1>
}
function UsersCoupon() {
    return <h1>users coupon</h1>
}
function UsersNotice() {
    return <h1>users notice</h1>
}
export default App;