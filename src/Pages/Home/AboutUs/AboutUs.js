import React from 'react';
import aboutUs from './../../../img/about.jpg';
import '../AboutUs/AboutUs.css'
import { Button, Col, Container, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div style={{backgroundColor:"#fcf4e0"}}>
        <Container>
            <Row className='d-flex bg py-5'>
            <Col sm={12} md={6} lg={6}>
                <img className='images img-fluid' src={aboutUs} alt="" />
            </Col>
            <Col  sm={12} md={6} lg={6}>
                <h2>Welcome To Bangladesh Dental Care</h2>
                <p>Bangladesh Dental Care improve our smiles and overall appearance. Not only do they make us look better, but also make our life easier. Enjoy simple things as food, conversation, and a smile. Forget about uncomfortable social encounters. Our focus is on your overall well-being and helping you achieve optimal health and esthetics.</p>
                <Link to="/about"> 
                <Button><small>About Us</small></Button>
                </Link>
            </Col>
        </Row>
        </Container>
        </div>
    );
};

export default AboutUs;