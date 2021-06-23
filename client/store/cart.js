import axios from "axios";

// ACTION TYPES
const SET_CART = "SET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_CARTITEM = "REMOVE_CARTITEM";
const UPDATE_CART = "UPDATE_CART";
const CHECKOUT = "CHECKOUT";
const LOGOUT = "LOGOUT";

// ACTION CREATORS
const setCart = (cart) => ({ type: SET_CART, cart });
const _addToCart = (item) => ({ type: ADD_TO_CART, item });
const _updateCart = (item) => ({ type: UPDATE_CART, item });
const _removeCartItem = (id) => ({ type: REMOVE_CARTITEM, id });
const checkout = () => ({ type: CHECKOUT });
const logout = () => ({ type: LOGOUT });

// THUNK CREATORS
export const loginCart = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      const localCart = JSON.parse(localStorage.getItem("cart"));

      const { data: activeCart } = await axios.get("/api/carts/active", {
        headers: {
          authorization: token,
        },
      });

      if (activeCart) {
        // if there's a cart in the DB
        // console.log("active cart -->", activeCart);

        if (localCart.length > 0) {
          await axios.put("/api/carts/merge", localCart, {
            headers: {
              authorization: token,
            },
          });

          const { data: newCart } = await axios.get("/api/carts/active", {
            headers: {
              authorization: token,
            },
          });

          const storeCart = newCart.sauces.map((sauce) => {
            return {
              id: sauce.id,
              price: sauce.price,
              quantity: sauce.cartItem.quantity,
              name: sauce.name,
              imageURL: sauce.imageURL,
            };
          });

          console.log("MERGED CART --->", storeCart);

          window.localStorage.setItem("cart", JSON.stringify(storeCart));
          dispatch(setCart(newCart.sauces));
        } else {
          const storeCart = activeCart.sauces.map((sauce) => {
            return {
              id: sauce.id,
              price: sauce.price,
              quantity: sauce.cartItem.quantity,
              name: sauce.name,
              imageURL: sauce.imageURL,
            };
          });

          console.log("adding DB cart to local storage --->", storeCart);

          window.localStorage.setItem("cart", JSON.stringify(storeCart));
          dispatch(setCart(storeCart));
        }
      } else {
        //no cart in DB
        if (localCart.length > 0) {
          //POST localStorage to DB
          const { data } = await axios.post("/api/carts", localCart, {
            headers: {
              authorization: token,
            },
          });

          console.log("Posted local cart to DB");
        } else {
          console.log("no cart in db or localStorage");
        }
      }
    } catch (error) {
      console.error("error in loginCart thunk");
    }
  };
};

export const addToCart = (item) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        localStorage.setItem("cart", JSON.stringify([]));
      }

      let itemExists = false;
      let newQuantity = item.quantity;
      cart.forEach((cartItem) => {
        if (cartItem.id === item.id) {
          itemExists = true;
          cartItem.quantity++;
          newQuantity = cartItem.quantity;
        }
      });
      if (!itemExists) cart.push(item);
      else item.quantity = newQuantity;
      console.log("cart", cart);

      localStorage.setItem("cart", JSON.stringify(cart));

      if (token) {
        const { data: activeCart } = await axios.get("/api/carts/active", {
          headers: {
            authorization: token,
          },
        });

        console.log("item", item);

        //check is user has active cart in db
        if (activeCart) {
          console.log("activecart", activeCart);
          //if active cart, put request to update cart in db
          const { data } = await axios.put(`/api/carts/${activeCart.id}`, item);
        } else {
          console.log("post request new cart");
          const { data } = await axios.post("/api/carts", [item], {
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

export const updateCart = (item) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        localStorage.setItem("cart", JSON.stringify([]));
      }

      cart.forEach((cartItem) => {
        if (cartItem.id === item.id) {
          cartItem = item;
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      if (token) {
        const { data: activeCart } = await axios.get("/api/carts/active", {
          headers: {
            authorization: token,
          },
        });
        if (activeCart) {
          const { data } = await axios.put(`/api/carts/${activeCart.id}`, item);
        }
      }
      dispatch(_updateCart(item));
    } catch (error) {
      console.error("error in updateCart Thunk!");
    }
  };
};

export const deleteCartItem = (id) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        localStorage.setItem("cart", JSON.stringify([]));
      }

      const newCart = cart.filter((cartItem) => cartItem.id !== id);
      // const removedItem = cart.filter((cartItem) => cartItem.id === id);

      localStorage.setItem("cart", JSON.stringify(newCart));

      if (token) {
        const { data: activeCart } = await axios.get("/api/carts/active", {
          headers: {
            authorization: token,
          },
        });

        if (activeCart) {
          const { data } = await axios.delete(`/api/carts/active/${id}`, {
            headers: {
              authorization: token,
            },
          });
        }
      }

      dispatch(_removeCartItem(id));
    } catch (error) {
      console.log("error in deleteCartItem thunk!");
    }
  };
};

export const checkoutCart = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (cart.length === 0) {
      console.log("NO CART TO CHECK OUT");
    } else if (token) {
      const data = await axios.put("/api/carts/checkout", {
        headers: {
          authorization: token,
        },
      });

      window.localStorage.setItem("cart", JSON.stringify([]));
      dispatch(checkout());
    } else {
      console.log("A GUEST USER IS CHECKING OUT");

      const { data } = await axios.post("/api/carts", cart);

      window.localStorage.setItem("cart", JSON.stringify([]));
      dispatch(checkout());
    }
  };
};

export const logoutCart = () => {
  return async (dispatch) => {
    try {
      dispatch(logout());
    } catch (error) {
      console.log(error);
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
    case UPDATE_CART:
      return state.map((cartItem) => {
        return cartItem.id === action.item.id ? action.item : cartItem;
      });
    case REMOVE_CARTITEM:
      return state.filter((cartItem) => cartItem.id !== action.id);
    case LOGOUT:
      return [];
    case CHECKOUT:
      return [];
    default:
      return state;
  }
}
