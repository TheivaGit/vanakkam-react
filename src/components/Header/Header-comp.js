import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  const [menuBtnName, setMenuBtnName] = useState("login");

  const toggleHeaderBtn = () => {
    menuBtnName === "login"
      ? setMenuBtnName("logout")
      : setMenuBtnName("login");
  };

  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button onClick={toggleHeaderBtn}>{menuBtnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComp;
