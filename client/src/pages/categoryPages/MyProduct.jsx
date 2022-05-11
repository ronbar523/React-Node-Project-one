import React from "react";
import Products from "../../components/common/Categories/Products";
import PageHeader from "../../components/Header/PageHeader";
import { getMyProduct } from "../../service/productService";
import ProductExtends from "../../components/common/Categories/ProductExtends";
import SearchProduct from "../../components/common/Categories/SearchProduct";
import { Link } from "react-router-dom";

class MyProduct extends ProductExtends {
  state = {
    data: [],
    products: [],
    isMount: false,
  };

  async componentDidMount() {
    try {
      const { data } = await getMyProduct();
      // console.log(data);
      this.setState({ data, products: data, isMount: true });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const products = [...this.state.products];
    const { isMount } = this.state;
    if (!isMount) return null;

    return (
      <div className="container-fluid bg-light pb-4">
        <React.Fragment>
          <PageHeader title="My Products" />
          <div className="container">
            <div className="d-inline">
              <Link to={`/create_product`}>
                <button className="btn btn-primary fs-4 ms-3 my-4">
                  Create New Product
                </button>
              </Link>
              <div className="">
                <SearchProduct
                  placeholder="Search Product"
                  handleChange={this.handleChange}
                />
              </div>
              <div>
                <Products products={products} />
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default MyProduct;
