import React from "react";

import PageHeader from "../components/Header/PageHeader";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="container-fluid bg-light pb-4">
        <PageHeader title="Error" />
        <button className="btn btn-primary">
          <Link to="/" className="error">
            Back To HomePage
          </Link>
        </button>
      </div>
    </>
  );
};

export default Error;
