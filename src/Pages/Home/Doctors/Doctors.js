import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Doctors.css'
import Doctor from '../Doctor/Doctor';
import { Container } from 'react-bootstrap';

const Doctors = () => {
    const [doctors,setDoctors] = useState([]);
    useEffect( ()=>{
        fetch("./doctor.json")
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <section>
            <Container className='pt-5'>
            <h2 className="text-center">Our Doctors</h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati nulla ad molestias debitis odit quas dicta eos.</p>
            <div className="row">
                {doctors.map(doctor=><Doctor
                key={doctor.id}
                doctor={doctor}></Doctor>)}
                </div>
        </Container>
        </section>
    );
};

export default Doctors;