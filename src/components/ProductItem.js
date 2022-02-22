import React from "react";
import productImg from "../assets/laptop.png";
import bag from "../assets/shopping-bag.svg";

const ProductItem = ({ data, addToCart }) => {
  let { id, name, price, oldPrice } = data;
  return (
    <article className="product-item">
      <figure>
        <div className="item-header">
          <img src={productImg} alt="laptop" />
          <button className="add-cart" onClick={() => addToCart(id)}>
            <img src={bag} alt="bag" />
          </button>
        </div>
        <div className="item-body">
          <figcaption>{name}</figcaption>
          <div className="prices">
            <p>{price}.00</p>
            <p>{oldPrice}.00</p>
          </div>
        </div>
      </figure>
    </article>
  );
};

export default ProductItem;
