import React from 'react';

const Banner = () => {
    return (
        <div className='bg-slate-50'>
            <div className='grid md:grid-cols-2 gap-5 items-center md:w-9/12 mx-auto mb-10'>
                <div className='space-y-5'>
                    <h1 className='text-5xl font-bold'>Best Disney Princess Toy Store In Town!</h1>

                    <button className='border-2 border-blue-400 bg-blue-400 hover:bg-transparent font-bold text-black rounded px-4 py-1' style={{ transition: '0.5s' }} >Know About This Marketplace</button>
                </div>

                <div className='mt-5'>
                    <img src="/src/assets/images/banner.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;