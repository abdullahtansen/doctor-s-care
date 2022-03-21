import React from 'react';
import "./Blog.css"

const Blog = ({blog}) => {
    const {title,img,description} = blog;
    return (
        <div className='col-12 col-lg-4 col-md-4 body'>
        <div className='container mt-2 blog' style={{backgroundColor:"white"}}>
        <img className='doctor mt-3 img-fluid' src={img} alt="" />
      <h2 className='text-center title'>{title}</h2>
        <p className='text-center des'>{description.slice(0,100)}</p>
        </div>
    </div>
    );
};

export default Blog;