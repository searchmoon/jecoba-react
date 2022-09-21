import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from "react"
import UserContext from "../../../context/UserContext"
import "./about.css"
import imgFacebook from "../../../assets/Facebook.svg"
import imgTwitter from "../../../assets/Twitter.svg"
import imgInstagram from "../../../assets/Instagram.svg"
import imgGitHub from "../../../assets/Github.svg"
import axios from "axios"

export default function About() {
    const { userId } = useContext(UserContext)
    const [userData, setUserData] = useState()

    useEffect(() => {
        axios
            .get(`http://localhost:3001/users/${userId}`)
            .then((json) => {
                setUserData(json.data)
            })
    }, [])

    console.log(userData)
    return (
        <aside className="about">
					<h2>About Me</h2>
					<img src="./images/profile.jpg" alt="" className="user-profile" />
					<p className="user-name">Chilli</p>
					<p className="user-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<h3>Categories</h3>
					<ul className="categories">
						<li><Link to="/">Life</Link></li>
						<li><Link to="/">Style</Link></li>
						<li><Link to="/">Tech</Link></li>
						<li><Link to="/">Sport</Link></li>
						<li><Link to="/">Photo</Link></li>
						<li><Link to="/">Develop</Link></li>
						<li><Link to="/">Music</Link></li>
					</ul>
					<h3>Follow</h3>
					<ul className="sns">
						<li>
							<Link to="/">
								<img src={imgFacebook} alt="Facebook" />
							</Link>
						</li>
						<li>
							<Link to="/">
								<img src={imgTwitter} alt="Twitter" />
							</Link>
						</li>
						<li>
							<Link to="/">
								<img src={imgInstagram} alt="Instagram" />
							</Link>
						</li>
						<li>
							<Link to="/">
								<img src={imgGitHub} alt="GitHub" />
							</Link>
						</li>
					</ul>
				</aside>
    )
}
