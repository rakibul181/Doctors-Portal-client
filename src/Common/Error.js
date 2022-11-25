import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Error = () => {
    const error = useRouteError()
    const {logOut}=useContext(AuthContext)
    const handelLogout = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))


    }
    return (
        <div>
            <p className='text-5xl text-center font-extrabold text-error-content'>Some thing Wrong</p>
            <p className='text-2xl text-center font-extrabold text-error-content'>{error.statusText|| error.message}</p>
            <div>
                <Link to={'/'}><button className='btn m-4 btn-primary'>Home</button></Link>
                <button  onClick={handelLogout} className='btn m-4 btn-error'>Logout</button>
            </div>
        </div>
    );
};

export default Error;