import React from 'react';
import quote from '../../assets/icons/quote.svg'
import pepole1 from '../../assets/images/people1.png'
import pepole2 from '../../assets/images/people2.png'
import pepole3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews =[
        {
            text:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name:'Winson Herry',
            city:'California',
            photo:pepole1

        },
        {
            text:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name:'Winson Herry',
            city:'California',
            photo:pepole2

        },
        {
            text:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name:'Winson Herry',
            city:'California',
            photo:pepole3

        },
    ]
    return (
         <section>
            <div className='flex justify-between items-center my-16'>
                <div >
                    <h4 className='text-secondary font-bold ml-6 '>Testimonial</h4>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <figure><img src={quote} className="w-24 lg:w-44" alt="" /></figure>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 mb-16'>
                {
                    reviews.map((review,idx)=><Review key={idx} review={review}></Review>)
                }
            </div>
         </section>
    );
};

export default Testimonial;