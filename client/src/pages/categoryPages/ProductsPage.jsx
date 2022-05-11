import React from "react";
import PageHeader from "../../components/Header/PageHeader";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../../service/productService";
import Product from "../../components/common/Categories/Product";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../service/userService";

const user = getCurrentUser();

const ProductsPage = () => {
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    const getCurrentCategory = () => {
      const url = window.location.href;
      const urlWordsArr = url.split("/");

      return urlWordsArr[urlWordsArr.length - 1];
    };

    getProductsByCategory(getCurrentCategory()).then((res) =>
      setProductsArr(res.data)
    );
  }, []);

  return (
    <>
      <div className="container-fluid bg-light">
        <PageHeader title="Store" />
        {user && (user.biz || user.isAdmin) ? (
          <Link to={`/create_product`}>
            <button className="btn btn-primary fs-4 ms-1">
              Create New Product
            </button>
          </Link>
        ) : null}

        <div className="container ">
          <div className="row g-5 mt-1">
            {productsArr.map((product, index) => {
              return <Product key={index} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
