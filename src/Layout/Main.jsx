import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Componenets/Navbar';
import Footer from '../Componenets/Footer';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('signIn')
    return (
        <div className='max-w-6xl mx-auto'>
           {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
           {noHeaderFooter||  <Footer></Footer>}
        </div>
    );
};

export default Main;