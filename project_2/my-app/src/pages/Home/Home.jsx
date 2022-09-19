import { useState, useEffect } from "react"
import axios from "axios"
import "./home.css"
import Header from "../../components/header/Header"
import Banner from "../../components/banner/Banner"
import Main from "../../components/main/Main"
import Footer from "../../components/footer/Footer"
const Home = () => {
    const [posts, setPosts] = useState()

    useEffect(() => {
        axios
            .get("http://localhost:3001/posts")
            .then((json) => {
                setPosts(json.data)
            })
    }, [])

    //console.log(posts)

    return (
        <>
            <Header />
            <Banner />
            <Main
                posts={posts}
            />
            <Footer />
        </>
    );
};

export default Home;
