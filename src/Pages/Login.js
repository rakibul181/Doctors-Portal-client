import React, {  } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin =(data) =>{
        console.log(data);
    }
   
    return (
        <div className="w-full md:w-2/3 lg:w-1/3 h-[800px] m-auto ">
            <h3 className="text-2xl text-center text-primary my-8">Login</h3>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full ">
                    <label className="label">
                        {" "}
                        <span className="label-text text-xl">Your Email</span>
                    </label>
                    <input
                        type="email"
                        {...register("email")}
                        className="input input-bordered w-full "
                    />
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        {" "}
                        <span className="label-text text-xl">Your Password</span>
                    </label>
                    <input
                        type="password"
                        {...register("password")}
                        className="input input-bordered w-full "
                    />
                    <label className="label">
                        {" "}
                        <span className="label-text">Forgot Password?</span>
                    </label>
                    <input />
                    
                </div>

                <input className="btn btn-accent w-full" type="submit" />
                <label className="label text-center">
                        <span className="label-text text-center">New To Doctors Portal? <Link to={'../resister'} className='text-secondary '> Create New Account </Link></span>
                    </label>
            </form>
            <div className="divider">OR</div>
            <div>
                <button className="btn btn-accent btn-outline w-full"> CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;
