import React, { useState, useEffect } from "react";
import { useDispatch} from 'react-redux';
import { addCart } from '../redux/action'
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product)=>{
    dispatch(addCart(product));
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:3002/posts`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <div className="row">
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="display-5 fw-bolder">{product.title}</h4>
          <h1 className="display-5 ">{product.author}</h1>
          <h3 className="lead fw-bolder">Price: {product.price}</h3>
          <p className="lead">Category: {product.category}</p>
          <p className="lead">Description: {product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(product)}>
            ADD TO CART
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};
export default Product;


/*bjhwqdjkdkajnsk*/