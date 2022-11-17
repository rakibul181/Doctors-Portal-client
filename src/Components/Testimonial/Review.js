import React from 'react';

const Review = ({ review }) => {
    const { text, photo, city, name } = review
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{text}</p>
                <div className="card-actions mt-6 gap-4">
                    <div className="avatar">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={photo} alt='' />
                        </div>
                        
                    </div>
                    <div>
                            <h3 className='font-semibold'>{name}</h3>
                            <p className='text-sm'>{city}</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Review;