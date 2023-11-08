import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from 'sweetalert';
import img from "../../assets/logo.svg"


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    // console.log(user);

    const handelLogout = () => {
        logOut()
            .then(result => {
                // console.log(result);
                swal("Success", "Logout successfully", "success")
                return
            })
            .catch(err => {
                swal("Error", "Logout not successfully", "Error")
            })
    }



    const home = <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#0DBC95] underline" : "text-black"
        }
    >
        Home
    </NavLink>;
    const alljobs = <NavLink
        to="/allJobs"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "  underline text-[#0DBC95] " : "text-black"
        }
    >
        All Jobs
    </NavLink>;
    const appliedJobs = <NavLink
        to="/appliedJobs"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "  underline text-[#0DBC95]" : "text-black"
        }
    >
        Applied Jobs
    </NavLink>;
    const addAjobs = <NavLink
        to="/addAjobs"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#0DBC95] underline " : "text-black"
        }
    >
        Add a jobs
    </NavLink>;
    const myJobs = <NavLink
        to="/myJobs"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#0DBC95] underline" : "text-black"
        }
    >
        My Jobs
    </NavLink>;
    const blog = <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#0DBC95] underline " : "text-black"
        }
    >
        Blog
    </NavLink>;




    return (
        <div className=" shadow-sm py-4">
            <div className="max-w-screen-xl	 mx-auto md:px-2">
                <div className="px-4 md:px-4 lg:px-4   bg-none z-30 relative ">
                    <div className="navbar flex justify-between items-center ">
                        <div>
                            <img className=" " src={img} alt="" />

                        </div>
                        <div  >
                            <div className="dropdown">
                                <label tabIndex={1} className="btn btn-ghost btn-circle avatar lg:hidden flex-col">
                                    {
                                        user ? <>
                                            <div className="w-10 rounded-full flex items-center ">
                                                <img src={user.photoURL == null ? 'https://i.ibb.co/2vkJbGD/images.png' : user.photoURL} alt="" />
                                            </div>
                                            {/* <p className="font-mono">{user.displayName == null ? 'MR' : user.displayName}</p> */}
                                        </> :
                                            <>

                                            </>
                                    }
                                </label>
                                <ul tabIndex={0} className=" menus menu-sm dropdown-content bg-white  py-6 border z-[10]   px-4  -left-20 ">

                                    <div className="space-y-2">
                                        {

                                            user ? <>
                                                <h1 className="text-center underline">Profile</h1>
                                                <p className="font-mono py-2">{user.displayName == null ? 'MR XYZ' : user.displayName}</p>
                                                <Link onClick={handelLogout} className="  px-4 font-medium text-white bg-red-400 border-2 rounded-full">
                                                    Logout
                                                </Link>
                                            </> :
                                                <>
                                                </>
                                        }
                                    </div>
                                </ul>
                            </div>
                            <div className="dropdown">

                                <label tabIndex={1} className="btn btn-ghost lg:hidden flex-col ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[50px] text-black w-[50px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className=" menus menu-sm dropdown-content  space-y-4 py-10 rounded  bg-white design   z-[10]    -left-20 ">
                                    <div className="w-[150px] space-y-4">
                                        <li className="uppercase  px-3">{home}</li>
                                        <li className="uppercase  px-3">{alljobs}</li>
                                        <li className="uppercase  px-3">{blog}</li>
                                        <li className="space-y-4">
                                            {
                                                user ? <>
                                                    <li className="uppercase  px-3">{appliedJobs}</li>
                                                    <li className="uppercase px-3">{addAjobs}</li>
                                                    <li className="uppercase  px-3">{myJobs}</li>

                                                </> :
                                                    <>

                                                        <Link to='/login' className="  px-4 font-medium bg-[#0DBC95] border-2 rounded-full text-white ">
                                                            Login
                                                        </Link>
                                                    </>
                                            }
                                        </li>
                                    </div>
                                </ul>

                            </div>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className=" menu-horizontal flex items-center px-4 gap-2 lg:gap-5  text-white font-medium md:font-bold">
                                <div className="ml-auto gap-5 flex md:mx-[80px] lg:mx-[150px] font-medium">
                                    <li className="">{home}</li>
                                    <li className="">{alljobs}</li>
                                    <li className="">{blog}</li>
                                    {
                                        user && <><p className="">{appliedJobs}</p>
                                            <p className="">{addAjobs}</p>
                                            <p className="">{myJobs}</p></>


                                    }
                                </div>

                                {
                                    user ? <>

                                        <div className="dropdown">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                {
                                                    user ? <>
                                                        <div className="w-10 rounded-full flex items-center">
                                                            <img src={user.photoURL == null ? 'https://i.ibb.co/2vkJbGD/images.png' : user.photoURL} alt="" />
                                                        </div>

                                                    </> :
                                                        <>

                                                        </>
                                                }
                                            </label>
                                            <ul tabIndex={0} className=" menus menu-sm dropdown-content bg-white  py-6 border z-[10]   px-4  -left-20 ">

                                                <div className="space-y-2">
                                                    {

                                                        user ? <>
                                                            <div className="flex-col items-center">
                                                                <h1 className="text-center underline text-black">Profile</h1>
                                                                <p className="font-mono py-2 text-black">{user.displayName == null ? 'MR XYZ' : user.displayName}</p>
                                                                <Link onClick={handelLogout} className=" text-white px-4 rounded-full font-medium bg-red-400 border-2  ">
                                                                    Logout
                                                                </Link>
                                                            </div>

                                                        </> :
                                                            <>
                                                            </>
                                                    }
                                                </div>
                                            </ul>
                                        </div>


                                    </> :
                                        <>

                                            <Link to='/login' className=" py-2 px-4 rounded-full font-medium border-2 bg-[#0DBC95] text-white md:ml-4 lg:ml-6">
                                                Login
                                            </Link>
                                        </>
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;