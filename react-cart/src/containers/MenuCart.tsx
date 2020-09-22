import React, { useState } from "react";
import s from "../css/style.module.scss";
import Menu from "./Menu";
import Cart from "./Cart";

const MenuCart = () => {
  const [cartTotal, setCartTotal] = useState(0);
  return (
    <div id="menu-cart" className={s.menuCart}>
      <Menu />
      <Cart total={cartTotal} />
    </div>
  );
};

export default MenuCart;
