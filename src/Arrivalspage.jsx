
import React from 'react';
import { Link } from 'react-router-dom';
import { Arrivals } from './Arrivals'; 

const Arrivalspage = () => {
return (
<div className="container my-5">
<h1 className="text-center mb-4">NEW ARRIVALS</h1>
<div className="row">
{Arrivals.map((product) => (
<div key={product.id} className="col-md-5 col-lg-4 mb-4">
<Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
<div className="card h-250 shadow-sm position-relative">
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

export default Arrivalspage;




