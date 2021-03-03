import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import style from "../styles/styles.module.scss";
import axios from 'axios';

const Support = () => {

  const [title, setTitle] = useState<any>()
  const [support, setSupport] = useState<any>()

  useEffect(() => {
    axios
      .get('https://www.sonarworks.com/api/legal/support')
      .then((res) => {
        setTitle(res.data.title);
        setSupport(res.data.content);
      })    
  }, [])

  return (
    <div className="container">
      <Nav />
      <h3
        className={style.title}
      >
        {title}
      </h3>
      <div
        className={style.content}
        dangerouslySetInnerHTML={{__html: support}} 
      />
      <Footer />
    </div>
  )    
}

export default Support;
