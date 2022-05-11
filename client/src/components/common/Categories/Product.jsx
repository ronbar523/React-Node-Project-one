import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../../service/userService";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import ModelProduct from "./ModelProduct";
import DescriptionProduct from "./DescriptionProduct";

const user = getCurrentUser();

const Product = ({
  product: {
    _id,
    createdBy,
    title,
    image: { url, alt },
    price,
    description,
    pieces,
  },
}) => {
  const [modelArr, setModelArr] = useState(false);

  const [descriptionArr, setDescriptionArr] = useState(false);
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 center">
        <div className="card " style={{ width: "col-lg-4 col-md-6 col-sm-12" }}>
          <img src={url} alt={alt} className="card-img-top" />
          <div className="card-body">
            <h1 className="card-title"> {title}</h1>

            <h3 className="card-text">{price}$</h3>
            <button
              className="btn btn-primary mt-2 fs-5"
              title="description"
              onClick={() => setDescriptionArr(true)}
            >
              {" "}
              Description{" "}
            </button>
          </div>
          {(user && user.id === createdBy) || user?.isAdmin ? (
            <div className="d-inline">
              <button
                className="btn btn-outline-danger ms-3 ps-6 d-inline "
                title="Delete"
                onClick={() => setModelArr(true)}
              >
                <lord-icon src="https://cdn.lordicon.com/dovoajyj.json"></lord-icon>
              </button>
              {modelArr === true ? (
                <ModelProduct
                  id={_id}
                  setModelArr={setModelArr}
                  title={title}
                />
              ) : (
                ""
              )}

              <Link to={`/edit_product/${_id}`}>
                <button
                  className="btn btn-outline-warning ms-1 my-2"
                  title="Edit"
                >
                  <lord-icon src="https://cdn.lordicon.com/oclwxpmm.json"></lord-icon>
                </button>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
      {descriptionArr === true ? (
        <DescriptionProduct
          setDescriptionArr={setDescriptionArr}
          title={title}
          description={description}
          price={price}
          pieces={pieces}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Product;
