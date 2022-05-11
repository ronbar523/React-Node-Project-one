import React, { useState } from "react";
import Model from "../Review/Model";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../../service/userService";

const user = getCurrentUser();

const Review = ({ item: { _id, createdBy, name, description, rating } }) => {
  const [modelArr, setModelArr] = useState(false);

  return (
    <>
      <div className="card border-dark container-fluid">
        <div className="card-body">
          <h1 className="card-title px-3 mt-2"> {name} </h1>

          <p className="px-3 fs-4">
            Rating:
            {rating > 5 ? (
              <span className="text-success"> {rating} </span>
            ) : (
              <span className="text-danger"> {rating} </span>
            )}
            /10
          </p>

          <p className="card-text px-3 fs-4"> description: {description}</p>

          {user && (user.id === createdBy) | user.isAdmin ? (
            <div>
              <button
                className="btn btn-outline-danger ms-3"
                title="Delete"
                onClick={() => setModelArr(true)}
              >
                <lord-icon src="https://cdn.lordicon.com/dovoajyj.json"></lord-icon>
              </button>

              <Link to={`/update/${_id}`}>
                <button className="btn btn-outline-warning ms-2" title="Edit">
                  <lord-icon src="https://cdn.lordicon.com/oclwxpmm.json"></lord-icon>
                </button>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <br />
      {modelArr === true ? (
        <Model id={_id} setModelArr={setModelArr} name={name} />
      ) : (
        ""
      )}
    </>
  );
};

export default Review;
