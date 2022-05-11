import EditProduct from "./EditProduct";
import { Navigate, useParams } from "react-router-dom";
import React from "react";
// import { getMyProduct } from "../service/productService";
// import { useEffect, useState } from "react";

const EditProductConvertor = ({ user }) => {
  // const [productCreatedBy, setProductCreatedBy] = useState([]);

  // const product = async () => {
  //   try {
  //     const req = await getMyProduct();

  //     const arr = req.data.map((item) => {
  //       return item.createdBy === user.id;
  //     });
  //     console.log(arr);
  //     setProductCreatedBy(arr);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   product();
  // }, []);

  const { id } = useParams();

  if (!user) return <Navigate replace to="/shop" />;

  return <EditProduct id={id} />;
};

export default EditProductConvertor;
