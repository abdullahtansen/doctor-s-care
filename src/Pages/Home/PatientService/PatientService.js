import React from 'react';
import { Button } from 'react-bootstrap';
import './PatientService.css'

const PatientService = ({patient}) => {
    const {img,name,price,description} = patient;
    return (
        <div className='col-12 col-lg-4 border gap{2} card-body'>
        <img className="image img-fluid" src={img} alt="" />
      <h2 className='text-center name'>{name}</h2>
        <p className='text-center description'>{description.slice(0,100)}</p>
        <h3 className='text-danger text-center'>Price: {price}</h3>
        <div className="button">
        <Button variant="warning">See Details</Button>
        </div>
    </div>
    );
};

export default PatientService;