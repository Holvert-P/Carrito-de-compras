// import React, { useState } from "react";
import CartItem from "./CartItem";
const Cart = ({ cart, clearCart, delFromCart, moreProduct, setIsVisible }) => {
  // const [total, setTotal] = useState(0);
  return (
    <div className="cart">
      <h2 className="subtitle">Carrito</h2>
      <button onClick={() => setIsVisible(false)} className="btn-close">
        X
      </button>
      <article className="box">
        <button onClick={clearCart} className="clear-btn">
          Clear Cart
        </button>
        <div className="head-table-cart">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p></p>
        </div>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <CartItem
              key={index}
              data={item}
              delFromCart={delFromCart}
              moreProduct={moreProduct}
            />
          ))
        ) : (
          <div className="no-product">
            <p>Empty cart</p>
          </div>
        )}
      </article>
      <article>
        <p></p>
      </article>
    </div>
  );
};

export default Cart;
