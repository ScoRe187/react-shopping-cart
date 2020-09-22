import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import Menu from "./Menu";

function MenuCart() {
  const [menuData, setMenuData] = useState({
    2455156: {
      productName: "SteelSeries Sensei Raw",
      price: 99,
    },

    8854932: {
      productName: "Keyboard Kingston Alloy FPS",
      price: 169,
    },

    4426518: {
      productName: "Intel Core i5 7400K",
      price: 249,
    },

    9144523: {
      productName: "Mousepad SteelSeries Quick+",
      price: 49,
    },

    1445876: {
      productName: "Keyboard Tesoro Excalibur V2",
      price: 119,
    },
  });

  const [cartData, setCartData] = useState({});
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    Object.keys(cartData).map((sku, _) => {
      let qty = cartData[sku];
      let price = menuData[sku].price;
      total += qty * price;
    });

    setCartTotal(total);
  }, [cartData]);

  const addToCart = (sku) => {
    let newCart = { ...cartData };

    if (sku in cartData) {
      newCart[sku] += 1;
    } else {
      newCart[sku] = 1;
    }

    setCartData(newCart);
  };

  const reduceFromCart = (sku) => {
    let newCart = { ...cartData };

    if (sku in cartData) {
      newCart[sku] -= 1;
      if (newCart[sku] < 1) delete newCart[sku];
    }

    setCartData(newCart);
  };

  return (
    <div id="menu-cart">
      <Menu menu={menuData} addToCart={addToCart} />{" "}
      <Cart
        cart={cartData}
        total={cartTotal}
        reduceCart={reduceFromCart}
        menu={menuData}
      />{" "}
    </div>
  );
}

export default MenuCart;
