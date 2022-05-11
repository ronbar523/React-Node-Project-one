import EditCategory from "./EditCategory";
import { Navigate, useParams } from "react-router-dom";
import React from "react";

const EditCategoryConvertor = ({ user }) => {
  const { id } = useParams();
  if (!user || !user.isAdmin) return <Navigate replace to="/shop" />;
  return <EditCategory id={id} />;
};

export default EditCategoryConvertor;
