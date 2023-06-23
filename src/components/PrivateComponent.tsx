import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes, { InferProps } from "prop-types";
import { connect } from "react-redux";
// import Spinner from '../layout/Spinner';

interface AuthProps {
  isAuthenticated: boolean;
  loading: boolean;
}

interface PrivateRouteProps {
  component: React.ComponentType;
  auth: AuthProps;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  auth: { isAuthenticated, loading },
}: PrivateRouteProps) => {
  return <>{isAuthenticated ? <Component /> : <Navigate to="/login" />}</>;
};

PrivateRoute.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = (state: { auth: AuthProps }) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
