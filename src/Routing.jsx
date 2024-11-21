
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Arrivalspage from './Arrivalspage'; 
import ProductDetails from './ProductDetails'; 

const Routing = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/arrivals" element={<Arrivalspage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

  );
};

export default Routing;






