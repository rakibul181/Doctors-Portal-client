import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {  Link, useNavigate } from 'react-router-dom';
import Loading from '../../../Common/Loading';


const Addadoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const imageHostKey = process.env.REACT_APP_Imgbb_key
    // console.log(imageHostKey);

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctor-portal-server-sigma.vercel.app/treatmentName')
            const data = await res.json()
            return data
        }
    })



    const handelAddDoctor = (data) => {
        const formData = new FormData();
        const img = data.img[0]
        formData.append('image', img);
        
        const url=`https://api.imgbb.com/1/upload?key=${imageHostKey}`
        console.log(data);

        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(imgData=>{
            console.log(imgData);
            if(imgData.success){
                console.log(imgData.data.url)

                const doctor ={
                    name: data.name,
                    email:data.email,
                    specialty: data.specialty,
                    imgUrl:imgData.data.url,

                }
                // console.log(doctor);

                // post data on mongo
                fetch('https://doctor-portal-server-sigma.vercel.app/doctors',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json',
                    authorazation: `bearer ${localStorage.getItem('accessToken')}`

                },
                body:JSON.stringify(doctor)

                })
                .then(res=> res.json())
                .then(result=>{
                    console.log(result);
                    toast.success(`${doctor.name} is Added successfully`)
                    navigate('/dashboard/managedoctors')

                })
            }

        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="w-full md:w-2/3 lg:w-1/3 h-[800px] m-auto ">
            <h3 className='text-3xl font-bold mb-4'>Add a Doctor</h3>
            <form onSubmit={handleSubmit(handelAddDoctor)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl">Your Name</span>
                    </label>
                    <input type="text" {...register('name', { required: 'Name is requird' })} className="input input-bordered w-full " />
                    {errors.name && <p className="text-error">{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl">Your Email</span>
                    </label>
                    <input type="email" {...register('email', { required: 'Email is requird' })} className="input input-bordered w-full " />
                    {errors.email && <p className="text-error">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full mb-4 ">
                    <label className="label">
                        <span className="label-text text-xl">Pick The Treatment</span>
                    </label>


                    <select className="select select-bordered"
                        {...register("specialty")} >
                        {
                            specialties.map(specialty => <option key={specialty._id}>{specialty.name}</option>
                            )
                        }
                    </select>


                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl">Your Name</span>
                    </label>
                    <input type="file" {...register('img', { required: 'file is requird' })} className="input input-bordered w-full " />
                    {errors.img && <p className="text-error">{errors.img?.message}</p>}
                </div>

                <input className="btn btn-accent w-full" type="submit" />
                <label className="label text-center">
                    <span className="label-text text-center">
                        Already Have Account?
                        <Link to={"../login"} className="text-secondary ">
                            {' '}Login
                        </Link>
                    </span>
                </label>
            </form>
        </div>
    );
};

export default Addadoctor;