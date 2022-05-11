import React from "react";
import { useRef, useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import PageHeader from "../components/Header/PageHeader";
import {
  createNewReview,
  getReviewById,
  updateReviewById,
} from "../service/reviewService";
import { Link } from "react-router-dom";

const ReviewsFrom = () => {
  const { id } = useParams();
  const name = useRef();
  const description = useRef();
  const rating = useRef();
  const [isReviewCreated, setInReviewCreated] = useState(false);
  const [review, setReview] = useState({});

  useEffect(() => {
    if (id)
      getReviewById(id)
        .then((res) => setReview(res.data))
        .catch(() => setInReviewCreated(true));
  }, []);

  const createInput = (nameFromArgs, ref, label, Value, type = "text") => {
    return (
      <div className="m-2 p-2">
        <label> {label}:</label>
        <input
          type={type}
          name={nameFromArgs}
          ref={ref}
          defaultValue={Value}
          className="form-control"
          required
        />
      </div>
    );
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const review = {
        name: name.current.value,
        description: description.current.value,
        rating: rating.current.value,
      };
      if (id) await updateReviewById(id, review);
      else await createNewReview(review);
      setInReviewCreated(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container-fluid bg-light pb-4">
        {isReviewCreated && <Navigate to="/reviews" />}
        <PageHeader title="ReviewFrom" />
        <br />
        <Link to="/reviews">
          <button className="btn btn-primary fs-4">Back To Reviews</button>
        </Link>
        <br />
        <br />
        <form className="card" onSubmit={(e) => handleSubmit(e)}>
          {createInput("name", name, "Your Name", review.name)}
          {createInput(
            "rating",
            rating,
            "How do you rate us?",
            review.rating,
            "number"
          )}

          {createInput(
            "description",
            description,
            "what do you think about us?",
            review.description
          )}
          <button className="btn btn-primary m-3">Send</button>
        </form>
      </div>
    </>
  );
};

export default ReviewsFrom;
