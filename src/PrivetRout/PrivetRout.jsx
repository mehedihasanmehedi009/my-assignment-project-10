 import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/Authprovider";
import { RingLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <RingLoader color="#36d7b7" />
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
