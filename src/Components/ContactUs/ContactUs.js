import React from 'react';
import appionment from '../../assets/images/appointment.png'


const ContactUs = () => {
    return (
        <div className='mt-24 py-14' style={{
            background: `url(${appionment}) `, backgroundPosition: 'center center',
            backgroundSize: 'cover'
        }}
    
        >
                <h4 className='text-center text-secondary'>Contact Us</h4>
                <h1 className='text-4xl mb-8 text-white text-center'>Stay connected with us</h1> 
                
                <form className='mx-auto w-full md:w-1/2 lg:w-1/3'>
                    <input className='input w-full my-3' type="email" placeholder='Email' /><br />
                    <input className='input w-full my-3'  type="text" placeholder='Subject' /><br />
                    <textarea className="textarea w-full my-3" placeholder="Bio"></textarea>
                    <div className='flex justify-center'>
                    <button type='submit' className="btn btn-primary  text-white font-bold  bg-gradient-to-r from-secondary to-primary">SUBMIT</button>
                    </div>
                </form>
        </div>
    );
};

export default ContactUs;