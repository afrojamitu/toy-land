import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyToy = ({ toy }) => {
    const { _id, toy_img, toy_name, price, available_quantity, sub_category } = toy;
    return (

        <tbody>
            {/* row 1 */}
            <tr>
                <th></th>
                <td>
                    <span className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask rounded w-12 h-12">
                                <img src={toy_img} alt="" />
                            </div>
                        </div>
                    </span>
                </td>
                <td>{toy_name}</td>
                <td>{price}</td>
                <td>{sub_category}</td>
                <td>{available_quantity}</td>
                <td><button className="flex items-center justify-center bg-[#000C32] w-8 h-8 text-white rounded-full"><FaTrashAlt/></button></td>
                <td><button className="flex items-center justify-center bg-[#000C32] w-8 h-8 text-white rounded-full"><FaEdit/></button></td>
            </tr>
        </tbody>


    );
};

export default MyToy;