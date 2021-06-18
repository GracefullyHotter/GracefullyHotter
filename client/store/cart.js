import axios from "axios";
const jwt = require("jsonwebtoken");

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

export const addToCart = (item) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      const cartJSON = window.localStorage.getItem("cart");
      //turn JSON parse cart object into array to push item
      const cart = JSON.parse(cartJSON);
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));

      if (token) {
        //get user ID via token
        const { data: activeCart } = await axios.get("/api/carts/active", {
          headers: {
            authorization: token,
          },
        });

        //check is user has active cart in db
        if (activeCart) {
          //if active cart, put request to update cart in db
          const { data } = await axios.put(`/api/carts/${activeCart.id}`, item);
        } else {
          const { data } = await axios.post("/api/carts", item, {
            headers: {
              authorization: token,
            },
          });
        }
      }
      dispatch(_addToCart(item));
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

export default function (state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case ADD_TO_CART:
      return state.concat([action.item]);
    default:
      return state;
  }
}
