import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "HP", price: 750, oldPrice: 1000 },
    { id: 2, name: "DELL", price: 500, oldPrice: 800 },
    { id: 3, name: " TOSHIBA", price: 600, oldPrice: 900 },
    { id: 4, name: "LENOVO", price: 700, oldPrice: 850 },
    { id: 5, name: "COMPAQ", price: 100, oldPrice: 200 },
    { id: 6, name: "SURFACE", price: 1000, oldPrice: 1300 },
    { id: 7, name: "MACBOOK", price: 2000, oldPrice: 2500 },
    { id: 8, name: "ASUS", price: 1500, oldPrice: 2200 },
    { id: 9, name: "GAMER", price: 3000, oldPrice: 3900 },
    { id: 10, name: "GAMER", price: 3000, oldPrice: 4000 },
    { id: 11, name: "GAMER", price: 3000, oldPrice: 4100 },
    { id: 12, name: "GAMER", price: 3000, oldPrice: 3600 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }

    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case TYPES.CLEAR_CART:
      return shoppingInitialState;
    case TYPES.AMOUNT_CART: {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    default:
      return state;
  }
}
