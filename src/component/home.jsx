import React from "react";
import Products from "./products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://media.istockphoto.com/photos/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-picture-id1222550815?b=1&k=20&m=1222550815&s=170667a&w=0&h=MTxBeBrrrYtdlpzhMpD1edwLYQf3OPgkNeDEgIzYJww="
          className="card-img"
          alt="BackGround"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              Build Your Own Library
            </h5>
            <p className="card-text lead fs-2">
              Check It Out Now
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};
export default Home;
