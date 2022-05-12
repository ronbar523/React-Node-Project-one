import React from "react";
import Form from "../components/common/Form/Form";
import Joi from "joi-browser";
import PageHeader from "../components/Header/PageHeader";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { getCurrentUser, newPassword } from "../service/userService";

class RestPassword extends Form {
  state = {
    data: {
      password: "",
    },
    errors: {},
  };

  schema = {
    password: Joi.string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]+4)(?=.*[!@#$%^&*])(?=.{8,})/)
      .required()
      .min(8)
      .max(30),
  };

  doSubmit = async () => {
    try {
      const { password } = this.state.data;
      let email = window.location.search.split("email=")[1];
      if (window.location.search && email) {
        await newPassword(email, password);
        window.location = "/";
        toast.success(`password changed`);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log("err");
        this.setState({
          errors: { password: "" },
        });
      }
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
          <PageHeader title="Change Password" />
          <div className="center">
            <form
              onSubmit={this.handleSubmit}
              autoComplete="off"
              method="POST"
              className="col-12 col-md-10 col-xl-6 border p-2 bg-white"
            >
              {this.renderInput("password", "Password:", "password")}
              {this.renderButton("Change Password")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RestPassword;
