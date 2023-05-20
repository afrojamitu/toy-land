import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToy from './MyToy';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    console.log(myToys);

    const url = `http://localhost:5000/myToys?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [user, url])

    return (
        <div className='md:w-9/12 md:mx-auto mx-10'>
            <h1 className='text-3xl text-center font-bold my-5'>My toys</h1>

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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        myToys.map(toy => <MyToy key={toy._id} toy={toy}></MyToy>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyToys;