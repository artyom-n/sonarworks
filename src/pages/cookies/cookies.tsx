import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import axios from 'axios';

const Cookies = () => {

  const [cookies, setCookies] = useState<any>()

  useEffect(() => {
    axios
      .get('https://www.sonarworks.com/api/legal/cookies')
      .then((res) => {
        setCookies(res.data.content);
      })    
  }, [])

  return (
    <div className="container">
      <Nav />
      <div 
        dangerouslySetInnerHTML={{__html: cookies}} 
      />
      <Footer />
    </div>
  )    
}

export default Cookies;
