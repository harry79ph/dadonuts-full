import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ user, restricted, children }) => {
    if (restricted) {
        return user ? children : <Navigate to="/home/login" />;
    } else {
        return user ? <Navigate to="/home" /> : children;
    }
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
