import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';



const ChackoutForm = ({booking}) => {
    console.log(booking);
    const{price,patient,email}= booking
    const [clientSecret, setClientSecret] = useState("");
    const [ success, setSuccess] = useState("");
    const [ transactionID, setTransactionID] = useState("");
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://doctor-portal-server-sigma.vercel.app/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" ,
          authorazation:`bareae ${localStorage.getItem('accessToken')}`},
          body: JSON.stringify({ price }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }

        const {paymentIntent, error:confrimError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patient,
                  email: email
                },
              },
            },
          );

          if(confrimError){
            setCardError(confrimError.message)
            return
          }
          if(paymentIntent.status === 'succeeded'){
            setSuccess('Congratulation , payment success')
            setTransactionID(paymentIntent.id)
              console.log('payment', paymentIntent);
          }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-warning btn-xs' type="submit" disabled={!stripe||clientSecret}>
                    Pay
                </button>
            </form>
            <p className="text-error">{cardError}</p>
            <div>
                <p className="text-success">{success}</p>
                <p className="text-success">Transaction id: <span className='font-bold'>{transactionID}</span></p>
                <p></p>
            </div>
        </>
    );
};

export default ChackoutForm;