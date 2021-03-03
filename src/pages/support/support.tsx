import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import axios from 'axios';

const Support = () => {

  const [support, setSupport] = useState<any>()

  useEffect(() => {
    axios
      .get('https://www.sonarworks.com/api/legal/support')
      .then((res) => {
        setSupport(res.data.content);
      })    
  }, [])

  return (
    <div className="container">
      <Nav />
      <div 
        dangerouslySetInnerHTML={{__html: support}} 
      />
      <Footer />
    </div>
  )    
}

export default Support;
