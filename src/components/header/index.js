import React from "react";
import "./styles.scss";
import Logo from "./../../accets/logo.png";

const Header = (props) => {
  return (
    <header className="headerComponet">
      <div className="wrapper">
        <div className="logo">
          <img src={Logo} alt="Logo" className="logo logoIMG" />
        </div>
      </div>
    </header>
  )
}

export default Header;