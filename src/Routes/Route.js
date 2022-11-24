import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Allusers from "../Pages/AllUser/Allusers";
import Appoinment from "../Pages/Appoinment/Appoinment";
import Addadoctor from "../Pages/Dashboard/AddaDoctor/Addadoctor";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MangeDoctors from "../Pages/Dashboard/ManageDoctors/MangeDoctors";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Payment from "../Pages/Payment/Payment";
import Resister from "../Pages/Resister";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/appionment',
                element:<Appoinment></Appoinment>
            },
            {
                path:'/resister',
                element:<Resister></Resister>,
            }
        ]


    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard/',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard/alluser',
                element: <AdminRoute><Allusers></Allusers></AdminRoute>,
                
            }
            ,
            {
                path:'/dashboard/add-doctor',
                element: <AdminRoute><Addadoctor></Addadoctor></AdminRoute>,
                
            }
            ,
            {
                path:'/dashboard/managedoctors',
                element: <AdminRoute> <MangeDoctors></MangeDoctors></AdminRoute>,
                
            }
            ,
            {
                path:'/dashboard/payment/:id',
                element: <AdminRoute> <Payment></Payment></AdminRoute>,
                loader:({params})=> fetch(`http://localhost:5000/booking/${params.id}`)
                
            }
        ]
    }
])