
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Arrivals } from './Arrivals'; 

const ProductDetails = () => {
  const { id } = useParams();
  const product = Arrivals.find((p) => p.id === id);

  const recommendedProducts = Arrivals.filter((p) => p.id !== id).slice(0, 3);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imgUrl}
            alt={product.productName}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1>{product.productName}</h1>
          <div className="text-warning mb-2">
            {'★'.repeat(Math.round(product.avgRating)) +
              '☆'.repeat(5 - Math.round(product.avgRating))}
          </div>
          <h2>${product.price}</h2>
          <p>{product.shortDesc}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>

      <div className="mt-4">
        <h2>Description</h2>
        <p>{product.description}</p>
      </div>

      <h2 className="mt-5">You Might Also Like</h2>
      <div className="row mt-4">
        {recommendedProducts.map((recProduct) => (
          <div key={recProduct.id} className="col-md-5 col-lg-4 mb-4">
            <Link
              to={`/product/${recProduct.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="card h-250 shadow-sm position-relative">
                <img
                  src={recProduct.imgUrl}
                  alt={recProduct.productName}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{recProduct.productName}</h5>
                  <div className="text-warning mb-2">
                    {'★'.repeat(Math.round(recProduct.avgRating)) +
                      '☆'.repeat(5 - Math.round(recProduct.avgRating))}
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="text-dark mb-0">${recProduct.price}</h6>
                    <i
                      className="bi bi-plus-circle text-primary ms-2"
                      style={{ cursor: 'pointer', fontSize: '20px' }}
                    ></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
