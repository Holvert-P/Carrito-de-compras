import { useReducer, useState } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducers";
import ProductItem from "./ProductItem";

import { TYPES } from "../actions/shoppingActions";
import Cart from "./Cart";

const ShopingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;
  const [isVisible, setIsVisible] = useState(false);

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };
  const moreProduct = (id) => {
    dispatch({ type: TYPES.AMOUNT_CART, payload: id });
    console.log(id);
  };
  return (
    <div className="container">
      <header>
        <h1 className="title">Shoping</h1>
        <span className="shopping-cart">
          <button
            className="btn-cart"
            onClick={() => setIsVisible(!isVisible)}
          ></button>
          <span className="cart-amount">{cart.length}</span>
        </span>
      </header>

      <section className="grid-layout">
        <div>
          <h2 className="subtitle">Products</h2>
          <article className="box grid-responsive">
            {products.map((product) => (
              <ProductItem
                key={product.id}
                data={product}
                addToCart={addToCart}
              />
            ))}
          </article>
        </div>
        {isVisible && (
          <Cart
            cart={cart}
            clearCart={clearCart}
            delFromCart={delFromCart}
            moreProduct={moreProduct}
            setIsVisible={setIsVisible}
          />
        )}
      </section>
    </div>
  );
};

export default ShopingCart;
