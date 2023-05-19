import React from 'react';
import { Link } from 'react-router-dom';

const ToyCard = ({ alltoy }) => {

    const { _id, seller_name, toy_img, toy_name, price, available_quantity, sub_category } = alltoy;

    return (
        <div className='bg-base-100 shadow-xl rounded-lg p-8 space-y-1'>
            <img className='w-full h-60' src={toy_img} alt="" />
            <h1 className='text-2xl font-bold'>{toy_name}</h1>
            <p className='text-lg'>Price: $ {price}</p>
            <p className='text-lg'>Sub Category: {sub_category}</p>
            <p className='text-lg'>Available Quantity: {available_quantity}</p>
            <h1 className='text-lg'>Seller Name: {seller_name}</h1>
            <Link to={`/toydetail/${_id}`} className='bg-blue-600 hover:bg-blue-800 font-bold text-white rounded px-4 py-1' style={{ transition: '0.5s' }} >View Detail</Link>
        </div>
    );
};

export default ToyCard;