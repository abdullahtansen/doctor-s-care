import React from 'react';
import { Col } from 'react-bootstrap';
import "./Blog.css"

const Blog = ({blog}) => {
    const {title,img,description} = blog;
    return (
        <Col sm={12} md={4} lg={4} className='d-flex flex-nowrap body'>
        <div className='container mt-2 blog' style={{backgroundColor:"white"}}>
        <img className='doctor mt-3 img-fluid' src={img} alt="" />
      <h2 className='text-center title'>{title}</h2>
        <p className='text-center des'>{description.slice(0,100)}</p>
        </div>
    </Col>
    );
};

export default Blog;