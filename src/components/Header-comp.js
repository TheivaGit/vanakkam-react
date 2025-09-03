import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

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
        <img className="logo-img" src={LOGO_URL} />
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button onClick={toggleHeaderBtn}>{menuBtnName}</button>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComp;
