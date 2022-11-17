import React from 'react';
import ButtonPrimary from '../ButtonPrimary';
import doctor from '../../assets/images/doctor-small.png'
import appionment from '../../assets/images/appointment.png'

const Appointment = () => {
    return (
        <section style={{
            background: `url(${appionment}) `, backgroundPosition: 'center center',
            backgroundSize: 'cover'
        }}>
            <div className="hero lg:px-40 mb-0">
                <div className="hero-content flex-col items-stretch text-white pb-0 mb-0 -mt-24 lg:flex-row">
                    <img src={doctor} className="  hidden md:block flex-grow  rounded-lg lg:w-1/2" alt='' />
                    <div className='lg:ml-16 mt-36 mb-20 '>
                        <h1 className='text-secondary font-bold'>Appoinment</h1>

                        <h1 className="text-4xl font-semibold ">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <ButtonPrimary>Get Started</ButtonPrimary>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;