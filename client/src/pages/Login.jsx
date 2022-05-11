import React from "react";
import Form from "../components/common/Form/Form";
import Joi from "joi-browser";
import PageHeader from "../components/Header/PageHeader";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { getCurrentUser, loginUser } from "../service/userService";
import { Link } from "react-router-dom";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  };

  doSubmit = async () => {
    try {
      const user = { ...this.state.data };
      await loginUser(user);
      toast.success(`hey ${user.email}`);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400)
        this.setState({
          errors: { password: "Invalid email or password" },
        });
    }
  };

  render() {
    const user = getCurrentUser();
    if (user) return <Navigate replace to="/" />;
    return (
      <div
        style={{ minHeight: "85vh" }}
        className="container-fluid bg-light pb-4"
      >
        <div className="container">
          <PageHeader title="Login" />
          <div className="center">
            <form
              onSubmit={this.handleSubmit}
              autoComplete="off"
              method="POST"
              className="col-12 col-md-10 col-xl-6 border p-2 bg-white"
            >
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              <Link to="rest_password">Rest Password</Link>
              {this.renderButton("Login")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
