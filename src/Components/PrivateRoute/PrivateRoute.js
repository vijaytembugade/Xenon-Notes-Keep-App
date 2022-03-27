import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Contexts";

const PrivateRoute = ({ children }) => {
  const { authState: isLoggedIn } = useAuth();
  return <>{isLoggedIn ? children : <Navigate raplace to="/login" />}</>;
};

export default PrivateRoute;
