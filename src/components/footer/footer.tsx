import React from 'react';
import style from "./footer.module.scss";

const Footer = () => {

  return (
    <div className={style.wrapper}>
      <footer className={style.footer}>
      © 2021 Sonarworks Inc. All rights reserved.
    </footer>
    </div>
    
  )
};

export default Footer;
