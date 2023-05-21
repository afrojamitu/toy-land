import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import DeliveryMethod from '../DeliveryMethod/DeliveryMethod';
import ReadStory from '../ReadStory/ReadStory';
import ReactTab from '../Tab/ReactTab';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className='md:w-9/12 mx-10 md:mx-auto'>
                <ReactTab></ReactTab>

                <h1 className='text-3xl font-bold text-center pt-16'>Toy Gallery</h1>
                <p className='text-slate-500 text-center'>Kids toys offer endless joy and learning opportunities. From building blocks to imaginative playsets, they stimulate creativity and foster cognitive development. With a wide range of options, children can explore, discover, and have fun while engaging<br /> their minds and expanding their imagination.</p>

                <Gallery></Gallery>

                <DeliveryMethod></DeliveryMethod>

                <ReadStory></ReadStory>
            </div>
        </div>
    );
};

export default Home;