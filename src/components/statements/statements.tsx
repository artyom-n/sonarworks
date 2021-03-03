import React from 'react';
import style from "./statements.module.scss";
import { Link } from "react-router-dom";

const Statements = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">          
          <div className={style.statements}>
            <Link className={style.link} to="/privacy">
              Privacy Policy →
            </Link>
          </div>          
          <div className={style.statements}>
            <Link className={style.link} to="/partnership">
              Partnership Policy →
            </Link>
          </div>
          <div className={style.statements}>
            <Link className={style.link} to="/terms">
              Terms and Conditions →
            </Link>
          </div>
          <div className={style.statements}>
            <Link className={style.link} to="/cookies">
              Cookies policy →
            </Link>
          </div>
          <div className={style.statements}>
            <Link className={style.link} to="/support">
              Support Service →
            </Link>
          </div>
          <div className={style.statements}>
            <Link className={style.link} to="/truefi">
              Sonarworks True-Fi privacy statement →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Statements;
