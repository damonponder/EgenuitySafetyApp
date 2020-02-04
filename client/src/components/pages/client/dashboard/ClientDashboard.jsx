import React from "react";
import { connect } from "react-redux";
import "./clientDashboard.styles.scss";

const ClientDashboard = () => {
  return "home";
};

const mapStateToProps = (state, ownProps) => {
  return {
    jwt: state.jwt
  };
};

export default connect(mapStateToProps)(ClientDashboard);
