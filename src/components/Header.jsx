import { LOGO_URL } from "./utils/constants.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus.js";
import UserContext from "./utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setlogin] = useState("Logout");

  const onlineStatus = useOnlineStatus();

  //const data = useContext(UserContext) //{loggedUser: 'NIlesh'}
  const { user } = useContext(UserContext); //"useContext" uses the "context" of "UserContext" fnction
  //console.log(data)
  // console.log(user)

  const cart = useSelector((store) => store.cart.items);
  console.log(cart);
  return (
    <div className="sticky top-0 left-0 z-10 w-full header flex justify-between bg-pink-100 sm:bg-gray-200 lg:bg-green-100  shadow-lg items-center">
      <div className="logo">
        <img className="w-28 lg:w-44" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex text-black font-bold lg:text-xl">
          {onlineStatus == true ? (
            <li style={{ color: "green" }}>🟢Online</li>
          ) : (
            <li style={{ color: "red" }}>🔴Offline!</li>
          )}
          <li className="px-3 lg:px-6">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden lg:inline">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hidden lg:inline lg:px-6">
            <Link to="/about">About Us</Link>
          </li>
          <li className="pr-8 lg:p-0">
            <Link to="/cart">
              <i className="fa-solid fa-cart-plus" />
              <span className=" inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 absolute lg:top-9">
                {cart.length}
              </span>
            </Link>
          </li>
          <li className="hidden lg:inline lg:px-6">
            <button
              className="login"
              onClick={() =>
                login === "Login" ? setlogin("Logout") : setlogin("Login")
              }
            >
              {login}
            </button>
          </li>
          {login === "Logout" && (
            <li className="hidden lg:inline lg:mr-14">Welcome {user}!</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
