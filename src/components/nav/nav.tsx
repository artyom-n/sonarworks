import React from 'react';
import style from "./nav.module.scss";
import logo from "../../assets/images/logo.svg"
import { Link } from "react-router-dom";

const Nav = () => {  
  
    return (
      <div className="container">
        <div className={style.nav}>
          <div className="row">
            <div className="col-md-2">
              <div className={style.nav_item}>
                <Link className={style.link} to="/">
                  Sonarworks
                </Link>
              </div>
            </div>
            <div className="col-md-9">
              <div className={style.nav_item}>
                <Link className={style.link} to="/">
                  Legal centre
                </Link>
              </div>
            </div>
            <div className="col-md-1">
              <Link 
                className={style.link} to="/">
                <img
                  src={logo}
                  alt="sonarworks"
                />
              </Link>              
            </div>
          </div>
        </div>
      </div>
    )
  };
  
  export default Nav;
