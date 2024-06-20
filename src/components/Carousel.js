import React from 'react';

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{zIndex:"10"}}>

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
            </form>

          </div>
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1604908554097-4bee4f690a8a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ "maxHeight": "700px" }} className="d-block  w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1600891964751-dc0cc8611e47?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ "maxHeight": "700px" }} className="d-block  w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ "maxHeight": "700px" }} className="d-block  w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  );
}
