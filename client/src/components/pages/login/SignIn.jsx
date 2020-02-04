import React from "react";
import "./login.styles.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { add as jwtAdd } from "../../../redux/jwt-verification/actions";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      accessLevel: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.error) return false;
        this.props.dispatch1(
          json.token,
          json.userData.companyName,
          json.userData.accesslevel
        );
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { isAuthenticated, accessLevel } = this.props.jwt;
    if (isAuthenticated && accessLevel === 1)
      return <Redirect to="/dashboard" />;
    if (isAuthenticated && accessLevel === 2)
      return <Redirect to="/admin/home" />;
    if (isAuthenticated && accessLevel === 3)
      return <Redirect to="/dashboard" />;
    return (
      <div className="login-form-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="username-input"
            name="email"
            placeholder="Enter Email"
            onChange={this.handleChange}
            value={this.state.email}
            label="UserEmail"
            required
          />
          <input
            className="password-input"
            name="password"
            type="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
            required
          />
          <button className="submit">Log In</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jwt: state.jwt
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: (token, email, accessLevel) => {
      dispatch(jwtAdd(token, email, accessLevel));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
