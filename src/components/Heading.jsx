import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
function Heading() {
  return (
    <p>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a class="navbar-brand" href="H">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="mr-auto" />
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="home">
                Home <span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="features">
                Features
              </a>
              <a class="nav-item nav-link" href="pricing">
                Pricing
              </a>
            </div>
          </div>
        </nav>
      </div>
    </p>
  );
}

export default Heading;
