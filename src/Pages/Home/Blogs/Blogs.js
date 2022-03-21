import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect( ()=>{
        fetch(`./allBlogs.json`)
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])
    return (
            <section>
            <Container className="blogs-body">
            <h1 className='text-center'>Our Blogs</h1>
            <div className='d-flex'>
            {blogs.map(blog=><Blog
                key ={blog.id}
                blog={blog}></Blog>)}
            </div>
            </Container>
            </section>
    );
};

export default Blogs;