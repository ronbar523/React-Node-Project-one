import React from "react";
import Form from "../components/common/Form/Form";
import Joi from "joi-browser";
import PageHeader from "../components/Header/PageHeader";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { createNewProduct } from "../service/productService";
import { Link } from "react-router-dom";

class CreateProduct extends Form {
  state = {
    data: {
      title: "",
      url: "",
      alt: "",
      price: "",
      category: "",
      description: "",
      pieces: "",
    },
    errors: {},
    isProductCreated: false,
  };

  schema = {
    title: Joi.string().min(2).max(20).required().label("title"),

    url: Joi.string().min(11).max(1024).uri().allow("").required().label("url"),

    alt: Joi.string().min(2).max(256).required().label("alt"),

    price: Joi.string().required().label("price"),

    description: Joi.string()
      .required()
      .max(1000)
      .required()
      .label("Description"),

    category: Joi.string().required().label("category"),

    pieces: Joi.string().required().label("pieces"),
  };

  doSubmit = async () => {
    const product = { ...this.state.data };
    try {
      //   if (!product.alt) delete product.alt;

      product["image"] = {
        url: product.url,
        alt: product.alt,
      };

      delete product.alt;
      delete product.url;
      console.log(product);
      await createNewProduct(product);
      toast.success("Product Created");
      this.setState({ isProductCreated: true });
    } catch (error) {
      this.setState({
        errors: { price: error.message },
      });
    }
  };

  render() {
    const biz = this.props.user?.biz;
    const isAdmin = this.props.user?.isAdmin;
    // console.log(isAdmin);
    // console.log(biz);

    // const { user } = this.props;
    // const { biz } = this.props.user;
    // const { isAdmin } = this.props.user;

    if (!biz && !isAdmin) return <Navigate replace to="/shop" />;
    // if (!user) return <Navigate replace to="/shop" />;

    const { isProductCreated } = this.state;
    if (isProductCreated) return <Navigate replace to="/" />;
    return (
      <div
        style={{ minHeight: "85vh" }}
        className="container-fluid bg-light pb-4"
      >
        <div className="container">
          <PageHeader title="Create Product" />
          <div className="center">
            <form
              onSubmit={this.handleSubmit}
              autoComplete="off"
              method="POST"
              className="col-12 col-md-10 col-xl-6 border p-2 bg-white"
            >
              {this.renderInput("title", "Title")}
              {this.renderInput("url", "Image")}
              {this.renderInput("alt", "Alt")}
              {this.renderInput("price", "Price", "number")}
              <br />
              {this.renderSelectBox("category", "Select Category")}
              <br />
              {this.renderTextarea("description", "Description")}
              {this.renderInput("pieces", "Pieces", "number")}
              {this.renderButton("Create Product")}

              <Link to="/my_products">
                <button className="btn btn-danger mt-1 col-12">Cancel</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProduct;
