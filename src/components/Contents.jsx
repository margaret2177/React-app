import React from "react";
import Carousel from "./Carousel";

const style = {
  width: "18rem",
  margin: "0 auto",
  float: "none",
  marginBottom: "10px",
  display: "inline-block"
};

// const card={
//   margin: "0 auto",
//   float: "none",
//   marginBottom: "10px",
// }

const imgs = "https://picsum.photos/200";
function Contents() {
  return (
    <div class="container" style={{ textAlign: "center" }}>
      <p>
        <div class="card m-4" style={style}>
          <img src={imgs} class="card-img-top" alt="picsum" />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>

        <div class="card m-4" style={style}>
          <img src={imgs} class="card-img-top" alt="picsum" />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>

        <div class="card m-4" style={style}>
          <img src={imgs} class="card-img-top" alt="picsum" />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </p>

      <p>
        <Carousel />
      </p>
    </div>
  );
}

export default Contents;
