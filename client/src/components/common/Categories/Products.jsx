import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import { getCurrentUser } from "../../../service/userService";

const Products = ({ products }) => {
  // if (!products.length) return <div>No products In The State Object...</div>;

  const user = getCurrentUser();

  return (
    <>
      <div className="container ">
        <div className="row g-5 mt-1">
          {products.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  user: PropTypes.object,
};

export default Products;
