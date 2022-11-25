import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConformationModal from '../../../Common/ConformationModal';
import Loading from '../../../Common/Loading';

const MangeDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('https://doctor-portal-server-sigma.vercel.app/doctors',{
                headers:{
                    authorazation: `bearer ${localStorage.getItem('accessToken')}`
    
                }
            })
            const data = await res.json()
            return data
        }

    })
    const closeModal = () => {
        setDeletingDoctor(null)
    }
    const handelDeleteDoctor = (doctor) => {
        const { _id, name } = doctor

        console.log(doctor);

        fetch(`https://doctor-portal-server-sigma.vercel.app/doctors/${_id}`, {
            method: 'DELETE',
            headers:{
                authorazation: `bearer ${localStorage.getItem('accessToken')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.error(`Doctor ${name} deleteted`)
                refetch()
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl'>Manage Doctors</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Avater</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.length &&
                            doctors?.map((doctor, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-20 rounded-full">
                                        <img src={doctor.imgUrl} alt=" " />
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label htmlFor="conformation-modal"
                                        onClick={() => setDeletingDoctor(doctor)}
                                        className='btn btn-error btn-xs'>Delete</label>

                                </td>
                                <ConformationModal
                                    modalTitle={`Are You sure to delete ${doctor.name} ?`}
                                    modalBody={'if you deleted a doctor its permanently delete form this wensite '}
                                    closeModal={closeModal}
                                    action={handelDeleteDoctor}
                                    actionText={'Delete'}
                                    actoinData={deletingDoctor}

                                ></ConformationModal>
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MangeDoctors;