import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function DummyCards() {
  return (
    <div
    id="carouselExampleCaptions"
    className="carousel slide mt-7" // Bootstrap class to add margin-top
    data-bs-ride="carousel"
    style={{ marginTop: '100px' }} // Inline style for more control
  >
    {/* Rest of the Sliders component code */}
  
    <div className="container my-5">
      <div className="row text-center">
        
        {/* Card 1 */}
        <div className="col-md-3">
          <div className="card p-4" style={{ backgroundColor: '#f8f1e8' }}>
            <i className="bi bi-truck" style={{ fontSize: '2rem', color: 'black' }}></i>
            <h5 className="mt-3">Free Shipping</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3">
          <div className="card p-4" style={{ backgroundColor: '#d7f0ed' }}>
            <i className="bi bi-credit-card" style={{ fontSize: '2rem', color: 'black' }}></i>
            <h5 className="mt-3">Safe Payment</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3">
          <div className="card p-4" style={{ backgroundColor: '#f7f3d5' }}>
            <i className="bi bi-shield-check" style={{ fontSize: '2rem', color: 'black' }}></i>
            <h5 className="mt-3">Secure Payment</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3">
          <div className="card p-4" style={{ backgroundColor: '#d8eafc' }}>
            <i className="bi bi-headset" style={{ fontSize: '2rem', color: 'black' }}></i>
            <h5 className="mt-3">Back Guarantee</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default DummyCards;
