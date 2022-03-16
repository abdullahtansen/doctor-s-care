import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NotFoundPage from './../../img/404.png';
const NotFound = () => {
    return (
        <div>
            <img style={{width:"100%"}} src={NotFoundPage} alt="" srcset="" />
            <Link to="/">
                <Button>Go Back</Button>
            </Link>
        </div>
    );
};

export default NotFound;