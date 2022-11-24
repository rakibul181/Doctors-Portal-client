import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';


const DashboardLayout = () => {
    const{user} =useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    console.log(isAdmin);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-menu" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to={'../dashboard'} >Dashboard</Link></li>
                        {
                            isAdmin && <>
                            <li><Link to={'../dashboard/alluser'}>All Users</Link></li>
                            <li><Link to={'../dashboard/add-doctor'}>Add a Doctor</Link></li>
                            <li><Link to={'../dashboard/managedoctors'}>Manage Doctors</Link></li>
                            </>
                        }
                         
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;