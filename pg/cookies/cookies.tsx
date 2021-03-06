import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import style from "../styles/styles.module.scss";
import axios from 'axios';

const Cookies = () => {

  const [title, setTitle] = useState<string | undefined>()
  const [cookies, setCookies] = useState<string | undefined>()

  useEffect(() => {
    axios
      .get('https://www.sonarworks.com/api/legal/cookies')
      .then((res) => {
        setTitle(res.data.title);
        setCookies(res.data.content);
      })    
  }, [])

  if (!title || !cookies) {
    return(
      <div 
        className={style.loading}>
          Loading...
      </div>
    )
  }

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
        dangerouslySetInnerHTML={{__html: cookies}} 
      />
      <Footer />
    </>
  )    
}

export default Cookies;
