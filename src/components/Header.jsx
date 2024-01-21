import { LOGO_URL } from "./utils/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus.js";


const Header = () => {
  const [login, setlogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex justify-between bg-pink-100 sm:bg-gray-200 lg:bg-green-100  shadow-lg items-center">
      <div className="logo">
        <img className="w-44" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex text-black font-bold text-xl">
          {
            onlineStatus==true?<li style={{color:"green"}}>🟢You are Online</li>:<li style={{color:"red"}}>🔴You are Offline!</li>
          }
          <li className="px-6"><Link to="/">Home</Link></li>
          <li><Link to={"/contact"} >Contact Us</Link></li>
          <li className="px-6"><Link to="/about">About Us</Link></li>
          <li>
            <i className="fa-solid fa-cart-plus"/>
          </li>
          <li className="mr-14 pl-6">
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
