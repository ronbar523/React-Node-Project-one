import React from "react";

const DescriptionProduct = ({
  setDescriptionArr,
  description,
  title,
  price,
  pieces,
}) => {
  const modalStyle = {
    display: "block",
  };

  return (
    <>
      <div className="modal show fade" style={modalStyle} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{title}</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setDescriptionArr(false)}
              ></button>
            </div>
            <div className="modal-body">
              <h4 className="text-center">
                <b>{title} Description:</b>
              </h4>
              <br />

              <h6>{description}.</h6>
              <br />
              <br />
              <h4 className="d-inline">
                <b>Price: {price}$</b>
              </h4>

              {pieces < 1 ? (
                <h4 className="d-inline pieces-out text-danger">
                  out of stock
                </h4>
              ) : (
                <h4 className="d-inline pieces-stock text-success">In Stock</h4>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setDescriptionArr(false)}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionProduct;
