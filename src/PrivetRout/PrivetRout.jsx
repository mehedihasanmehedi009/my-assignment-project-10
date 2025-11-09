 
import { useContext } from "react";
 
import { Navigate } from "react-router";
import { AuthContext } from "../context/Authprovider";

const PrivateRoute = ({ children }) => {
 const{loading,user}=useContext(AuthContext)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
