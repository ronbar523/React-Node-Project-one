import React from "react";
import { useEffect, useState } from "react";
import { getAllReviews } from "../service/reviewService";
import Review from "../components/common/Review/Review";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../service/userService";
import PageHeader from "../components/Header/PageHeader";

const user = getCurrentUser();

const Reviews = () => {
  const [reviewsArr, setReviewsArr] = useState([]);

  useEffect(() => {
    getAllReviews().then((res) => setReviewsArr(res.data));
  }, []);

  return (
    <>
      <div className="container-fluid bg-light pb-4">
        <PageHeader title="Our Reviews" />
        {user ? (
          <Link to={"/create_review"}>
            <button className="btn btn-primary fs-4 my-4">Create Review</button>
          </Link>
        ) : null}
        <br />

        <div className="card">
          {reviewsArr.map((item, index) => {
            return <Review key={index} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Reviews;
