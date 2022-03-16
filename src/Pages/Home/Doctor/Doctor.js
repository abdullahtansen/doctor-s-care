import React from 'react';
import './doctor.css'
const Doctor = ({doctor}) => {
   const {name,work,img} = doctor;
    return (
        <div className='col-12 col-lg-4 border gap{3}'>
            <img src={img} alt="" />
          <h2 className='text-center'>{name}</h2>
            <h3 className='text-center'>{work}</h3>
        </div>
    );
};

export default Doctor;