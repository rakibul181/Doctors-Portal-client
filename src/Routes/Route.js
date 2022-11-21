import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appoinment from "../Pages/Appoinment/Appoinment";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Resister from "../Pages/Resister";
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
                path:'login',
                element:<Login></Login>
            },
            {
                path:'appionment',
                element:<Appoinment></Appoinment>
            },
            {
                path:'resister',
                element:<Resister></Resister>,
            }
        ]


    },
    {
        path:'Dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    }
])