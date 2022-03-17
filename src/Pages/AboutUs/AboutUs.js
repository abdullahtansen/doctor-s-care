import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import aboutUs from '../../img/about.jpg';
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <div>
            <div className='mb-3 d-flex row bg'>
            <div className='col-lg-6'>
                <img style={{width:'600px',height:'350px'}} className='images' src={aboutUs} alt="" />
            </div>
            <div className='col-lg-6'>
                <h2>Welcome To Bangladesh Dental Care</h2>
                <p>Bangladesh Dental Care improve our smiles and overall appearance. Not only do they make us look better, but also make our life easier. Enjoy simple things as food, conversation, and a smile. Forget about uncomfortable social encounters. Our focus is on your overall well-being and helping you achieve optimal health and esthetics.</p>
                </div>
                <div>
                    <div className="text-center skill">
                        <small>Our Skills</small>
                    </div>
                    <div className='spinner' style={{width:"95%",marginLeft:"540px",marginRight:"150px",marginTop:"20px"}}>
                            <h3>Teeth Whitening</h3>
                        <ProgressBar animated now={60} label={`${60}%`} />
             </div>
             <div style={{width:"90%",marginLeft:"540px",marginTop:"20px",}}>
                 <h3>Tooth Extraction</h3>
                 <ProgressBar animated now={60} label={`${50}%`} />
             </div>
             <div style={{width:"85%",marginLeft:"540px",marginTop:"20px"}}>
                 <h3>Orthodontics</h3>
                 <ProgressBar animated now={60} label={`${60}%`} />
             </div>
             <div style={{width:"80%",marginLeft:"540px",marginTop:"20px"}}>
                 <h3>Routine Dental Exam</h3>
                 <ProgressBar animated now={60} label={`${60}%`} />
             </div>
             <div style={{width:"70%",marginLeft:"540px",marginTop:"20px",}}>
                 <h3>Dental Fillings</h3>
                 <ProgressBar animated now={60} label={`${60}%`} />
             </div>
             <div style={{width:"65%",marginLeft:"540px",marginTop:"20px",}}>
                 <h3>Root Canal Treatment</h3>
                 <ProgressBar animated now={60} label={`${60}%`} />
             </div>
                </div>
        </div>
            </div>
        
    );
};

export default AboutUs;