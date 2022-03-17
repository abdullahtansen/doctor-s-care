import React from 'react';
import { Container } from 'react-bootstrap';
import './doctor.css'
const Doctor = ({doctor}) => {
   const {name,work,img} = doctor;
    return (
        <Container className='col-12 col-lg-4 borderGap{2} container'>
            <img className='doctor' style={{width:"80%",height:"50%",borderRadius:"10px"}} src={img} alt="" />
          <h2 className='text-center'>{name}</h2>
            <h3 className='text-center'>{work}</h3>
        </Container>
    );
};

export default Doctor;