import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='bg-slate-50 banner-bg'>
            <div className='flex items-center justify-start md:w-9/12 mx-auto gap-10 '>
                
                <div className='space-y-5 my-36 ps-10 text-white' data-aos="fade-right" data-aos-duration="2000">
                    <h1 className='text-4xl md:text-7xl font-bold'>Best Disney Princess Toy Store In Town!</h1>
                    <p className='text-slate-300'>From building blocks to imaginative playsets, they stimulate creativity and foster cognitive development. With a wide range of options, children can explore, discover, and have fun while engaging<br/> their minds and expanding their imagination</p>

                    <button className='bg-white border-2 border-white hover:bg-transparent font-bold text-purple-700 hover:text-white rounded px-4 py-1' style={{ transition: '0.5s' }} >Know About This Marketplace</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;