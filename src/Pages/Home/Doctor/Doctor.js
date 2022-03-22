import React from 'react';
import { Col } from 'react-bootstrap';
import './doctor.css'
const Doctor = ({doctor}) => {
   const {name,work,img} = doctor;
    return (
                <Col lg={4} md={4} sm={12} className='card'>
               <img className='doctor' style={{height:"50%",borderRadius:"10px"}} src={img} alt="" />
               <h2 className='text-center text-danger'>{name}</h2>
            <h6 className='text-center'>{work}</h6>
               </Col>
       
    );
};

export default Doctor;