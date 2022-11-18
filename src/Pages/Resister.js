import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Resister = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleResister = (data, errors) => {
        console.log(data);
        console.log(errors);
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
                    <input type="password"  {...register('password', { required: 'Passwordis required' })} className="input input-bordered w-full " />
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
