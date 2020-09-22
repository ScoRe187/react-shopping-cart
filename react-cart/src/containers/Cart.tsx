import React from "react";
import s from "../css/style.module.scss";

interface Props {
  total: number;
  // any other props that come into the component
}

const Cart = ({ total }: Props) => {
  return (
    <div id="cart" className={s.cart}>
      <h2 className={s.textCenter}>Cart</h2>
      <div id="cart-area" className={s.cartArea}>
        <div className={s.cartTotal}>
          <div className={s.cartItem}>
            <span className={s.itemText}>total</span>
            <p className={s.itemTotal}>
              <span id="total-amount" className={s.totalAmount}>
                ${total}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
