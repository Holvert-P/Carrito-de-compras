// import React, { useState } from "react";
import CartItem from "./CartItem";
const Cart = ({ cart, clearCart, delFromCart, moreProduct, setIsVisible }) => {
  let total = 0;

  cart.map((item) => (total += item.price * item.quantity));
  return (
    <div className="cart">
      <h2 className="subtitle">Shopping cart</h2>
      <article className="box">
        <button onClick={clearCart} className="clear-btn">
          Clear Cart
        </button>
        <div className="head-table-cart">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Sub Total</p>
          <p></p>
        </div>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <CartItem
              key={index}
              data={item}
              delFromCart={delFromCart}
              moreProduct={moreProduct}
              total={cart.total}
            />
          ))
        ) : (
          <div className="no-product">
            <p>Empty cart</p>
          </div>
        )}
      </article>
      {/* <article> */}
      <p className="total-buy">Total = {total}</p>
      {/* </article> */}
      <button onClick={() => setIsVisible(false)} className="btn-close">
        Back to store
      </button>
    </div>
  );
};

export default Cart;
