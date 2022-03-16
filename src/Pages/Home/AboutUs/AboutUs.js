import React from 'react';
import aboutUs from './../../../img/about.jpg';
import '../AboutUs/AboutUs.css'
import { Button, NavLink } from 'react-bootstrap';
const AboutUs = () => {
    return (
        <div className='mt-1 d-flex row bg'>
            <div className='col-lg-6'>
                <img style={{width:'600px',height:'350px'}} className='images' src={aboutUs} alt="" />
            </div>
            <div className='col-lg-6'>
                <h2>Welcome To Bangladesh Dental Care</h2>
                <p>Bangladesh Dental Care improve our smiles and overall appearance. Not only do they make us look better, but also make our life easier. Enjoy simple things as food, conversation, and a smile. Forget about uncomfortable social encounters. Our focus is on your overall well-being and helping you achieve optimal health and esthetics.</p>
                <NavLink to="/aboutus"> 
                <Button><small className="btn">About Us</small></Button>
                </NavLink>
            </div>
        </div>
    );
};

export default AboutUs;