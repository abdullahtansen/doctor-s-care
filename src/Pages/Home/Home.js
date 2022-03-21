import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import Counter from './Counter/Counter';
import PatientServices from './PatientServices/PatientServices';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <PatientServices></PatientServices>
      <Counter></Counter>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;