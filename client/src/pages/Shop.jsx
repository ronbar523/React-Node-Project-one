import React from "react";
import PageHeader from "../components/Header/PageHeader";
import { useEffect, useState } from "react";
import { getAllCategories } from "../service/categoriesService";
import Categories from "../components/common/Categories/Categories";
import { Link } from "react-router-dom";

const Shop = ({ user }) => {
  const [categoriesArr, setCategoriesArr] = useState([]);

  useEffect(() => {
    getAllCategories().then((res) => setCategoriesArr(res.data));
  }, []);

  return (
    <>
      <div className="container-fluid bg-light pb-4">
        <PageHeader title="Store" />

        {user && user.isAdmin ? (
          <>
            <Link to={"/create_category"}>
              <button className="btn btn-primary fs-4 ms-3">
                Create Category
              </button>
            </Link>
          </>
        ) : null}

        <div className="container ">
          <div className="row g-5 mt-1">
            {categoriesArr.map((item, index) => {
              return <Categories key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
