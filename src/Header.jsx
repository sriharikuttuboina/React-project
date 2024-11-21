
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="navbar bg-light shadow-sm p-3">
      
      <div className="navbar-brand">
      <img src="https://www.achieversit.com/assets/images/logo-white.png"
      alt="Achievers IT"
      style={{ height: '40px' }}
      />
      </div>

  
      <div className="d-flex align-items-center">
        <Link to="/home" className="nav-link text-dark mx-3">
          Home
        </Link>
        <Link to="/shop" className="nav-link text-dark mx-2">
          Shop
        </Link>
        <Link to="/cart" className="nav-link text-dark mx-2">
          Cart
        </Link>

        <i className="bi bi-person mx-3" style={{ fontSize: '20px' }}></i>
        <i className="bi bi-cart-fill mx-3" style={{ fontSize: '20px' }}></i>
      </div>
    </div>
  );
};

export default Header;





