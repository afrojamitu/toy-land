import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

const Register = () => {

    const [error, setError] = useState()
    const { createUser, googleSignIn } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photoURL = form.photoURL.value;

        setError('');
        if (password !== confirmPassword) {
            setError("Your Password Didn't Matched");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result);
        })
        .catch(error => console.log(error))
    }

    return (
        <div className=''>
            <div className='md:w-9/12 mx-5 md:mx-auto mt-10 mb-20'>
            <h1 className='text-3xl text-center font-bold pb-8'>Register an Account</h1>
                <form onSubmit={handleRegister} className='bg-purple-200 p-10 md:p-20 rounded-xl md:w-2/3 mx-auto'>
                    <div className='space-y-4'>
                        <div>
                            <label className='text-lg font-semibold mb-1'>Full Name</label>
                            <input type="name" name='name' placeholder="Your Full Name" className="w-full px-4 py-2 rounded-lg block border" />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Email Address</label>
                            <input type="email" name='email' placeholder="Your Registered Email" className="w-full px-4 py-2 rounded-lg block border" required />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Password</label>
                            <input type="password" name='password' placeholder="Your Password" className="w-full px-4 py-2 rounded-lg block border" required />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Confirm Password</label>
                            <input type="password" name='confirmPassword' placeholder="Re-enter Your Password" className="w-full px-4 py-2 rounded-lg block border" required />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Your Image URL</label>
                            <input type="text" name='photoURL' placeholder="Your Photo URL" className="w-full px-4 py-2 rounded-lg block border" required />
                        </div>

                        <input className='bg-[#000C32] border-2 border-[#000C32] hover:bg-transparent font-bold text-white hover:text-[#000C32] rounded w-full py-1' style={{ transition: '0.5s' }} type="submit" value="Register" />

                        <p className='text-red-600 text-center text-lg'>{error}</p>

                        <div className="divider">OR</div>

                    <div className='flex items-center gap-5 justify-center py-4'>
                        <button onClick={handleGoogleSignIn} className='bg-slate-300 px-2 py-2 rounded-full text-red-500'> <FaGoogle /> </button>

                        <button className='bg-slate-300 px-2 py-2 rounded-full '> <FaGithub /> </button>

                        <button className='bg-slate-300 px-2 py-2 rounded-full text-blue-500'> <FaTwitter /> </button>
                    </div>

                        <p className='text-center text-md'>Have an Account? <Link to='/login' className='text-blue-600 hover:underline'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;