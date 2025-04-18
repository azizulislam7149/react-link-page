import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">Home</Link>
        
         <Link to= '/about'>About</Link>
         <Link to= '/contact'>Contact Us</Link>
         <Link to= '/users'>our Users </Link>
         
      
        </div>
    );
};

export default Header;