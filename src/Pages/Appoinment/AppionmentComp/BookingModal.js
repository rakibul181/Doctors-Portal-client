import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, selectedDate,setTreatent,refetch }) => {
    const { name, slots , price} = treatment
    const date = format(selectedDate, 'PP')
    const {user} = useContext(AuthContext)
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
            phone:phone,
            price:price 

        }
        console.log(booking);

        fetch('https://doctor-portal-server-sigma.vercel.app/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                toast.success('Booking Confirmed')
                refetch()
                setTreatent(null)
            }
            else{
                setTreatent(null)
                toast.error(data.message)
            }
        })
        

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
                        <input name='patient' type="text" placeholder="Name" className="input input-bordered w-full " disabled defaultValue={user?.displayName}/>
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full " />
                        <input name='email' type="email"  placeholder="Email" className="input input-bordered w-full " disabled defaultValue={user?.email}/>
                        <input type="submit" value="Submit" className='btn btn-accent w-full' />
                    </form>
                </div>
            </div>
            <Toaster></Toaster>
        </>
    );
};

export default BookingModal;