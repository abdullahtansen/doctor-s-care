import React from 'react';
import Footer from '../Shared/Footer/Footer';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Counter from './Counter/Counter';
import PatientServices from './PatientServices/PatientServices';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <PatientServices></PatientServices>
      <Counter></Counter>
      <Footer></Footer>
    </div>
  );
};

export default Home;