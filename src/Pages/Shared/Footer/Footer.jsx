import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-blue-50'>
            <footer className="footer w-9/12 mx-auto my-10 py-10 text-base-content">
                <div className='space-y-3'>
                    <div className='flex items-center'>
                        <img className='w-28' src="/src/assets/images/logo.png" alt="" />
                        <h1 className='text-3xl font-bold border-b-2 border-blue-500 rounded-lg'>ToyLand</h1>
                    </div>
                    <p className='flex items-center gap-3'><FaMapMarkerAlt className=' text-lg' />North Patenga, Chittagong</p>
                    <p className='flex items-center gap-3'><FaEnvelope className='text-md' />afrojamituu@gmail.com</p>
                    <p className='flex items-center gap-3'><FaPhone className='text-md' />+880133 333 333</p>
                </div>
                <div className='md:pt-16'>
                    <span className="footer-title">Quick Links</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/allToys' className="link link-hover">All Toys</Link>
                    <Link to='/add-a-toy' className="link link-hover">Add a Toy</Link>
                    <Link to='/blogs' className="link link-hover">Blogs</Link>
                </div>
                <div className='md:pt-16'>
                    <span className="footer-title">Follow Us</span>
                    <button className='flex items-center gap-3'><FaFacebook className='bg-blue-200 w-7 h-7 p-1 rounded-lg text-blue-600' />Toy Land</button>

                    <button className='flex items-center gap-3'><FaLinkedin className='bg-blue-200 w-7 h-7 p-1 rounded-lg text-blue-800' />ToyLand</button>

                    <button className='flex items-center gap-3'><FaInstagram className='bg-blue-200 w-7 h-7 p-1 rounded-lg text-pink-500' />_toy_land_</button>

                    <button className='flex items-center gap-3'><FaYoutube className='bg-blue-200 w-7 h-7 p-1 rounded-lg text-red-500' />toyland</button>
                </div>
            </footer>

            <div className='text-center py-8 border-t-2 border-blue-200'>
                <p>Copyright © 2023 - All right reserved by Toy Land ltd</p>
            </div>
        </div>
    );
};

export default Footer;