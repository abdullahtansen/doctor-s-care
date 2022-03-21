import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import aboutUs from '../../img/about.jpg';
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <section>
            <div className='d-flex row pb-5 bg'>
            <div className='col-lg-6 col-md-6 col-12'>
                <img style={{width:"80%",height:'350px',marginLeft:"50px",marginTop:"20px"}} className='img-fluid' src={aboutUs} alt="" />
            </div>
            <div className='col-lg-6 col-md-6 col-12 mt-3'>
                <h2>Welcome To Bangladesh Dental Care</h2>
                <p>Bangladesh Dental Care improve our smiles and overall appearance. Not only do they make us look better, but also make our life easier. Enjoy simple things as food, conversation, and a smile. Forget about uncomfortable social encounters. Our focus is on your overall well-being and helping you achieve optimal health and esthetics.</p>
                </div>
                </div>
        <Container className="skill-container">
        <Row>
        <Col lg={6}>
        <h3 className="our">Our Skills</h3>
        </Col>
        <Col lg={6}>
            <div className="skill">
            <div className='spinner'>
                    <h3>Teeth Whitening</h3>
                <ProgressBar animated now={90} label={`${90}%`} />
            </div>
            <div className='spinner'>
                <h3>Tooth Extraction</h3>
                <ProgressBar animated now={80} label={`${80}%`} />
            </div>
            <div className='spinner'>
                <h3>Orthodontics</h3>
                <ProgressBar animated now={70} label={`${70}%`} />
            </div>
            <div  className='spinner'>
                <h3>Routine Dental Exam</h3>
                <ProgressBar animated now={60} label={`${60}%`} />
            </div>
            <div  className='spinner'>
                <h3>Dental Fillings</h3>
                <ProgressBar animated now={65} label={`${65}%`} />
            </div>
            <div  className='spinner'>
                <h3>Root Canal Treatment</h3>
                <ProgressBar animated now={50} label={`${50}%`} />
            </div>
            </div>
        </Col>
        </Row>
        </Container>
         </section>
    );
};

export default AboutUs;