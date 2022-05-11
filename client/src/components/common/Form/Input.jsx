import React from "react";
import PropTypes from "prop-types";

const Input = ({name, label, error, ...rest }) => {
  return (
    <div className="form-group mb-2">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

Input.protoType = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
}
 
export default Input;