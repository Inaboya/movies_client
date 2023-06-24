import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { loadUser } from "./actions/auth";
import { LOGOUT_USER } from "./actions/actionTypes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import setAuthToken from "./utils/setAuthToken";
import PrivateComponent from "./components/PrivateComponent";
import LandingPage from "./pages/movies/LandingPage";
import FavoriteMovie from "./pages/movies/FavoriteMovie";
import MovieDetail from "./pages/movies/MovieDetail";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    dispatch(loadUser);

    window.addEventListener("storage", () => {
      if (!localStorage.token) dispatch({ type: LOGOUT_USER });
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

          <Route
            path="/"
            element={<PrivateComponent component={LandingPage} />}
          />

          <Route
            path="/favorite-movies"
            element={<PrivateComponent component={FavoriteMovie} />}
          />

          <Route
            path="/:id"
            element={<PrivateComponent component={MovieDetail} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
