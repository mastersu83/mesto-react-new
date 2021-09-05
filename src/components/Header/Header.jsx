import React from "react";
import classes from "./Header.module.css";
import logo from "../../img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className={classes.header__wrapper}>
          <img className="header__logo" src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
