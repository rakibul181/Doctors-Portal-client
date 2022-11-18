import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate,setTreatent }) => {
    const { name, slots } = treatment
    const date = format(selectedDate, 'PP')
    const handelSubmitBooking =(e)=>{
        e.preventDefault()

        const from = e.target
        const slot = from.slot.value
        const PatientName = from.patient.value 
        const email = from.email.value
        const phone = from.phone.value

        const booking = {
            appionmentDate:date,
            treatment:name,
            patient:PatientName,
            slot:slot,
            email:email,
            phone:phone
        }
        console.log(booking);
        setTreatent(null)

    }
    return (
        <>
            <input type="checkbox" id="boking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="boking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handelSubmitBooking} className='grid grid-cols-1 gap-6 mt-10'>
                        <input name='date' type="text" value={date} disabled className="input input-bordered w-full " />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, idx) => <option key={idx} value={slot}>{slot}</option>
                                )
                            }
                        </select>
                        <input name='patient' type="text" placeholder="Name" className="input input-bordered w-full " />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full " />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full " />
                        <input type="submit" value="Submit" className='btn btn-accent w-full' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;