import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

toast.configure();

const Login: React.FC<any> = ({ loginUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { email, password } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    if (!email || !password) {
      toast.error("Please enter all fields", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      });

      setLoading(false);

      return;
    }

    const response = await loginUser({ email, password });

    if (typeof response === "string") {
      toast.error(response, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      });
      setLoading(false);
      return;
    }

    setLoading(false);

    toast.success("Login successful", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 5000,
    });

    navigate("/");
  };
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <p className="register-paragraph-1">Watch anywhere. Cancel anytime.</p>
        <p className="register-paragraph-2">
          New Member?{" "}
          <Link to="/register" className="not-new-btn">
            Get Started
          </Link>
        </p>

        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <div className="form-group">
              <div className="form-control">
                <label className="label" htmlFor="email">
                  Email
                </label>

                <div className="form-input">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <div className="form-input">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="button-container">
                <button type="submit" className="btn-register">
                  {" "}
                  Sign In
                  {loading && (
                    <i
                      className="fas fa-spinner fa-spin"
                      aria-hidden="true"
                    ></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default connect(null, { loginUser })(Login);
