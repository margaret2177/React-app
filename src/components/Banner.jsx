import React from "react";
import Heading from "./Heading";
let Bg = "https://picsum.photos/seed/picsum/1366/700";

function Banner() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${Bg})`,

        backgroundRepeat: "no-repeat",
        height: "550px",
        textAlign: "center"
      }}
    >
      {/* <img src={banner} alt="banner" /> */}
      <Heading />
      <div class="row">
        <div class="col">
          <h1 style={{ marginTop: "200px" }}>Hi I'm Nezuko</h1>
          <button className="btn btn-primary m-2">Hire Me</button>
          <button className="btn btn-secondary m-2">Get CV</button>
        </div>
        <div class="col">2 of 2</div>
      </div>
    </div>
  );
}

export default Banner;
