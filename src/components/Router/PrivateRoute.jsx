import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2"; // Make sure to import Swal from "sweetalert2" correctly
import { AuthContext } from "../../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <span className="loading loading-spinner text-warning"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    // If the user is not authenticated, use Swal to display an error message
    Swal.fire("Error!", "You have login first to view details", "error");

    // Navigate to the login page
    return <Navigate state={location.pathname} to="/login" replace />;
};

export default PrivateRoute;
