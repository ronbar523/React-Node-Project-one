import React from "react";
import { deleteProductById } from "../../../service/productService";
import { toast } from "react-toastify";

const ModelProduct = ({ id, setModelArr, title }) => {
  const modalStyle = {
    display: "block",
  };

  const handleDelete = async () => {
    const res = await deleteProductById(id);
    console.log(res.data.msg);
    setTimeout(() => {
      if (res.data.msg === "Product Deleted Successfully") {
        setModelArr(false);
        toast.success(`The Product it's Delete`);
        window.location = "/my_products";
      } else {
        toast.error(`Something happened`);
      }
    }, 1000);
  };

  return (
    <>
      <div className="modal show fade" style={modalStyle} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {" "}
                <b> {title} </b>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setModelArr(false)}
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Are You Sure Do You Want Delete<b> {title}?</b>
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setModelArr(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelProduct;
