import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
            The Booktown began as an idea to help support bookstores and their communities at a time when more and more people were buying their books online. We saw an opportunity to create an alternative to Amazon for socially-conscious online shoppers. Amazon sells over 60% of all books in the US and is growing. That shift threatens the future of bookstores and will hurt readers, authors, and publishers who rely on a diverse, healthy ecosystem for books. We had a better idea — give readers the convenience of online shopping while supporting independent bookstores at the same time.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="https://st2.depositphotos.com/1105977/5461/i/600/depositphotos_54615585-stock-photo-old-books-on-wooden-table.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
