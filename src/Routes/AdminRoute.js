import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Common/Loading';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }
    if (user && isAdmin) {
        return children
    }


    return <Navigate to={'../login'} replace={location}></Navigate>
};

export default AdminRoute;