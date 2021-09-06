import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import './UserList.css';

const UserList = ({ users }) => {
  return (
    <div className='textContainer'>
      {users ? (
        <div>
          <h1>People currently chatting:</h1>
          <div className='activeContainer'>
            <h2>
              {users.map(({ name }) => (
                <div key={name} className='activeItem'>
                  {name}
                  <img alt='online' src={onlineIcon} />
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserList;
