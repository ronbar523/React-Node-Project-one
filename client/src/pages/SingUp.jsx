import React from "react";
import Form from "../components/common/Form/Form";
import Joi from "joi-browser";
import PageHeader from "../components/Header/PageHeader";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import {
  crateNewUser,
  getCurrentUser,
  loginUser,
} from "../service/userService";

const defaultSetting = Joi.string().min(1).max(30).required();

class SingUp extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      phone: "",
      country: "",
      state: "",
      city: "",
      address: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    firstName: defaultSetting,
    lastName: defaultSetting,
    userName: defaultSetting,
    email: Joi.string().required().email(),
    phone: Joi.string()
      .regex(/^0[2-9]\d{7,8}$/)
      .required(),
    country: defaultSetting,
    state: defaultSetting,
    city: defaultSetting,
    address: defaultSetting,
    password: Joi.string().required().min(8),
  };

  doSubmit = async () => {
    try {
      const user = { ...this.state.data };
      user.biz = false;
      await crateNewUser(user);
      toast.success(`${user.userName} you register successfully`);
      delete user.userName;
      delete user.lastName;
      delete user.firstName;
      delete user.phone;
      delete user.address;
      delete user.city;
      delete user.state;
      delete user.country;
      delete user.biz;

      await loginUser(user);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400)
        this.setState({
          errors: { password: "Something it's wrong" },
        });
    }
  };

  render() {
    const user = getCurrentUser();
    if (user) return <Navigate to="/" />;
    return (
      <div
        style={{ minHeight: "85vh" }}
        className="container-fluid bg-light pb-4"
      >
        <div className="container">
          <PageHeader title="SingUp" />
          <div className="center">
            <form
              onSubmit={this.handleSubmit}
              autoComplete="off"
              method="POST"
              className="col-12 col-md-10 col-xl-6 border p-2 bg-white"
            >
              {this.renderInput("firstName", "FirstName:")}
              {this.renderInput("lastName", "LastName:")}
              {this.renderInput("userName", "UserName:")}
              {this.renderInput("email", "Email", "email:")}
              {this.renderInput("phone", "Phone:", "number")}
              {this.renderInput("country", "Country:")}
              {this.renderInput("state", "State:")}
              {this.renderInput("city", "City:")}
              {this.renderInput("address", "Address:")}
              {this.renderInput("password", "Password:", "password")}
              {this.renderButton("Sign Up")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SingUp;
