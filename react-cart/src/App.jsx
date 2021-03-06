import React from "react";
import "./css/reset.css";
import "./css/style.css";
import MenuCart from "./containers/MenuCart";

function App() {
  return (
    <div class="container">
      <div id="app-holder">
        <MenuCart />
      </div>
    </div>
  );
}

export default App;