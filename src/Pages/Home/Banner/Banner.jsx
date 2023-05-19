import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='bg-slate-50 banner-bg'>
            <div className='flex items-center justify-between md:w-9/12 mx-auto gap-10 '>
                <p>.</p>
                <div className='space-y-5 w-[500px] my-32 ps-10'>
                    <h1 className='text-6xl font-bold'>Best Disney Princess Toy Store In Town!</h1>

                    <button className='bg-blue-600 hover:bg-blue-800 font-bold text-white rounded px-4 py-1' style={{ transition: '0.5s' }} >Know About This Marketplace</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;