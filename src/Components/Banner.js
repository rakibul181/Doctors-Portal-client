import React from 'react';
import banner from '../assets/images/chair.png'

const Banner = () => {
    return (
        <div className='hero'>
            <div className="hero-content flex-col lg:flex-row-reverse lg:py-44">
                <img  src={banner} className="max-w-xl lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary  bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;