import React from 'react';
import style from "./nav.module.scss";
import logo from "../../assets/images/logo.svg"
import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <div className={style.nav}>
      <div className={style.sonarworks}>
        <Link className={style.link} to="/">
          Sonarworks
        </Link>
      </div>
      <div className={style.legal}>
        <Link className={style.link} to="/">
          Legal centre
        </Link>
      </div>
      <div className={style.wrapper}>
        <Link
          className={style.link} to="/">
          <img
            className={style.logo}
            src={logo}
            alt="sonarworks"
          />
        </Link>
      </div>
    </div>
  )
};

export default Nav;
