import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Register: React.FC<any> = ({ registerUser }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);

  const { name, email, password, password2 } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !password || !password) {
      toast.error("Please enter all fields", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      });

      setLoading(false);

      return;
    }
    if (password !== password2) {
      toast.error("Passwords do not match", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      });
      setLoading(false);
      return;
    }

    const response = await registerUser({ name, email, password, password2 });

    if (typeof response === "string") {
      toast.error(response, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      });

      setLoading(false);

      return;
    }

    toast.success("Registration successful", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 5000,
    });

    setLoading(false);

    navigate("/login");
  };

  //   if (isAuthenticated) return <Navigate to="/" />;
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <p className="register-paragraph-2">
          Not new?{" "}
          <Link to="/login" className="not-new-btn">
            Sign In
          </Link>
        </p>

        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <div className="form-group">
              <div className="form-control">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <div className="form-input">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>
              </div>

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

              <div className="form-control">
                <label className="label" htmlFor="password2">
                  Confirm Password
                </label>

                <div className="form-input">
                  <input
                    type="password"
                    name="password2"
                    value={password2}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                  />
                </div>
              </div>

              <div className="button-container">
                <button type="submit" className="btn-register">
                  {" "}
                  Sign Up
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

Register.propTypes = {
  //   setAlert: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  // isAuthenticated: PropTypes.bool,
};

// const mapStateToProps = (state: { auth: AuthProps }) => ({
//   loading: state.auth.loading,
// });

export default connect(null, { registerUser })(Register);
