import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appoinment from "../Pages/Appoinment/Appoinment";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

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
            }
        ]


    }
])