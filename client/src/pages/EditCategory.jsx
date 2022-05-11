import React from "react";
import Form from "../components/common/Form/Form";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import {
  updateCategoryById,
  getCategoryById,
} from "../service/categoriesService";
import { Link, Navigate } from "react-router-dom";
import PageHeader from "../components/Header/PageHeader";

class EditCategory extends Form {
  state = {
    data: {},
    errors: {},
    isCategoryEdit: false,
    isMounted: false,
  };

  schema = {
    title: Joi.string().min(2).max(20).required().label("Title"),

    name: Joi.string().required().label("Name"),

    url: Joi.string().min(11).max(1024).uri().allow("").required().label("url"),

    alt: Joi.string().min(2).max(256).label("Alt"),
  };

  async componentDidMount() {
    try {
      const { id } = this.props;
      const { data: category } = await getCategoryById(id);
      this.setState({ isMounted: true, data: this.mapToModel(category) });
    } catch (error) {
      this.setState({ errors: { alt: error.message } });
    }
  }

  mapToModel(category) {
    const {
      title,
      name,
      image: { url, alt },
    } = category;
    return { title, name, url, alt };
  }

  doSubmit = async () => {
    try {
      const category = { ...this.state.data };
      const { id } = this.props;
      category._id = id;
      // if (!category.url)
      //   category.url =
      //     "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
      // if (!category.alt) category.alt = "Pic Of Business Category";
      await updateCategoryById(category);
      toast.success("your category was been edit successfully");
      this.setState({ isCategoryEdit: true });
    } catch (error) {
      this.setState({ errors: { alt: error.message } });
    }
  };

  render() {
    const { isCategoryEdit, isMounted } = this.state;

    if (!isMounted) return null;

    if (isCategoryEdit) return <Navigate replace to="/shop" />;

    const isAdmin = this.props.user?.isAdmin;

    if (!isAdmin) return <Navigate replace to="/shop" />;

    return (
      <div
        style={{ minHeight: "85vh" }}
        className="container-fluid bg-light pb-4"
      >
        <PageHeader title="Edit Category" />
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
              <br />
              {this.renderSelectBox("name", "Select Category")}
              <br />
              {this.renderButton("Edit Category")}

              <Link to="/shop">
                <span className="btn btn-danger mt-1 col-12">Cancel</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditCategory;
