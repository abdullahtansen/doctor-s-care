import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../img/slider1.jpg';
import slider2 from '../../../img/slider2.jpg';
import slider3 from '../../../img/slider3.jpg';
 

const Banner = () => {
    return (
       
            <Carousel>
  <Carousel.Item className="slide">
    <img style={{height:"100%",width:"100%"}}
      src={slider1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slide">
    <img style={{height:"100%",width:"100%"}}
      src={slider2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slide">
    <img style={{height:"100%",width:"100%"}}
      src={slider3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;