import React from "react";
// import PageHeader from "../components/Header/PageHeader";
import { getCurrentUser } from "../service/userService";
import { Navigate } from "react-router-dom";
import PageHeader from "../components/Header/PageHeader";

const user = getCurrentUser();

const MyCart = () => {
  if (!user) return <Navigate replace to="/shop" />;
  return (
    <div className="container-fluid bg-light pb-4">
      <PageHeader title="My Cart" />
    </div>
  );
};

export default MyCart;
