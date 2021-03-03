import React from 'react';
import Nav from '../../components/nav/nav';
import Statements from '../../components/statements/statements';
import Footer from '../../components/footer/footer';

const Home = () => { 

  return (
    <div className="container">
      <Nav />
      <Statements />
      <Footer />
    </div>
  )
};

export default Home;
