import React from 'react';

const Card = ({card}) => {
    const{icon, info,bgColor,heading} = card
    return (
        <div className={`card md:card-side ${bgColor}  text-white bg-base-100 shadow-xl`}>
            <figure className='px-5 pt-5'><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{heading}</h2>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default Card;