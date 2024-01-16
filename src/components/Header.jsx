import { LOGO_URL } from "./utils/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus.js";

const Header = () => {
  const [login, setlogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          {
            onlineStatus==true?<li style={{color:"green"}}>🟢You are Online</li>:<li style={{color:"red"}}>🔴You are Offline!</li>
          }
          <li><Link to="/">Home</Link></li>
          <li><Link to={"/contact"} >Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li>
            <i className="fa-solid fa-cart-plus" />
          </li>
          <li>
            <button
              className="login"
              onClick={() =>
                login === "Login" ? setlogin("Logout") : setlogin("Login")
              }
            >
              {login}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
