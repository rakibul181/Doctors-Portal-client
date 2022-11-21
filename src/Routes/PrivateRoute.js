import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const{user,loading}=useContext(AuthContext)
    if(loading){
        return <div className='m-auto'><progress className=" progress w-56"></progress></div>
    }
     if(user){
        return children
     }

     return <Navigate to={'../login'} replace={location}></Navigate>
};

export default PrivateRoute;