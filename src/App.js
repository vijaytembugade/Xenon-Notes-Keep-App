import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import UserDetails from "./Pages/UserDetails/UserDetails";

function App() {
  return (
    <div className="App">
      <Header />
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
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
