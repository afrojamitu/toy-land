import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const [error, setError] = useState()

    const handleRegister = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photoURL = form.photoURL.value;

        setError('');
        if(password !== confirmPassword){
            setError("Your Password Didn't Matched");
            return;
        }

        const newUser = {name, email, password, photoURL};
        console.log(newUser);
    }

    return (
        <div className=''>
            <div className='md:w-9/12 mx-5 md:mx-auto my-20'>
                <form onSubmit={handleRegister} className='bg-gradient-to-r from-blue-100 to-blue-50 p-10 md:p-20 rounded-xl md:w-2/3 mx-auto'>
                    <div className='space-y-4'>
                        <div>
                            <label className='text-lg'>Full Name</label>
                            <input type="name" name='name' placeholder="Your Full Name" className="w-full px-4 py-2 rounded-lg block border" />
                        </div>

                        <div>
                            <label className='text-lg'>Email Address</label>
                            <input type="email" name='email' placeholder="Your Registered Email" className="w-full px-4 py-2 rounded-lg block border" required />
                        </div>

                        <div>
                            <label className='text-lg'>Password</label>
                            <input type="password" name='password' placeholder="Your Password" className="w-full px-4 py-2 rounded-lg block border" required />
                        </div>

                        <div>
                            <label className='text-lg'>Confirm Password</label>
                            <input type="password" name='confirmPassword' placeholder="Re-enter Your Password" className="w-full px-4 py-2 rounded-lg block border" required />
                        </div>

                        <div>
                            <label className='text-lg'>Your Image URL</label>
                            <input type="text" name='photoURL' placeholder="Your Photo URL" className="w-full px-4 py-2 rounded-lg block border" required />
                        </div>

                        <input className='border-2 border-blue-400 bg-blue-400 hover:bg-transparent font-bold text-black rounded w-full py-1' style={{ transition: '0.5s' }}  type="submit" value="Register" />

                        <p className='text-red-600 text-center text-lg'>{error}</p>

                        <p className='text-center text-md'>Have an Account? <Link to='/login' className='text-blue-600 hover:underline'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;