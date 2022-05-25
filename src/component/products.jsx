import React from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../Data'

const Product = () => {

  const cardItem = (Product) => {
    return (
      <div class="card my-5 py-4" key={Product.id} style={{ width: "18rem" }}>
        <img src={Product.image} class="card-img-top" alt={Product.title}  height ="300px" />
        <div class="card-body text-center">
          <h5 class="card-title">{Product.title}</h5>
          <p className="lead">{Product.category}</p>
          <p className="lead">{Product.author}</p>
          <p className="lead">{Product.price}</p>
          <NavLink to={`/products/${Product.id}`} class="btn btn-outline-dark">Buy Now</NavLink>
        </div>
      </div>
    );
  }
  

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Latest Arrivals</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {DATA.map(cardItem)}
        </div>
      </div>
    </div>
  )
}

export default Product

