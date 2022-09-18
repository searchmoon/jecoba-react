import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom'
import axios from "axios"

const BolgDetail = () => {
    const location = useLocation()
    const postNumber = location.pathname.split('/')[2]

    const [post, setPost] = useState(undefined)
    console.log(postNumber)
    useEffect(() => {
        axios
            .get(`http://localhost:3001/posts/${postNumber}`)
            .then((json) => {
                setPost(json.data)
            })
            .catch((e) => {
                setPost(undefined)
            })
    }, [])
    // console.log(post)
    return (
        <div>
            {post === undefined ?
                <div>로딩중..</div> : post === null ?
                    <div>404</div> : <div>{post.title}</div>}
        </div>
    );
};

export default BolgDetail;
