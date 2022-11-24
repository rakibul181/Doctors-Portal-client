import React from 'react';

const OptionCard = ({ options, setTreatent }) => {
  const { name, slots,price } = options
  return (
    <div className="card  shadow-xl">
      <div className="card-body text-center">
        <h2 className=" text-2xl font-bold text-secondary ">{name}</h2>
        <p>${price}</p>
        <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
        <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
        <div className="card-actions justify-center">
          <label disabled={slots.length === 0} onClick={() => setTreatent(options)} htmlFor="boking-modal" className='btn btn-primary text-white font-bold  bg-gradient-to-r from-secondary to-primary'>Book Appoinment</label>


        </div>
      </div>
    </div>
  );
};

export default OptionCard;