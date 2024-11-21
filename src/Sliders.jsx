
import React from 'react';
import img1 from "../src/images/img1.png";
import img2 from "../src/images/img2.png";
import img3 from "../src/images/img3.jpg";
import img4 from "../src/images/img4.png";

function Sliders() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ backgroundColor: ' rgb(197, 188, 188);' }}>
      <div className="carousel-indicators">
        <button 
          type="button" 
          data-bs-target="#carouselExampleCaptions" 
          data-bs-slide-to="0" 
          className="active" 
          aria-current="true"
          aria-label="Slide 1">
        </button>
        <button 
          type="button" 
          data-bs-target="#carouselExampleCaptions" 
          data-bs-slide-to="1" 
          aria-label="Slide 2">
        </button>
        <button 
          type="button" 
          data-bs-target="#carouselExampleCaptions" 
          data-bs-slide-to="2" 
          aria-label="Slide 3">
        </button>
        <button 
          type="button" 
          data-bs-target="#carouselExampleCaptions" 
          data-bs-slide-to="3" 
          aria-label="Slide 4">
        </button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active" style={{ backgroundColor: ' rgb(197, 188, 188);' }}>
          <div className="d-flex align-items-center">
            <div className="col-md-8 d-flex flex-column justify-content-center" style={{ padding: '100px' }}>
              <h1 style={{ fontWeight: 'bold', color: 'black' }}>50% Off For Your First Shopping</h1>
              <p style={{ fontWeight: 'bold', color: 'black' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.
              </p>
              <p><a href="#" className="btn btn-primary">Visit Collections</a></p>
            </div>
            <div className="col-md-5" style={{ textAlign: 'center' }}>
              <img src={img1} style={{ width: '50%', margin: 'auto', display: 'block' }} alt="Product" />
            </div>
          </div>
        </div>

        <div className="carousel-item" style={{ backgroundColor: ' rgb(197, 188, 188);' }}>
          <div className="d-flex align-items-center">
            <div className="col-md-6 d-flex flex-column justify-content-center" style={{ padding: '50px' }}>
              <h1 style={{ fontWeight: 'bold', color: 'black' }}>50% Off For Your First Shopping</h1>
              <p style={{ fontWeight: 'bold', color: 'black' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.
              </p>
              <p><a href="#" className="btn btn-primary">Visit Collections</a></p>
            </div>
            <div className="col-md-8" style={{ textAlign: 'center' }}>
              <img src={img2} style={{ width: '50%', margin: 'auto', display: 'block' }} alt="Product" />
            </div>
          </div>
        </div>

        <div className="carousel-item" style={{ backgroundColor: ' rgb(197, 188, 188);' }}>
          <div className="d-flex align-items-center">
            <div className="col-md-7 d-flex flex-column justify-content-center" style={{ padding: '120px' }}>
              <h1 style={{ fontWeight: 'bold', color: 'black' }}>50% Off For Your First Shopping</h1>
              <p style={{ fontWeight: 'bold', color: 'black' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.
              </p>
              <p><a href="#" className="btn btn-primary">Visit Collections</a></p>
            </div>
            <div className="col-md-5" style={{ textAlign: 'center' }}>
              <img src={img3} style={{ width: '60%', margin: 'auto', display: 'block' }} alt="Product" />
            </div>
          </div>
        </div>

        <div className="carousel-item" style={{ backgroundColor: ' rgb(197, 188, 188);' }}>
          <div className="d-flex align-items-center">
            <div className="col-md-6 d-flex flex-column justify-content-center" style={{ padding: '50px' }}>
              <h1 style={{ fontWeight: 'bold', color: 'black' }}>50% Off For Your First Shopping</h1>
              <p style={{ fontWeight: 'bold', color: 'black' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.
              </p>
              </div>
              <p><a href="#" className="btn btn-primary">Visit Collections</a></p>
            
            <div className="col-md-8" style={{ textAlign: 'center' }}>
              <img src={img4} style={{ width: '50%', margin: 'auto', display: 'block' }} alt="Product" />
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Sliders;



