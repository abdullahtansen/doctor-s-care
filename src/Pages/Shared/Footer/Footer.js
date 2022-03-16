import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='row'>
            <div className="col-lg-3">
            <h5>Bangladesh Dental Care</h5>
            <small>Copyright © 2022 by Tansen.
                <br />
                All Right Reserved.
            </small>
            </div>
            <div className="col-lg-3">
                <div className="col-lg-12">
                <h3>Columbia</h3>
                <p>
                    7140 Wehner Tunnel,
                    <br />
                    WashingTon, D.C
                </p>
                </div>
                <div className="col-lg-12">
                <h3>New MEXICO</h3>
                <p>10 Maggle Valleys,
                    <br />
                 United States
                </p>
                </div>
                </div>
            
            <div className="col-lg-3"></div>
            <div className="col-lg-3"></div>
        </div>
    );
};

export default Footer;