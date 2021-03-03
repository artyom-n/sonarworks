import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import axios from 'axios';

const Terms = () => {

  const [terms, setTerms] = useState<any>()

  useEffect(() => {
    axios
      .get('https://www.sonarworks.com/api/legal/terms')
      .then((res) => {
        setTerms(res.data.content);
      })    
  }, [])

  return (
    <div className="container">
      <Nav />
      <div 
        dangerouslySetInnerHTML={{__html: terms}} 
      />
      <Footer />
    </div>
  )    
}

export default Terms;
