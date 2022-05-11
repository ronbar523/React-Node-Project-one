import React from "react";
import Form from "../components/common/Form/Form";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { getProductById, updateProductById } from "../service/productService";
import { Link, Navigate } from "react-router-dom";
import PageHeader from "../components/Header/PageHeader";

class EditProduct extends Form {
  state = {
    data: {},
    errors: {},
    isProductEdit: false,
    isMounted: false,
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

  async componentDidMount() {
    try {
      const { id } = this.props;
      const { data: product } = await getProductById(id);
      this.setState({ isMounted: true, data: this.mapToModel(product) });
    } catch (error) {
      this.setState({ errors: { alt: error.message } });
    }
  }

  mapToModel(product) {
    const {
      title,
      image: { url, alt },
      price,
      description,
      category,
      pieces,
    } = product;
    return { title, url, alt, price, description, category, pieces };
  }

  doSubmit = async () => {
    try {
      const product = { ...this.state.data };
      const { id } = this.props;
      product._id = id;
      if (!product.url)
        product.url =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
      if (!product.alt) product.alt = "Pic Of Business Product";
      await updateProductById(product);
      toast.success("your product was been edit successfully");
      this.setState({ isProductEdit: true });
    } catch (error) {
      this.setState({ errors: { pieces: error.message } });
    }
  };

  render() {
    const { isProductEdit, isMounted } = this.state;
    if (!isMounted) return null;

    if (isProductEdit) return <Navigate replace to="/my_products" />;

    const biz = this.props.user?.biz;
    const isAdmin = this.props.user?.isAdmin;
    if (!biz && !isAdmin) return <Navigate replace to="/shop" />;
    return (
      <div
        style={{ minHeight: "85vh" }}
        className="container-fluid bg-light pb-4"
      >
        <PageHeader title="Edit Product" />
        <br />
        <div className="container">
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
              {this.renderInput("pieces", "Pieces", "number")}
              <br />
              {this.renderSelectBox("category", "Select Category")}
              <br />
              {this.renderTextarea("description", "Description")}
              {this.renderButton("Edit Product")}

              <Link to="/my_products">
                <span className="btn btn-danger mt-1 col-12">Cancel</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProduct;
