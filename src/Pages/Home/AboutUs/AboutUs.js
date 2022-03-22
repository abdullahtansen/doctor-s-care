import React from 'react';
import aboutUs from './../../../img/about.jpg';
import '../AboutUs/AboutUs.css'
import { Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div style={{backgroundColor:"#fcf4e0"}}>
<Container>
            <div className='d-flex row bg py-5'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <img style={{width:"80%",height:'350px',marginLeft:"10px"}} className='images' src={aboutUs} alt="" />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <h2>Welcome To Bangladesh Dental Care</h2>
                <p>Bangladesh Dental Care improve our smiles and overall appearance. Not only do they make us look better, but also make our life easier. Enjoy simple things as food, conversation, and a smile. Forget about uncomfortable social encounters. Our focus is on your overall well-being and helping you achieve optimal health and esthetics.</p>
                <Link to="/about"> 
                <Button><small className="btn">About Us</small></Button>
                </Link>
            </div>
        </div>
        </Container>
        </div>
    );
};

export default AboutUs;