import { Component } from "react";
// import { toast } from "react-toastify";
// import { deleteProductById } from "../../../service/productService";
// import { toast } from "react-toastify"
import {
  changeLikeStatus,
  getAllProduct,
} from "../../../service/productService";

class ProductExtends extends Component {
  handleChange = (e) => {
    const data = [...this.state.data];
    let products = data;
    const searchTerm = e.target.value;
    const productsFiltered = products.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    this.setState({ products: productsFiltered });
  };

  changeLikeStatus = async (productId, user) => {
    try {
      let { data } = await getAllProduct();
      let products = data;
      let product = products.find((product) => product._id === productId);
      if (!product) return;

      let productLikes = product.likes;
      if (!productLikes.length) {
        productLikes.push(user._id);
        this.setState({ products });
        await changeLikeStatus(product);
        return;
      }
      let isUserLikedProduct = productLikes.find((id) => id === user._id);

      if (!isUserLikedProduct) {
        productLikes.push(user._id);
        this.setState({ products });
        await changeLikeStatus(product);
        return;
      }

      productLikes = productLikes.filter((id) => id !== user._id);
    } catch (error) {
      console.log(error.message);
    }
  };

  // changeLike= async (productId, user)=> {
  //   try {
  //     let { data } = await getAllProduct();
  //     let products = data;
  //     let product = products.find(product => product._id === productId);
  //     if(!product) return;

  //     let productLikes = product.likes
  //     if(!productLikes.length) {
  //       productLikes.push(user._id);
  //       this.setState({products});
  //       await changeLikeStatus(product);
  //       return;
  //     }

  //     let isUserLikedProduct = productLikes.find( id => id === user._id);

  //     if(!isUserLikedProduct){
  //       productLikes.push(user._id);
  //       this.setState({ products });
  //       await changeLikeStatus(product);
  //       return;
  //     }

  //     productLikes = productLikes.filter(id => id !== user._id);
  //     this.setState({ products });
  //     await changeLikeStatus(product);
  //     return;

  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
}

export default ProductExtends;
