import React from 'react';

const Banner = () => {
    return (
        <div className=' bg-pink-50'>
            <div className='grid md:grid-cols-2 gap-5 items-center md:w-9/12 mx-auto mb-10'>

                <div className='mt-5'>
                    <img src="/src/assets/images/banner.png" alt="" />
                </div>
                <div className='space-y-5'>
                    <h1 className='text-5xl font-bold'>Hey! It's <span className='text-blue-600 text-6xl'>Rapunzel</span>. <br />Who Are You?</h1>

                    <div>
                        <label className='text-xl mb-3'>Wanna talk with Rapunzel?</label>
                        <input type="text" placeholder="Say Hello To Rapunzel!" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;