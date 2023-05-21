import React, { useEffect, useState } from 'react';

const Tab = () => {

    const [toyByCategory, setToyByCategory] = useState([])

    const URL = `http://localhost:5000/toybycategory`
    useEffect(()=>{
        fetch()
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    },[])

    return (
        <div>
            <h1 className='text-3xl text-center font-bold my-5'>Shop by Category</h1>
        </div>
    );
};

export default Tab;