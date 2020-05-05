import React from "react";

const slide1 = "https://picsum.photos/200";
const slide2 = "https://picsum.photos/200";
const slide3 = "https://picsum.photos/200";

function Carousel() {
  return (
    <div className="container">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slide1} className="d-block w-100" alt="slid1" />
          </div>
          <div class="carousel-item">
            <img src={slide2} class="d-block w-100" alt="slice2" />
          </div>
          <div class="carousel-item">
            <img src={slide3} class="d-block w-100" alt="slice3" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" />
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true" />
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
