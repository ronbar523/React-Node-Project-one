import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getCurrentUser } from "./service/userService";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Homepage from "./pages/HomePage";
import About from "./pages/About";
import Error from "./pages/Error";

import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import Logout from "./pages/Logout";
import SingUpBiz from "./pages/SingUpBiz";
import RestPassword from "./pages/RestPassword";
import ChangePassword from "./pages/ChangePassword";

import Reviews from "./pages/Reviews";
import ReviewsFrom from "./pages/ReviewsFrom";
import DeleteReview from "./pages/DeleteReview";

import Shop from "./pages/Shop";
import Product from "./pages/categoryPages/ProductsPage";
import MyProduct from "./pages/categoryPages/MyProduct";
import MyCart from "./pages/MyCart";

import CreateCategory from "./pages/categoryPages/CreateCategory";
import EditCategoryConvertor from "./pages/EditCategoryConvertor";

import CreateProduct from "./pages/CreateProduct";
import EditProductConvertor from "./pages/EditProductConvertor";

function App() {
  const user = getCurrentUser();

  return (
    <>
      <Header user={user} />
      <main className="main container p-2">
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />

          <Route path="/shop" element={<Shop user={user} />} />
          <Route path="shop/:category" element={<Product />} />
          <Route
            path="/create_category"
            element={<CreateCategory user={user} />}
          />
          <Route
            path="/edit_category/:id"
            element={<EditCategoryConvertor user={user} />}
          />
          <Route path="/my_products" element={<MyProduct />} />
          <Route
            path="/create_product"
            element={<CreateProduct user={user} />}
          />
          <Route
            path="/edit_product/:id"
            element={<EditProductConvertor user={user} />}
          />

          <Route path="/reviews" element={<Reviews />} />
          <Route path="/create_review" element={<ReviewsFrom />} />
          <Route path="/delete/:id" element={<DeleteReview />} />
          <Route path="/update/:id" element={<ReviewsFrom />} />

          <Route path="/sing_up" element={<SingUp />} />
          <Route path="/sing_up_biz" element={<SingUpBiz />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="login/rest_password" element={<RestPassword />} />
          <Route path="change_password" element={<ChangePassword />} />

          <Route path="*" element={<Error />} />

          <Route path="/my_cart" element={<MyCart />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
