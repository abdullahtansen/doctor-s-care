import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import slider1 from '../../../img/banner/slider1.jpg';
import slider2 from '../../../img/banner/slider2.jpg';
import slider3 from '../../../img/banner/slider3.jpg';
 

const Banner = () => {
    return (
       
           <section>
            <Container>
              <Carousel>
                <Carousel.Item className="slide row mb-5">
              <Row>
              <Col lg={6} md={6} sm={12}>
              <h3>Professional & highly trained Dental Staff</h3>
              <p>We are protect your teeth any kind of problems. Our Team will give you best solution for your teeth</p>
              <Button className='bg-danger btns'>Learn More</Button>
              </Col>
              <Col lg={6} md={6} sm={12} className='mt-3'>
              <img className='images img-fluid'
              src={slider1}
              alt="First slide"
            />
              </Col>
              </Row>
          </Carousel.Item>

          <Carousel.Item className="slide row mb-5">
              <Row>
              <Col lg={6} md={6} sm={12}>
              <h3>Professional & highly trained Dental Staff</h3>
              <p>We are protect your teeth any kind of problems. Our Team will give you best solution for your teeth</p>
              <Button className='bg-danger btns'>Learn More</Button>
              </Col>
              <Col lg={6} md={6} sm={12} className='mt-3'>
              <img className='images img-fluid'
              src={slider2}
              alt="First slide"
            />
              </Col>
              </Row>
          </Carousel.Item>
          <Carousel.Item className="slide row mb-5">
              <Row>
              <Col lg={6} md={6} sm={12}>
              <h3>Professional & highly trained Dental Staff</h3>
              <p>We are protect your teeth any kind of problems. Our Team will give you best solution for your teeth</p>
              <Button className='bg-danger btns'>Learn More</Button>
              </Col>
              <Col lg={6} md={6} sm={12} className='mt-3'>
              <img className='images img-fluid'
              src={slider3}
              alt="First slide"
            />
              </Col>
              </Row>
          </Carousel.Item>
        </Carousel>
            </Container>
            </section>
    );
};

export default Banner;