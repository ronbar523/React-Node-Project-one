import React from "react";
import PageHeader from "../components/Header/PageHeader";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getThreeProduct } from "../service/productService";
import Product from "../components/common/Categories/Product";
// import { getAllProduct } from '../service/productService';

const Homepage = () => {
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    getThreeProduct().then((res) => setProductsArr(res.data));
  }, []);

  return (
    <>
      <div className="container-fluid bg-light pb-4">
        <PageHeader title="Rb-Bar Store Dogs" subTitle="Love Your Dog" />

        <div className="container-home">
          <div className="container-home-a">
            <img className=" img-home" src="/images/dog.jpg" alt="dog" />
            <div className="container-home-b">
              <h2 className="subtitle-home-a"> Love. </h2>
              <h2 className="subtitle-home-b"> Your. </h2>
              <h2 className="subtitle-home-b"> Dog. </h2>
              <Link to={`/shop`}>
                <div className="btn-home-div">
                  <button className="btn-home fs-4 mt-2">
                    {" "}
                    <b> Shop Now </b>{" "}
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row g-5">
            {productsArr.map((product, index) => {
              return <Product key={index} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
