import React from 'react';
import style from "./home.module.scss";
import Nav from '../../components/nav/nav';
import Policies from '../../components/policies/policies';
import Footer from '../../components/footer/footer';

const Home = () => { 

  return (
    <>
      <Nav />
      <section className={style.policies}>
        <Policies />
      </section>      
      <Footer />
    </>
  )
};

export default Home;
