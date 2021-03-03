import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import axios from 'axios';

const Privacy = () => {

  const [privacy, setPrivacy] = useState<any>()

  useEffect(() => {
    axios
      .get('https://www.sonarworks.com/api/legal/privacy')
      .then((res) => {
        setPrivacy(res.data.content);
      })    
  }, [])  

  return (
    <div className="container">
      <Nav />
      <div 
        dangerouslySetInnerHTML={{__html: privacy}} 
      />
      <Footer />
    </div>
  )    
}

export default Privacy;
