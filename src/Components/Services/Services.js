import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import ServicesCard from './ServicesCard';

const Services = () => {
    const services = [
        {
            name: 'Fluoride Treatment',
            photo: fluoride,
            details: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form'
        },
        {
            name: 'Cavity Fillingt',
            photo: cavity,
            details: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form '
        },
        {
            name: 'Teeth WHitening',
            photo: whitening,
            details: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form '
        }
    ]
    return (
        <div className='my-28'>
            <h1 className='text-center text-secondary font-bold'>OUR SERVICES</h1>
            <h1 className='text-center text-4xl'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                {
                    services.map((service,idx)=><ServicesCard key={idx} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;