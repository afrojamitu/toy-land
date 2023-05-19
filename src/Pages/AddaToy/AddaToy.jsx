import React from 'react';
import { Link } from 'react-router-dom';

const AddaToy = () => {
    return (
        <div className='md:w-9/12 md:mx-auto mx-10'>
            <form className=' my-20 rounded-xl w-full'>
                <div className='bg-blue-50 p-10 md:p-20 space-y-4'>
                    <h1 className='text-3xl text-center font-bold pb-8'>Add a Toy</h1>
                    <div className='grid md:grid-cols-2 gap-8'>
                        <div>
                            <label>Toy Name</label>
                            <input type="toyName" name='toyName' placeholder="Toy Name" className="w-full px-4 py-2 rounded-lg block" />
                        </div>

                        <div>
                            <label>Sub Category</label>
                            <input type="subCategory" name='subCategory' placeholder="Sub Category" className="w-full px-4 py-2 rounded-lg block" />
                        </div>

                        <div>
                            <label>Price</label>
                            <input type="price" name='price' placeholder="Price $" className="w-full px-4 py-2 rounded-lg block" />
                        </div>

                        <div>
                            <label>Rating</label>
                            <input type="rating" name='rating' placeholder="Rating" className="w-full px-4 py-2 rounded-lg block" />
                        </div>

                        <div>
                            <label>Available Quantity</label>
                            <input type="quantity" name='quantity' placeholder="Available Quantity" className="w-full px-4 py-2 rounded-lg block" />
                        </div>

                        <div>
                            <label>Photo URl</label>
                            <input type="photoURl" name='photoURl' placeholder="Photo URl" className="w-full px-4 py-2 rounded-lg block" />
                        </div>

                        <div>
                            <label>Seller Name</label>
                            <input type="sellerName" name='sellerName' placeholder="Seller Name" className="w-full px-4 py-2 rounded-lg block" />
                        </div>

                        <div>
                            <label>Seller Email</label>
                            <input type="sellerEmail" name='sellerEmail' placeholder="Seller Email" className="w-full px-4 py-2 rounded-lg block" />
                        </div>

                    </div>

                    <div>
                    <label>Description</label>
                    <textarea className='w-full rounded-lg px-4 py-2' name="description" id="" rows="5" placeholder='Add a detailed descrition about your toy...'></textarea>
                    </div>

                    <input className='border-2 border-blue-400 bg-blue-400 hover:bg-transparent font-bold text-black rounded w-full py-1' style={{ transition: '0.5s' }} type="submit" value="Add Toy" />


                    <p className='text-center text-md'>View <Link to='/register' className='text-blue-600 underline'>Terms and Conditions</Link></p>
                </div>
            </form>
        </div>
    );
};

export default AddaToy;