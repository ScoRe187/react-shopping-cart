import React from "react";
import s from "./css/style.module.scss";
import MenuCart from "./containers/MenuCart";

const App = () => {
  return (
    <div className={s.container}>
      <div id="app-holder" className={s.appHolder}>
        <MenuCart />
      </div>
    </div>
  );
};

export default App;
