import React from 'react';
import Banner from '../Components/Banner';
import Cards from '../Components/Cards';
import Services from '../Components/Services/Services';
import bg from '../assets/images/bg.png'
import Appointment from '../Components/Appointment/Appointment';
import Testimonial from '../Components/Testimonial/Testimonial';
import ContactUs from '../Components/ContactUs/ContactUs';

const Home = () => {
    return (
        <div className='mx-5'>
            <section style={{
                background: `url(${bg})`, backgroundPosition: 'center center',
                backgroundSize: 'cover'
            }}>
                <Banner></Banner>
                <Cards></Cards>
            </section>
            <Services></Services>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;