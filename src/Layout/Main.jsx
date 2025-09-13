import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Componenets/Navbar';
import Footer from '../Componenets/Footer';

const Main = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;