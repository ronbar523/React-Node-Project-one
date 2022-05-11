import PropTypes from "prop-types";
import React from "react";

const SearchProduct = ({ placeholder, handleChange }) => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-7 ms-3  ">
      <input
        type="search"
        className="text-rtl form-control border-primary"
        placeholder={placeholder}
        onInput={handleChange}
      />
    </div>
  );
};

SearchProduct.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchProduct;
