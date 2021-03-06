import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import style from "../styles/styles.module.scss";
import axios from 'axios';

const Truefi = () => {

  const [title, setTitle] = useState<string | undefined>()
  const [truefi, setTruefi] = useState<string | undefined>()

  useEffect(() => {
    axios
      .get('https://www.sonarworks.com/api/legal/true')
      .then((res) => {
        setTitle(res.data.title);
        setTruefi(res.data.content);
      })    
  }, [])

  if (!title || !truefi) {
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
        dangerouslySetInnerHTML={{__html: truefi}} 
      />
      <Footer />
    </>
  )    
}

export default Truefi;
