import React from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import './Banner.css';
import slider1 from '../../../img/banner/slider1.jpg';
import slider2 from '../../../img/banner/slider2.jpg';
import slider3 from '../../../img/banner/slider3.jpg';
 

const Banner = () => {
    return (
       
           <section>
            <Container>
              <Carousel>
              <Carousel.Item className="slide">
              <div className='d-flex slides'>
              <div className='slider'>
              <h3>Professional & highly trained Dental Staff</h3>
              <p>We are protect your teeth any kind of problems. Our Team will give you best solution for your teeth</p>
              <Button className='bg-danger btns'>Learn More</Button>
              </div>
              <div className='images'>
              <img style={{height:"70%",width:"90%"}}
              src={slider1}
              alt="First slide"
            />
              </div>
              </div>
          </Carousel.Item>

          <Carousel.Item className="slide">
            <div className='d-flex slides'>
              <div className='slider'>
              <h3>Professional & highly trained Dental Staff</h3>
              <p>We are protect your teeth any kind of problems. Our Team will give you best solution for your teeth</p>
              <Button className='bg-danger btns'>Learn More</Button>
              </div>
              <div className='images'>
              <img style={{height:"70%",width:"90%"}}
              src={slider2}
              alt="First slide"
            />
              </div>
              </div>
          </Carousel.Item>
          <Carousel.Item className="slide">
          <div className='d-flex slides'>
              <div className='slider'>
              <h3>Professional & highly trained Dental Staff</h3>
              <p>We are protect your teeth any kind of problems. Our Team will give you best solution for your teeth</p>
              <Button className='bg-danger btns'>Learn More</Button>
              </div>
              <div className='images'>
              <img style={{height:"70%",width:"90%"}}
              src={slider3}
              alt="First slide"
            />
              </div>
              </div>
          </Carousel.Item>
        </Carousel>
            </Container>
            </section>
    );
};

export default Banner;