import React from "react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { deleteReviewById, getReviewById } from "../service/reviewService";

const DeleteReview = () => {
  const { id } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    getReviewById(id).then((res) => setReview(res.data));
  }, []);

  const handleDelete = async () => {
    await deleteReviewById(id);
  };

  return (
    <>
      <h2 className="text-center">do you want to delete it {review.name} ?</h2>
      <Link to="/reviews">
        <button className="btn btn-secondary">No!</button>
      </Link>
      <button onClick={handleDelete} className="btn btn-danger">
        Yes!
      </button>
    </>
  );
};

export default DeleteReview;
