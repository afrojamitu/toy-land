import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='relative'>
            <img className='w-full h-[100vh]' src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-Yeti-404-Page.gif" alt="" />

            <div className='absolute top-56 right-[500px]'>
            <Link to='/' className='border-2 border-white bg-white hover:bg-transparent font-bold text-black text-xl hover:text-white rounded w-full px-3 py-2' style={{ transition: '0.5s' }}>Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;