import React from "react";
import { useAuth } from "../../Contexts";
import { useNavigate } from "react-router-dom";
import "./UserDetails.css";
import { LOGOUT } from "../../Constants";
import { logoutService } from "../../Services";

const UserDetails = () => {
  const {
    authState: { user },
    authDispatch,
  } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logoutService();
    authDispatch({ type: LOGOUT });
    navigate("/");
  };
  return (
    <div className="flex-container-verticle user-deatails-page">
      <section> User email : {user}</section>
      <div>
        <button className="btn btn-primary btn-block" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
