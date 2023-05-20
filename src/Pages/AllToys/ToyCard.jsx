import React from 'react';
import { Link } from 'react-router-dom';

const ToyCard = ({ alltoy }) => {

    const { _id, seller_name, toy_img, toy_name, price, available_quantity, sub_category } = alltoy;


    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Toy</th>
                        <th>Toy Name</th>
                        <th>Price</th>
                        <th>Sub Category</th>
                        <th>Available Quantity</th>
                        <th>Seller Name</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th></th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask rounded w-12 h-12">
                                        <img src={toy_img} alt="" />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>{toy_name}</td>
                        <td>{price}</td>
                        <td>{sub_category}</td>
                        <td>{available_quantity}</td>
                        <td>{seller_name}</td>
                        <td><button className=" bg-[#000C32] w-7 h-7 text-white rounded-full">✖</button></td>

                        <td><Link to={`/toydetail/${_id}`} className='bg-[#000C32] border-2 border-[#000C32] hover:bg-transparent font-bold text-white hover:text-[#000C32] rounded px-4 py-1' style={{ transition: '0.5s' }} >View Detail</Link></td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default ToyCard;