import React from 'react';
import style from "./nav.module.scss";
import logo from "../../assets/images/logo.svg"
import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <nav className={style.nav}>
      <div className={style.name}>
        <Link className={style.link} to="/">
          Sonarworks
        </Link>
      </div>
      <div className={style.legal}>
        <Link className={style.link} to="/">
          Legal centre
        </Link>
      </div>
      <div className={style.logo}>
        <Link
          className={style.link} to="/">
          <img
            src={logo}
            alt="sonarworks"
          />
        </Link>
      </div>
    </nav>
  )
};

export default Nav;
