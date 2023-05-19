import React from 'react';
import { Link } from 'react-router-dom';

const AddaToy = () => {
    return (
        <div>
            <form className=' my-20 rounded-xl w-full grid md:grid-cols-2 justify-between items-center'>
                <div className='bg-blue-50 p-10 md:p-20 space-y-4'>
                    <div>
                        <label>Email Address</label>
                        <input type="email" name='email' placeholder="Your Registered Email" className="w-full px-4 py-2 rounded-lg block" />
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password" name='password' placeholder="Your Password" className="w-full px-4 py-2 rounded-lg block" />
                    </div>

                    <input className='border-2 border-blue-400 bg-blue-400 hover:bg-transparent font-bold text-black rounded w-full py-1' style={{ transition: '0.5s' }} type="submit" value="Add Toy" />


                    <p className='text-center text-md'>View <Link to='/register' className='text-blue-600 underline'>Terms and Conditions</Link></p>
                </div>
            </form>
        </div>
    );
};

export default AddaToy;