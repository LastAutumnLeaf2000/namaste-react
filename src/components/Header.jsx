import { LOGO_URL } from "./utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>
            <i className="fa-solid fa-cart-plus" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
