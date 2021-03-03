import React from 'react';
import style from "./footer.module.scss";

const Footer = () => {

  return (
    <div className="container">      
      <div className={style.footer}>
        © 2021 Sonarworks Inc. All rights reserved.
      </div>
    </div>
  )
};

export default Footer;
