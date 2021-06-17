import axios from "axios";

// ACTION TYPES
const SET_CART = "SET_CART";
const ADD_TO_CART = "ADD_TO_CART";

// ACTION CREATORS
const setCart = (cart) => ({ type: SET_CART, cart });
const _addToCart = (item) => ({ type: ADD_TO_CART, item });

// THUNK CREATORS
export const fetchCart = (userId) => {
  return async (dispatch) => {
    try {
      const { data: cart } = await axios.get(`/api/carts/active/${userId}`);

      const cleanCart = cart.sauces.map((sauce) => {
        return {
          id: sauce.id,
          name: sauce.name,
          imageURL: sauce.imageURL,
          price: sauce.price,
          quantity: sauce.cartItem.quantity,
        };
      });

      dispatch(setCart(cleanCart));
    } catch (error) {
      console.error("Uh oh! error in fetchCart thunk.");
    }
  };
};


// REDUCER
const initialState = {
  id: 0,
  sauces: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return { ...state, sauces: action.cart };
    default:
      return state;
  }
}
