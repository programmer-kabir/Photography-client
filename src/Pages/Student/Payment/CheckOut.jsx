import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button, Card } from 'flowbite-react';
import React, { useState } from 'react';

const CheckOut = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('');
    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);
        if(card === null){
          return
        }
        console.log('cad pai',card);
        // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message);
    } else {
      setCardError('');
      console.log('PaymentMethod', paymentMethod);
    }

    }
    return (
        <div>
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
      <Button color="purple"
          className='mx-auto mt-8' type="submit" disabled={!stripe}>
        Pay
      </Button >
    </form>
    {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
        </div>
    );
};

export default CheckOut;