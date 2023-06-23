import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <p className="register-paragraph-2">
          New Member?{" "}
          <Link to="/register" className="not-new-btn">
            Get Started
          </Link>
        </p>

        <form className="form-container">
          <div className="form-wrapper">
            <div className="form-group">

              <div className="form-control">
                <label className="label" htmlFor="email">
                  Email
                </label>

                <div className="form-input">
                  <input type="email" placeholder="Enter your email" />
                </div>
              </div>

              <div className="form-control">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <div className="form-input">
                  <input type="password" placeholder="Enter your password" />
                </div>
              </div>

              <div className="button-container">
                <button type="submit" className="btn-register">
                  {" "}
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
