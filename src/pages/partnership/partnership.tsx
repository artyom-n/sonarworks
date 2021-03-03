import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import axios from 'axios';

const Partnership = () => {

  const [partnership, setPartnership] = useState<any>()

  useEffect(() => {
    axios
      .get('https://www.sonarworks.com/api/legal/partnership')
      .then((res) => {
        setPartnership(res.data.content);
      })    
  }, [])

  return (
    <div className="container">
      <Nav />
      <div 
        dangerouslySetInnerHTML={{__html: partnership}} 
      />
      <Footer />
    </div>
  )    
}

export default Partnership;
