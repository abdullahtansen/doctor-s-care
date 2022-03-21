import React from 'react';
import { Container } from 'react-bootstrap';
import './doctor.css'
const Doctor = ({doctor}) => {
   const {name,work,img} = doctor;
    return (
        <Container className='col-12 col-lg-4 card'>
            <img className='doctor' style={{width:"100%",height:"50%",borderRadius:"10px"}} src={img} alt="" />
          <h2 className='text-center text-danger'>{name}</h2>
            <h6 className='text-center'>{work}</h6>
        </Container>
    );
};

export default Doctor;