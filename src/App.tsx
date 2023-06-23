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

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    dispatch(loadUser);

    window.addEventListener("storage", () => {
      if (!localStorage.token) dispatch({ type: ActionTypes.LOGOUT_USER });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
