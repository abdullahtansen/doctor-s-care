import React, { useEffect, useState } from 'react';
import PatientService from '../PatientService/PatientService';
import './patientservices.css';

const PatientServices = () => {
    const [patients,setPatients] = useState([]);
    useEffect( ()=>{
        fetch(`./allServices.json`)
        .then(res=>res.json())
        .then(data=>setPatients(data))
    },[])
    return (
        <div className='patientservices'>
            <h3 className='text-danger text-center mt-5'>Our Patient Services</h3>
            <p className='text-center mt-3 discription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusamus corporis voluptatibus temporibus,</p>
            <div className="row mt-4 patients">
                {patients.map(patient =><PatientService
                key={patient.id}
                patient={patient}></PatientService>)}
            </div>
        </div>
    );
};

export default PatientServices;