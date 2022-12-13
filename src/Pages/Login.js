import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate, } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useToken from "../Hooks/useToken";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const { userLogin } = useContext(AuthContext)

    const [token] = useToken(userEmail)
    const location = useLocation()
    const navigate = useNavigate()


    const from = location.state?.from?.pathname || '../'

    if (token) {
        navigate(from, { replace: true })

    }
    const handleLogin = (data) => {
        console.log(data);
        setLoginError('')
        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                setUserEmail(data.email)
            })  
            .catch(e => {
                console.error(e)
                setLoginError(e.message)
            })
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
                        {...register("email", { required: 'email is requird' })}
                        className="input input-bordered w-full "
                    />
                    {errors.email && <p className="text-error">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        {" "}
                        <span className="label-text text-xl">Your Password</span>
                    </label>
                    <input
                        type="password"
                        {...register("password", {
                            required: 'Password is requird',
                            minLength: { value: 6, message: 'Password Must be 6 charecter longer  ' }
                        })}
                        className="input input-bordered w-full "
                    />
                    {errors.password && <p className="text-error">{errors.password?.message}</p>}
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
                <div>{loginError && <p className="text-error">{loginError}</p>}</div>
            </form>
            <div className="divider">OR</div>
            <div>
                <button className="btn btn-accent btn-outline w-full"> CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;
