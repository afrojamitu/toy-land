import React from 'react';
import { Link } from 'react-router-dom';

const TabData = ({ tabData }) => {
    return (
        <div>
            <div className='bg-base-100 shadow-xl border p-5 rounded-lg space-y-2'>
            
            <img className='w-32' src={tabData.toy_img} alt="" />
            <h1 className='text-xl font-bold'>{tabData.toy_name}</h1>
            <p>Price: ${tabData.price}</p>
            <div>
            <Link className="bg-[#000C32] border-2 border-[#000C32] hover:bg-transparent font-bold text-white hover:text-[#000C32] rounded px-4 py-1" style={{ transition: '0.5s' }}>Shop Now</Link>
            </div>

        </div>
        </div>
    );
};

export default TabData;