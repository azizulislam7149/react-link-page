import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './users.css';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>our users {users.length}</h2>
            <div className='users'>
                {
                    users.map(user=> <User user={user}></User> )
                }
            </div>
        </div>
    );
};

export default Users;