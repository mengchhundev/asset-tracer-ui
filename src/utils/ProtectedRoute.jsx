import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    return localStorage.getItem('token') ? <Outlet/> : <Navigate to="/signin" />;
}
export default ProtectedRoute;