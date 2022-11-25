import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChackoutForm from './ChackoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIP_PK);


const Payment = () => {
    const booking = useLoaderData()
    console.log(booking);
    return (
        <div>
            <h3 className='text-3xl font-semibold'>Payment</h3>

            <Elements stripe={stripePromise}>
                <ChackoutForm booking={booking}/>
            </Elements>
        </div>
    );
};

export default Payment;