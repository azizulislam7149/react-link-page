import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>This is home page</h2>
            <Header></Header>

            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;