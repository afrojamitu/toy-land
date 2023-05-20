import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'

const AddaToy = () => {

    const {user} = useContext(AuthContext);

    const handleAddToy = event =>{
        event.preventDefault();

        const form = event.target;
        const toyName = form.toyName.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const photoURL = form.photoURL.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const description = form.description.value;

        const addToy ={
            toyName,
            sub_ategory : subCategory,
            price,
            rating,
            available_quantity: quantity,
            toy_img: photoURL,
            seller_name: sellerName,
            seller_email: sellerEmail,
            description
        }
        console.log(addToy);

        fetch('http://localhost:5000/alltoys',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully added a toy!',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
                  form.reset()
            }
        })
    }

    return (
        <div className='md:w-9/12 md:mx-auto mx-10'>
            <h1 className='text-3xl text-center font-bold pt-8'>Add a Toy</h1>
            <form onSubmit={handleAddToy} className='mb-20 mt-10 rounded-xl w-full'>
                <div className='bg-purple-200 p-10 md:p-20 space-y-4'>
                    <div className='grid md:grid-cols-2 gap-8'>
                        <div>
                            <label className='text-lg font-semibold mb-1'>Toy Name</label>
                            <input type="toyName" name='toyName' placeholder="Toy Name" className="w-full px-4 py-2 rounded-lg block" />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Sub Category</label>
                            <input type="subCategory" name='subCategory' placeholder="Sub Category" className="w-full px-4 py-2 rounded-lg block" />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Price</label>
                            <input type="price" name='price' placeholder="Price $" className="w-full px-4 py-2 rounded-lg block" />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Rating</label>
                            <input type="rating" name='rating' placeholder="Rating" className="w-full px-4 py-2 rounded-lg block" />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Available Quantity</label>
                            <input type="quantity" name='quantity' placeholder="Available Quantity" className="w-full px-4 py-2 rounded-lg block" />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Photo URl</label>
                            <input type="photoURl" name='photoURL' placeholder="Photo URL" className="w-full px-4 py-2 rounded-lg block" />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Seller Name</label>
                            <input type="sellerName" name='sellerName' defaultValue={user?.displayName} placeholder="Seller Name" className="w-full px-4 py-2 rounded-lg block" />
                        </div>

                        <div>
                            <label className='text-lg font-semibold mb-1'>Seller Email</label>
                            <input type="sellerEmail" defaultValue={user && user.email} name='sellerEmail' placeholder="Seller Email" className="w-full px-4 py-2 rounded-lg block" readOnly/>
                        </div>

                    </div>

                    <div>
                    <label className='text-lg font-semibold mb-1'>Description</label>
                    <textarea className='w-full rounded-lg px-4 py-2' name="description" id="" rows="5" placeholder='Add a detailed descrition about your toy...'></textarea>
                    </div>

                    <input className='bg-[#000C32] border-2 border-[#000C32] hover:bg-transparent font-bold text-white hover:text-[#000C32] rounded w-full py-1' style={{ transition: '0.5s' }} type="submit" value="Add Toy" />


                    <p className='text-center text-md'>View <Link to='/register' className='text-blue-600 underline'>Terms and Conditions</Link></p>
                </div>
            </form>
        </div>
    );
};

export default AddaToy;