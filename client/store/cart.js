import axios from "axios";

// ACTION TYPES
const SET_CART = "SET_CART";
const ADD_TO_CART = "ADD_TO_CART";

// ACTION CREATORS
const setCart = (cart) => ({ type: SET_CART, cart });
const _addToCart = (item, id) => ({ type: ADD_TO_CART, item, id });

// THUNK CREATORS
export const fetchCart = (userId) => {
  return async (dispatch) => {
    try {
      const { data: cart } = await axios.get(`/api/carts/active/${userId}`);

      console.log("cart in redux store -->", cart);

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

export const addToCart = (item, cart) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");

      if (token) {
        if (cart) {
          await axios.put(`/api/carts/${cart.id}`);
          dispatch(_addToCart(item));
        } else {
          const data = await axios.post("/api/carts");
          await axios.put(`/api/carts/${data.cart.id}`);
          dispatch(_addToCart(item, data.cart.id));
        }
      } else dispatch(_addToCart(item));
    } catch (error) {
      console.error("error in addItemToCart Thunk!");
    }
  };
};

export const cartLoginOrSignup = (userId, storeCart) => {
  return async (dispatch) => {
    try {
      const { data: cart } = await axios.get(`/api/carts/active/${userId}`);

      if (cart) {
        if (storeCart) {
          // REPLACE CART IN DB WITH REDUX STORE CART
        } else {
          // PUT DB CART IN THE STORE
        }
      } else {
        if (storeCart) {
          // POST STORE CART IN DB AS NEW CART
        }
      }
    } catch (error) {
      console.error("error in cartLogin thunk");
    }
  };
};

export const checkoutCart = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");

    if (token) {
      // PUT cart to update isCompleted, clear store
    } else {
      // POST cart to DB with no userId
    }
  };
};

// REDUCER
const initialState = {
  id: 0,
  sauces: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return { ...state, sauces: action.cart };
    case ADD_TO_CART:
      if (action.id) {
        return { id: action.id, sauces: [action.item] };
      } else {
        return { ...state, sauces: state.sauces.concat([action.item]) };
      }
    default:
      return state;
  }
}
