import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOut from './CheckOut';
import useSlected from '../../../Hooks/useSlected';

const stripePromiss = loadStripe(import.meta.env.VITE_STRIPE_KEY)
const Payment = () => {
    const [selected, refetch] = useSlected();

    return (
        <div className='w-1/2 mx-auto'>
            <h2 className='mb-9'>Tk nai kmne payment kormo idea dew</h2>
            <Elements stripe={stripePromiss}>
                <CheckOut></CheckOut>
             </Elements> 
        </div>
    );
};

export default Payment;