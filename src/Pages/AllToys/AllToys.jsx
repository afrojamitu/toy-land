import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard';

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

            <div className='my-10 grid md:grid-cols-3 gap-5'>
                {
                    alltoys.map(alltoy => <ToyCard key={alltoy._id} alltoy={alltoy}></ToyCard>)
                }
            </div>
            <div className='flex justify-center'>
                <button className='bg-[#000C32] border-2 border-[#000C32] hover:bg-transparent font-bold text-white hover:text-[#000C32] rounded px-4 py-1' style={{ transition: '0.5s' }} >View All</button>
            </div>
        </div>
    );
};

export default AllToys;