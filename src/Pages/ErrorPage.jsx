import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="">
            <div className="h-screen flex justify-center items-center ">
                <div>
                    <img className="w-[300px]" src="https://i.ibb.co/mb7wWKM/pngegg-2.png" alt="" />
                    <h1>Oops! Page not found <Link className="underline text-blue-900" to='/'>go to home</Link> </h1>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;