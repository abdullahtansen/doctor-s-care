import React from 'react';
import { Button, Col, Form, NavLink, Row } from 'react-bootstrap';
import login from'../../img/login.png';
import { FaGoogle,FaGithubSquare } from "react-icons/fa";
import './Register.css'

const Register = () => {
    return (
        <div class="full-section">
            <section className='container'>
                <Row className="d-flex full-form">
                <Col md={6} sm={12}>
                    <img className='img-fluid' src={login} alt="" />
                    </Col>
                <Col md={6} sm={12} className="logged-in">
                <Form className="login-form">
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Your Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter YOur Full Name" className="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email" className="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Your Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Your Password" className="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-Type Your Password" className="Password" />
                    </Form.Group>
                    <NavLink>
                    <Button>Login</Button>
                    </NavLink>
                    </Form>
                    <div>
                        <p className='any-account'>Don't have any Account?  
                        <a href="https://facebook.com">signup</a>
                        </p>
                        <h5 className='other__methods'>OR</h5>
                    </div>
                    <div className='login-btn'>
                        <div>
                        <Button className="google-btn">
                            <FaGoogle style={{marginRight:"10px",marginBottom:"3px",color:"black",fontSize:"25px"}}></FaGoogle>
                            Google Sign In</Button>
                        <Button className="git-btn">
                        <FaGithubSquare style={{marginRight:"10px",marginBottom:"3px",color:"black",fontSize:"25px"}}></FaGithubSquare>
                            Github Sign In</Button>
                        </div>
                    </div>
                </Col>
                </Row>
            </section>
        </div>
    );
};

export default Register;