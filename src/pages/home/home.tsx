import React, { useState, useEffect } from 'react';
import style from "./home.module.scss";
import logo from "../../assets/images/logo.svg"
import Statement from '../../components/statement/statement';
import axios from 'axios';

// type Privacy = {  
//   title: string,
//   content: string
// }

const Home = () => {

  const [privacy, setPrivacy] = useState<string | undefined>()
  const [partnership, setPartnership] = useState<string | undefined>()

  useEffect(() => {
    axios
      .get('https://www.sonarworks.com/api/legal/privacy')
      .then((res) => {
        setPrivacy(res.data.title);
      });
      axios
      .get('https://www.sonarworks.com/api/legal/partnership')
      .then((res) => {
        setPartnership(res.data.title);
      });
  }, []);

  return (
    <div className="container">
      <div className={style.nav}>
        <div className="row">
          <div className="col-md-2">
            <div className={style.nav_item}>
              Sonarworks
            </div>
          </div>
          <div className="col-md-9">
            <div className={style.nav_item}>
              Legal centre
            </div>
          </div>
          <div className="col-md-1">
            <img
              src={logo}
              alt="sonarworks"
            />
          </div>
        </div>
      </div>
      <div className={style.statements}>
        <Statement
          text={privacy + ' →'}
        />
        <Statement
          text={partnership + ' →'}
        />
        <Statement
          text="Terms and Conditions →"
        />
        <Statement
          text="Cookies policy →"
        />
        <Statement
          text="Support Service →"
        />
        <Statement
          text="Sonarworks True-Fi privacy statement →"
        />
      </div>
      <div className={style.footer}>
        © 2020 Sonarworks Inc. All rights reserved.
      </div>
    </div>
  )
};

export default Home;
