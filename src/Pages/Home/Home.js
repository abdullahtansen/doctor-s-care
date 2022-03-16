import React from 'react';
import Footer from '../Shared/Footer/Footer';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import PatientServices from './PatientServices/PatientServices';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <PatientServices></PatientServices>
      <Footer></Footer>
    </div>
  );
};

export default Home;