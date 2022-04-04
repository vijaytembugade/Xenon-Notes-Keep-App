import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Homepage from "../Pages/Homepage/Homepage";
import Login from "../Pages/Login/Login";
import Notes from "../Pages/Notes/Notes";
import Signup from "../Pages/Signup/Signup";
import UserDetails from "../Pages/UserDetails/UserDetails";

const MainRoutes = () => {
  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/user-details"
            element={
              <PrivateRoute>
                <UserDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/notes/*"
            element={
              <PrivateRoute>
                <Notes />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default MainRoutes;
