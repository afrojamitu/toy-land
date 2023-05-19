import React, { useContext } from 'react';
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/' ;

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset()
            navigate(from, {replace:true})
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='md:w-9/12 mx-5 md:mx-auto'>
            <form onSubmit={handleLogin} className=' my-20 rounded-xl w-full grid md:grid-cols-2 justify-between items-center'>
                <div className='bg-blue-50 p-10 md:p-20 space-y-4'>
                    <div>
                        <label>Email Address</label>
                        <input type="email" name='email' placeholder="Your Registered Email" className="w-full px-4 py-2 rounded-lg block" />
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password" name='password' placeholder="Your Password" className="w-full px-4 py-2 rounded-lg block" />
                    </div>

                    <input className='border-2 border-blue-400 bg-blue-400 hover:bg-transparent font-bold text-black rounded w-full py-1' style={{ transition: '0.5s' }} type="submit" value="Login" />

                    <div className="divider">OR</div>

                    <div className='flex items-center gap-5 justify-center py-4'>
                        <button className='bg-slate-300 px-2 py-2 rounded-full text-red-500'> <FaGoogle /> </button>

                        <button className='bg-slate-300 px-2 py-2 rounded-full '> <FaGithub /> </button>

                        <button className='bg-slate-300 px-2 py-2 rounded-full text-blue-500'> <FaTwitter /> </button>
                    </div>

                    <p className='text-center text-md'>New to ToyLand? <Link to='/register' className='text-blue-600 hover:underline'>Sign Up</Link></p>
                </div>

                <div className='flex justify-center'>
                    <img className='w-60' src="https://i.ibb.co/2j7hg0F/image.png" alt="" />
                </div>
            </form>
        </div>
    );
};

export default Login;