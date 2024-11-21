
import React from 'react';
import { useCart } from './CartContext';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Cart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
  <div className="container my-5">
  <h1 className="mb-4">Cart</h1>
  <div className="row">
  <div className="col-12 col-md-8">
  {cartItems.length === 0 ? (
  <p>Your cart is empty.</p>
  ) : (
  <ul className="list-group">
  {cartItems.map((item, index) => (
  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
  <div className="d-flex align-items-center">
  <img src={item.imgUrl} alt={item.productName} style={{ width: '100px',height: '100px',  objectFit: 'cover',  marginRight: '10px', }}/>
                    <div>
                      <h5>{item.productName}</h5>
                      <p>${item.price} x {item.quantity}</p>
                      <p>Total: ${item.price * item.quantity}</p>
                    </div>
                  </div>
             
                  <div className="d-flex align-items-center">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="btn btn-secondary me-2"
                    >
                      <i className="bi bi-dash"></i>
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="btn btn-secondary ms-2"
                    >
                      <i className="bi bi-plus"></i>
                    </button>
                  </div>
                
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn btn-danger"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="col-12 col-md-4">
          <div
            className="card text-center"
            style={{
              position: 'sticky',
              top: '10px',
            }}
          >
            <div className="card-body">
              <h3>Cart summary</h3>
              <p>Total amount</p>
              <p className="fs-4">${totalAmount.toFixed(2)}</p>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
