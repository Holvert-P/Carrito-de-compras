import React from "react";

const CartItem = ({ data, delFromCart, moreProduct }) => {
  let { id, name, price, quantity } = data;

  return (
    <div className="item-cart">
      <p className="item-name">{name}</p>
      <p>{`$` + price}.00</p>
      <div className="item-quantity">
        <p>{quantity}</p>
        <article>
          <span onClick={() => moreProduct(id)}>
            <svg
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path
                d="M215.39111,163.06152A8.00015,8.00015,0,0,1,208,168H48a7.99981,7.99981,0,0,1-5.65674-13.65674l80-80a8,8,0,0,1,11.31348,0l80,80A7.99982,7.99982,0,0,1,215.39111,163.06152Z"
                fill="#fff"
              />
            </svg>
          </span>
          <span onClick={() => delFromCart(id)}>
            <svg viewBox="0 0 256 256" className="delete">
              <path
                d="M215.39111,163.06152A8.00015,8.00015,0,0,1,208,168H48a7.99981,7.99981,0,0,1-5.65674-13.65674l80-80a8,8,0,0,1,11.31348,0l80,80A7.99982,7.99982,0,0,1,215.39111,163.06152Z"
                fill="#fff"
              />
            </svg>
          </span>
        </article>
      </div>
      <p>{`$` + quantity * price}.00</p>
      <div>
        {/* <button className="clear-btn" onClick={() => delFromCart(id)}>
          One
        </button> */}
        <button className="clear-btn" onClick={() => delFromCart(id, true)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
