import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import style from "../styles/styles.module.scss"; 
import axios from 'axios';

const Privacy = () => {

  const [title, setTitle] = useState<string | undefined>()
  const [privacy, setPrivacy] = useState<string | undefined>()

  useEffect(() => {
    axios
      .get('https://www.sonarworks.com/api/legal/privacy')
      .then((res) => {
        setTitle(res.data.title);
        setPrivacy(res.data.content);
      })    
  }, [])  

  if (!title || !privacy) {
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
        dangerouslySetInnerHTML={{__html: privacy}} 
      />
      <Footer />
    </>
  )    
}

export default Privacy;
