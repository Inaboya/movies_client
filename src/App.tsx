import React, { useEffect } from "react";
import "./App.css";
import {  useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { loadUser } from "./actions/auth";
import { ActionTypes } from "./actions/actionTypes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import setAuthToken from "./utils/setAuthToken";
import PrivateComponent from "./components/PrivateComponent";
import LandingPage from "./pages/movies/LandingPage";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (localStorage.token) {
      console.log("token found", localStorage.token);

      setAuthToken(localStorage.token);
    }

    dispatch(loadUser);

    window.addEventListener("storage", () => {
      if (!localStorage.token) dispatch({ type: ActionTypes.LOGOUT_USER });
    });
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={PrivateComponent component={LandingPage}} />} */}

          <Route path="/" element={<PrivateComponent component={LandingPage}/>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
