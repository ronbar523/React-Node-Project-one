import React from "react";
import Form from "../components/common/Form/Form";
import Joi from "joi-browser";
import PageHeader from "../components/Header/PageHeader";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { getCurrentUser, restPassword } from "../service/userService";

class RestPassword extends Form {
  state = {
    data: {
      email: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
  };

  doSubmit = async () => {
    try {
      const { email } = this.state.data;
      await restPassword(email);
      toast.success(`Sent you Mail`);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400)
        this.setState({
          errors: { email: "Invalid email" },
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
              {this.renderButton("Send Mail")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RestPassword;
