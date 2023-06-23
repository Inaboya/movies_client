import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { logoutUser } from "../actions/auth";
import "./components.css";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logoutUser);
  };

  const registerLink = (
    <div className="register-btn-container">
      <Link to="/login" className="register-btn">
        Sign In
      </Link>
    </div>
  );

  const loginLink = <div></div>;

  const pageLinks = (
    <div className="page-links">
      <div className="fav-container">
        <Link to="/favorite-movies" className="fav-btn">
          Watch List
        </Link>
      </div>

      <div className="logout-container">
        <Link
          to="#!"
          onClick={handleClick}
          className="logout-btn"
        >
          Log Out
        </Link>
      </div>
    </div>
  );
  return (
    <div className="navbar-container">
      <h1 className="navbar-heading">
        <Link to="/" className="heading-link">
        CineHub
        </Link>
      </h1>

      <Fragment>
        {location.pathname === "/register"
          ? registerLink
          : location.pathname === "/login"
          ? loginLink
          : pageLinks}
      </Fragment>
    </div>
  );
};

export default Navbar;
