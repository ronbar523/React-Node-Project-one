import React from "react";
import PageHeader from "../components/Header/PageHeader";

const About = () => {
  return (
    <>
      <div className="container-fluid bg-light pb-4">
        <PageHeader title="About Us" />
        <div className="container-home">
          <div className="container-home-a">
            <p className="about-p p-5 fs-4">
              We'm glad you came to our store, we assure you will not be
              disappointed,
              <br />
              <br />
              Our goal is to give our customers the opportunity to sell quality
              dog ​​products or buy the highest quality products
              <br />
              <br />
              The quality of the products is very important to us, and a seller
              who sells products at a low quality level will not be able to
              continue selling through us
            </p>
            <div className="container-about-b">
              <img
                className=" img-about"
                src="https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/5bwAAOSwZe5hvk3N/$_7.JPG"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
