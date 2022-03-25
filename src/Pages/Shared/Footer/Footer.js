import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaFacebookF,FaInstagram,FaGithub,FaLinkedinIn } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
       <section>
           <Container>
            <Row className='row footer'>
            <Col lg={3} className="dental-care">
            <h5>Bangladesh Dental Care</h5>
            <div className='social-media'>
            <a href="https://www.facebook.com/abdullahtansen/" target="_blank" rel="noreferrer">
                <FaFacebookF className="icon"></FaFacebookF>
                </a>
            <a href="https://www.instagram.com/abdullah_al_tansen/?hl=en" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='icon'></FaInstagram>
                </a>
            <a href="hhttps://github.com/abdullahtansen" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon"></FaGithub>
                </a>
            <a href="https://www.linkedin.com/in/abdullahtansen/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="icon"></FaLinkedinIn>
                </a>
            </div>
            <br></br>
            <p className='mt-3'>
                {' '}
                Copyright &copy; {new Date().getFullYear()} by Tansen. <br />{' '}
                All Rights Reserved.
                </p>
            </Col>
            <Col lg={3}>
                <Col lg={12}>
                <h3>Columbia</h3>
                <p>
                    7140 Wehner Tunnel,
                    <br />
                    WashingTon, D.C
                </p>
                </Col>
                <Col lg={12}>
                <h3>New MEXICO</h3>
                <p>10 Maggle Valleys,
                    <br />
                 United States
                </p>
                </Col>
                </Col>
            
            <Col lg={3}>
                <h3>WORK INQUIRIES</h3>
                <p className="working">Interested in working with us?
                    <br />
                    <a className="gmail" href="https://abdullahaltansen899@gmail.com" 
                   rel='noreferrer' target="_blank">abdullahaltansen899@gmail.com</a>
                </p>
                <h5 className='mt-5'>PHONE</h5>
                <p>
                    <a href="tel:+880 0180000000">+880 0180000000</a> <br />
                    <a href="tel:+880 0180000011">+880 0180000011</a>
                </p>
            </Col>
            <Col lg={3} md={4}>
            <h5 className='fw-bold'>STAY IN TOUCH</h5>
            <Form className='d-flex mt-3'>
              <Form.Control type='email' placeholder='Enter Email' />
              <Button variant='danger'>
                <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
            </Form>
            </Col>
        </Row>
       </Container>
       </section>
    );
};

export default Footer;