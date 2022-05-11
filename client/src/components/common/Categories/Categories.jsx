import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../../service/userService";
import ModelCategory from "./ModelCategory";

const user = getCurrentUser();

const Categories = ({
  item: {
    title,
    image: { url, alt },
    name,
    _id,
  },
}) => {
  const [modelArr, setModelArr] = useState(false);

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 center">
        <div className="card " style={{ width: "col-lg-4 col-md-6 col-sm-12" }}>
          <img src={url} alt={alt} className="card-img-top" />
          <div className="card-body">
            <h1 className="card-title"> {title}</h1>
            <Link to={name}>
              <button
                className="btn btn-primary mt-1 my-2 fs-5"
                title="Shop Now"
                onClick={() => setModelArr(true)}
              >
                {" "}
                Shop Now{" "}
              </button>
            </Link>

            <div>
              {user && user.isAdmin ? (
                <div className="d-inline">
                  <button
                    className="btn btn-outline-danger ps-6 d-inline "
                    title="Delete"
                    onClick={() => setModelArr(true)}
                  >
                    <lord-icon src="https://cdn.lordicon.com/dovoajyj.json"></lord-icon>
                  </button>

                  {modelArr === true ? (
                    <ModelCategory
                      id={_id}
                      setModelArr={setModelArr}
                      title={title}
                    />
                  ) : (
                    ""
                  )}

                  <Link to={`/edit_category/${_id}`}>
                    <button
                      className="btn btn-outline-warning ms-1 my-1"
                      title="Edit"
                    >
                      <lord-icon src="https://cdn.lordicon.com/oclwxpmm.json"></lord-icon>
                    </button>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
