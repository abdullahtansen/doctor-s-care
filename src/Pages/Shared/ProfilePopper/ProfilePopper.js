import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { Button, Overlay, Popover } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './ProfilePopper.css';

const ProfilePopper = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const { user, logOut } = useAuth();

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
       <img
        onClick={handleClick}
        src={user.photoURL}
        alt={user.name}
        className='rounded-circle'
      />

      <Overlay show={show} target={target} placement='bottom' container={ref}>
        <Popover id='popover-contained' className='profile__body'>
          <Popover.Body>
            <h6>{user.displayName}</h6>
            <p>{user.email}</p>
            <Button onClick={logOut} className='main__button'>
              <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
            </Button>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};

export default ProfilePopper;