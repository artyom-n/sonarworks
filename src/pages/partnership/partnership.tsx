import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import style from "../styles/styles.module.scss";
import axios from 'axios';

const Partnership = () => {

  const [title, setTitle] = useState<any>()
  const [partnership, setPartnership] = useState<any>()

  useEffect(() => {
    axios
      .get('https://www.sonarworks.com/api/legal/partnership')
      .then((res) => {
        setTitle(res.data.title);
        setPartnership(res.data.content);
      })    
  }, [])

  return (
    <>
      <Nav />
      <h3
        className={style.title}
      >
        {title}
      </h3>
      <div
        className={style.content}
        dangerouslySetInnerHTML={{__html: partnership}} 
      />
      <Footer />
    </>
  )    
}

export default Partnership;
