import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Componenets/navbar';

const Main = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;