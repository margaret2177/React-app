import React from "react";

import Contents from "./components/Contents";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function App() {
  return (
    <div>
      <Banner />
      <div class="container" style={{ textAlign: "center", width: "80%" }}>
        <Contents />
        <Footer />
      </div>
    </div>
  );
}

export default App;
