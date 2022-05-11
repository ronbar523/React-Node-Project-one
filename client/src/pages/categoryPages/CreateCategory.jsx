import React from "react";
import Form from "../../components/common/Form/Form";
import Joi from "joi-browser";
import PageHeader from "../../components/Header/PageHeader";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { createNewCategory } from "../../service/categoriesService";
import { Link } from "react-router-dom";

class CreateCategory extends Form {
  state = {
    data: {
      title: "",
      url: "",
      alt: "",
      name: "",
    },
    errors: {},
    isCategoryCreated: false,
  };

  schema = {
    title: Joi.string().min(2).max(20).required().label("title"),

    url: Joi.string().min(11).max(1024).uri().allow("").required().label("url"),

    alt: Joi.string().min(2).max(256).required().label("alt"),

    name: Joi.string().required().label("name"),
  };

  doSubmit = async () => {
    try {
      const category = { ...this.state.data };
      //   if (!category.alt) delete category.alt;

      category["image"] = {
        url: category.url,
        alt: category.alt,
      };

      delete category.alt;
      delete category.url;

      await createNewCategory(category);
      toast.success("Category Created");
      this.setState({ isCategoryCreated: true });
    } catch (error) {
      this.setState({
        errors: { name: error.message },
      });
    }
  };

  render() {
    const isAdmin = this.props.user?.isAdmin;
    if (!isAdmin) return <Navigate replace to="/shop" />;
    const { isCategoryCreated } = this.state;
    if (isCategoryCreated) return <Navigate replace to="/shop" />;
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
              <br />
              {this.renderSelectBox("name", "Select Category")}
              <br />
              {this.renderButton("Create Category")}

              <Link to="/shop">
                <button className="btn btn-danger mt-1 col-12">Cancel</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCategory;
