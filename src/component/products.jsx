import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://localhost:3001");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </div>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <div className="row">
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("fiction")}
          >
            Fiction
          </button>

          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("philosophyr")}
          >
            Philosophy
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("competitive exams")}
          >
            Competitive Exams
          </button>

          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("self help")}
          >
            Self Help
          </button>

          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("children")}
          >
            Children and Ypung Adults
          </button>

        </div>

        {filter.map((Product) => {
          return (
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key={Product.id}>
                <img
                  src={Product.image}
                  className="card-img-top"
                  alt={Product.description}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">{Product.title}</h5>
                  <p className="card-text">{Product.author}</p>
                  <p className="card-text lead fw-bold">{Product.price}</p>
                  <NavLink
                    to={`/products/${Product.id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Latest Collections
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
