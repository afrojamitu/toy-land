import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className='bg-[#000C32]'>
            <div className="navbar md:w-9/12 mx-auto h-20 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 space-y-5 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'> Home</Link>
                            <Link to='/allToys'>All Toys</Link>
                            {
                                user && <>
                                    <Link to='/myToys'>My Toys</Link>
                                    <Link to='/add-a-toy'>Add A Toy</Link>
                                </>
                            }
                            <Link to='/blogs'>Blogs</Link>

                            {
                                user?.email ? <button onClick={handleLogout} className='bg-white border-2 border-white hover:bg-transparent font-bold text-purple-700 hover:text-white rounded px-4 py-1' style={{ transition: '0.5s' }}>Logout</button>
                                    :
                                    <Link to='/login' className='bg-white border-2 border-white hover:bg-transparent font-bold text-purple-700 hover:text-white rounded px-4 py-1' style={{ transition: '0.5s' }}>Login</Link>
                            }

                        </ul>
                    </div>
                    <div>
                        <Link to='/' className='flex items-center'><img className='w-20 hidden md:block' src="https://i.ibb.co/0GvR3S0/png-transparent-belle-castle-disney-princess-castle-photography-world-disney-princess-thumbnail-remo.png" alt="" /><span className='text-3xl font-bold border-b-2 py-1 border-purple-500 rounded-lg'>ToyLand</span></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold space-x-5">
                        <Link to='/'> Home</Link>
                        <Link to='/allToys'>All Toys</Link>
                        {
                            user && <>
                                <Link to='/myToys'>My Toys</Link>
                                <Link to='/add-a-toy'>Add A Toy</Link>
                            </>
                        }
                        <Link to='/blogs'>Blogs</Link>

                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    {
                        user && <img className='w-12 rounded-full' src="/src/assets/images/Afroja-Akther-Mitu.png" alt="" />
                    }

                    {
                        user?.email ? <button onClick={handleLogout} className='bg-white border-2 border-white hover:bg-transparent font-bold text-purple-700 hover:text-white rounded px-4 py-1' style={{ transition: '0.5s' }}>Logout</button>
                            :
                            <Link to='/login' className='bg-white border-2 border-white hover:bg-transparent font-bold text-purple-700 hover:text-white rounded px-4 py-1' style={{ transition: '0.5s' }}>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;