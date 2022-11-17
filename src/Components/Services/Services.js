import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'
import ServicesCard from './ServicesCard';
import ButtonPrimary from '../ButtonPrimary';

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
                    services.map((service, idx) => <ServicesCard key={idx} service={service}></ServicesCard>)
                }
            </div>
            <div className="hero min-h-screen  lg:px-40">
                <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='lg:ml-16'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <ButtonPrimary>Get Started</ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;