import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import axios from 'axios';

const Truefi = () => {

  const [truefi, setTruefi] = useState<any>()

  useEffect(() => {
    axios
      .get('https://www.sonarworks.com/api/legal/true')
      .then((res) => {
        setTruefi(res.data.content);
      })    
  }, [])

  return (
    <div className="container">
      <Nav />
      <div 
        dangerouslySetInnerHTML={{__html: truefi}} 
      />
      <Footer />
    </div>
  )    
}

export default Truefi;
