import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard';
import { FaSearch } from 'react-icons/fa';

const AllToys = () => {

    const [alltoys, setAllToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])


    return (
        <div className='md:w-9/12 md:mx-auto mx-10 my-16'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>All Disney Toys</h1>
                <p className='text-lg text-slate-500'>Barbie dolls have been a beloved toy for children around the world for decades. While it is difficult to quantify exactly how much kids love Barbie, it is safe to say that Barbie has had a significant impact and a large fan base.</p>
            </div>

            <div className='my-10 grid gap-5'>

                <div className='flex justify-end items-center relative'>
                    <input type="search" name="" id="" className='border py-2 px-4 rounded-full w-full md:w-1/3'/>
                    <button className='w-8 h-8 rounded-full text-white flex items-center justify-center bg-[#000C32] absolute right-1'> <FaSearch/> </button>
                </div>

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
                        {
                            alltoys.map(alltoy => <ToyCard key={alltoy._id} alltoy={alltoy}></ToyCard>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;