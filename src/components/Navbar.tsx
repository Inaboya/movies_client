import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import {logoutUser} from "../actions/auth"

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const registerLink = (
    <div className="register-btn">
      <Link to="/login">Sign in</Link>
    </div>
  );

  const loginLink = <div></div>;

  const pageLinks = (
    <ul className="page-links">
      <li>
        <Link to="favorite-movies">Watch List</Link>
      </li>

      <li>
        <Link to="favorite-movies" onClick={dispatch(logoutUser)}>
          Log Out
        </Link>
      </li>
    </ul>
  );
  return (
    <div className="navbar-container">
        <h1>
            <Link to="/">Movie App</Link>
        </h1>

        <Fragment>
            {
                location.pathname === 'register' ? registerLink :
                location.pathname === 'login' ? loginLink :
                pageLinks
            }
        </Fragment>
    </div>
  )
};

export default Navbar;



