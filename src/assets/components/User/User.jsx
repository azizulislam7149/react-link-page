import React from 'react';
import './user.css';
const User = ({user}) => {
    const{id, title,url,thumbnailUrl} = user;

    return (
        <div className='user'>
            <h1>{id}</h1>
            <p>{title}</p>
            <p>{url}</p>
            <img src={thumbnailUrl} alt="" />
        </div>
    );
};

export default User;