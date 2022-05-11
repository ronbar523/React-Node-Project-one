import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";
import Textarea from "./TextArea";
import SelectBox from "./SelectBox";

class Form extends Component {
  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderTextarea(name, label) {
    const { data, errors } = this.state;
    return (
      <Textarea
        label={label}
        name={name}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange}
        className="form-control"
        autoComplete="off"
        cols="30"
        rows="5"
      />
    );
  }

  renderSelectBox(name, label) {
    const { data, errors } = this.state;
    return (
      <SelectBox
        label={label}
        name={name}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        className="btn btn-primary mt-2 col-12"
      >
        {label}
      </button>
    );
  }

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };
}

export default Form;
