import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useToken from "../Hooks/useToken";

const Resister = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser, updateUser } = useContext(AuthContext)
    const [userCreatedEmail, setUserCreatedEmail] = useState([''])
    const navigate = useNavigate()
    const [token] = useToken(userCreatedEmail)

    if (token) { 
        navigate('/')
    }
    const handleResister = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                toast.success('User Created successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        toast.success('User Name Update')
                        saveUserInfo(data.name, data.email)
                    })  

            })
            .catch(e => console.error(e))

        const saveUserInfo = (name, email) => {
            const user = {
                name,
                email
            }

            fetch('https://doctor-portal-server-sigma.vercel.app/users', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {

                    setUserCreatedEmail(email)


                })
        }


    }
    return (
        <div className="w-full md:w-2/3 lg:w-1/3 h-[800px] m-auto ">
            <h3 className="text-2xl text-center text-primary my-8">Resister</h3>
            <form onSubmit={handleSubmit(handleResister)}>
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
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text text-xl">Your Password</span>
                    </label>
                    <input type="password"  {...register('password', { required: 'Passwordis required', minLength: { value: 6, message: 'password must be 8 charecter' } })} className="input input-bordered w-full " />
                    {errors.password && <p className="text-error">{errors.password?.message}</p>}
                    <input />
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
            <div className="divider">OR</div>
            <div>
                <button className="btn btn-accent btn-outline w-full">
                    {" "}
                    CONTINUE WITH GOOGLE
                </button>
            </div>

        </div>
    );
};

export default Resister;
