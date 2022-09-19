import { useContext } from "react"
import { Link } from "react-router-dom"
import imgLogo from "../../assets/Logo.svg"
import UserContext from "../../context/UserContext"

export default function Header() {
  const { isLogin } = useContext(UserContext)
  console.log(isLogin)

  return (
    <div>
      <header>
        <div className="max-width">
          <h1>
            <Link to="./">
              <img src={imgLogo} alt="My Blog" />
            </Link>
          </h1>
          <ul>
            {/* 로그인 */}
            <li clasName="profile-img">
              <Link to="#">
                <img src="./assets/profile.jpg" alt="My Page" />
              </Link>
            </li>
            <li>
              <Link to="#" className="button">
                <img src="./assets/icon-modify-white.svg" alt="" />
                <span>Write</span>
              </Link>
            </li>
            <li>
              <button className="button white">
                <img src="./assets/icon-logout.svg" alt="" />
                <span>Logout</span>
              </button>
            </li>
            {/* 로그인 */}

            {/* <!-- 로그아웃 -->
                        <!--
                        <li>
                            <Link to="#" className="button gray">
                                <img src="./assets/icon-login.svg" alt="" />
                                <span>Login</span>
                            </Link>
                        </li>
                        <li className="only-pc">
                            <Link to="#" className="button gray">
                                <img src="./assets/icon-register.svg" alt="" />
                                <span>Register</span>
                            </Link>
                        </li>
          -->
                        <!--// 로그아웃 --> */}
          </ul>
        </div>
      </header>
    </div>
  )
}
