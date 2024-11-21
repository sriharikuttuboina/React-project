
// import React from 'react';
// import { discoutProducts } from './discountproducts';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const Discount = () => {
//   return (
//     <div className="container my-5">
//       <h1 className="text-center mb-4">BIG DISCOUNT</h1>
//       <div className="row">
//         {discoutProducts.map((product) => (
//           <div key={product.id} className="col-md-5 col-lg-4 mb-4">
//             <div className="card h-250 shadow-sm position-relative">
//               <span
//                 className="badge bg-primary position-absolute"
//                 style={{ top: '10px', left: '10px' }}
//               >
//                 {product.discount}% Off
//               </span>

//               <img
//                 src={product.imgUrl}
//                 alt={product.productName}
//                 className="card-img-top"
//                 style={{ height: '200px', objectFit: 'cover' }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{product.productName}</h5>
//                 <div className="text-warning mb-2">
//                   {'★'.repeat(Math.round(product.avgRating)) +
//                     '☆'.repeat(5 - Math.round(product.avgRating))}
//                 </div>

//                 <div className="d-flex justify-content-between align-items-center">
//                   <h6 className="text-dark mb-0">${product.price}</h6>
//                   <i
//                     className="bi bi-plus-circle text-primary ms-2"
//                     style={{ cursor: 'pointer', fontSize: '20px' }}
//                   ></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Discount;


import React from 'react';
import { discoutProducts } from './discountproducts';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useCart } from './CartContext'; // Import useCart

const Discount = () => {
  const { addToCart } = useCart(); // Access addToCart function

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">BIG DISCOUNT</h1>
      <div className="row">
        {discoutProducts.map((product) => (
          <div key={product.id} className="col-md-5 col-lg-4 mb-4">
            <div className="card h-250 shadow-sm position-relative">
              <span
                className="badge bg-primary position-absolute"
                style={{ top: '10px', left: '10px' }}
              >
                {product.discount}% Off
              </span>

              <img
                src={product.imgUrl}
                alt={product.productName}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <div className="text-warning mb-2">
                  {'★'.repeat(Math.round(product.avgRating)) +
                    '☆'.repeat(5 - Math.round(product.avgRating))}
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="text-dark mb-0">${product.price}</h6>
                  <i
                    className="bi bi-plus-circle text-primary ms-2"
                    style={{ cursor: 'pointer', fontSize: '20px' }}
                    onClick={() => addToCart(product)} // Add to cart on click
                  ></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discount;
