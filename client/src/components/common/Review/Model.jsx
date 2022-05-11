import React from "react";
import { deleteReviewById } from "../../../service/reviewService";
import { toast } from "react-toastify";

const Model = ({ id, setModelArr, name }) => {
  const modalStyle = {
    display: "block",
  };

  const handleDelete = async () => {
    const res = await deleteReviewById(id);
    // console.log(res.data.msg);
    setTimeout(() => {
      if (res.data.msg === "Review deleted successfully") {
        setModelArr(false);
        toast.success(`The Revive it's Delete`);
        window.location = "/reviews";
      } else {
        toast.error(`Something happened`);
      }
    }, 2000);
  };

  return (
    <>
      <div className="modal show fade" style={modalStyle} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {" "}
                <b> {name} </b>
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
              <p>Are You Sure Do You Want Delete?</p>
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

export default Model;
