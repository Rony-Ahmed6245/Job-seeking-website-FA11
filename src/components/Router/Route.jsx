
import { createBrowserRouter } from "react-router-dom";
import AddaJobs from "../../Pages/AddaJobs";
import AllJobs from "../../Pages/AllJobs";
import AppliedJobs from "../../Pages/AppliedJobs";
import Blog from "../../Pages/Blog";
import ErrorPage from "../../Pages/ErrorPage";
import Home from "../../Pages/Home";
import JobDetail from "../../Pages/JobDetail";
import MyJobs from "../../Pages/MyJobs";

import Login from "../Login/Login";
import Register from "../Login/Register/Register";
import Root from "../Root/Root";
import PrivateRoute from "./PrivateRoute";


//     console.log(user);
// const user = true ;
const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/allJobs',
                element:<AllJobs></AllJobs>,
                loader: () => fetch("https://job-protal-server.vercel.app/v1/jobs"),
            },
            {
                path:'/appliedJobs',
                element:<AppliedJobs></AppliedJobs>,
            },
            {
                path:'/addAjobs',
                element:<AddaJobs></AddaJobs>
            },
          {
               path:'/myJobs',
                element:<MyJobs></MyJobs>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/v1/details/:id',
                element:<PrivateRoute><JobDetail></JobDetail></PrivateRoute>,
                loader: () => fetch("https://job-protal-server.vercel.app/v1/jobs"),
            }
           
        ]
    }



])

export default myCreateRoute;