import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Myappoinment = () => {
    const { user } = useContext(AuthContext)
    const url = `https://doctor-portal-server-sigma.vercel.app/bookings?email=${user?.email}`
    const { data: bookings = [],  } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
                headers:{
                    authorazation:`bareae ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            
            return data
        }
    })
    return (
        <div>
            <h3 className='text-3xl font-semibold mb-4'>My Appionment</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   bookings.length &&
                            bookings?.map((booked, idx) => <tr key={idx}>
                                <th>{idx+1}</th>
                                <td>{booked.patient}</td>
                                <td>{booked.treatment}</td>
                                <td>{booked.appionmentDate}</td>
                                <td>{booked.slot}</td>
                                <td>{
                                    booked.price && !booked.paid?
                                    <Link to={`/dashboard/payment/${booked._id}`} ><button className='btn btn-xs btn-warning'>pay</button></Link>
                                    :
                                    <Link ><button className='btn btn-xs btn-success'>paid</button></Link>
                                    }</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myappoinment;