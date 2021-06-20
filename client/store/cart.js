import axios from "axios";

// ACTION TYPES
const SET_CART = "SET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_CARTITEM = "REMOVE_CARTITEM";
const CHECKOUT = "CHECKOUT";


// ACTION CREATORS
const setCart = (cart) => ({ type: SET_CART, cart });
const _addToCart = (item) => ({ type: ADD_TO_CART, item });
const _removeCartItem = (id) => ({ type: REMOVE_CARTITEM, id });
const checkout = () => ({ type: CHECKOUT });


// THUNK CREATORS
export const fetchCart = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      const { data: activeCart } = await axios.get("/api/carts/active", {
        headers: {
          authorization: token,
        },
      });

      if (activeCart) {
        console.log("active cart -->", activeCart);

        const storeCart = activeCart.sauces.map((sauce) => {
          return {
            id: sauce.id,
            price: sauce.price,
            quantity: sauce.cartItem.quantity,
          };
        });

        window.localStorage.setItem("cart", JSON.stringify(storeCart));
        dispatch(setCart(storeCart));
      } else {
        // Later: store cart to DB here
        console.log("no active cart for this user in the DB");
      }
    } catch (error) {
      console.error("Uh oh! error in fetchCart thunk.");
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

      console.log("before cart", cart);
      cart.forEach((cartItem) => {
        if (cartItem.id === item.id) {
          itemExists = true;
          cartItem.quantity++;
          newQuantity = cartItem.quantity;
        }
      });
      console.log("after cart", cart);

      if (!itemExists) cart.push(item);
      else item.quantity = newQuantity;

      console.log("item", item);

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
          console.log("put data", data);
        } else {
          console.log("post request new cart");
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

// export const deleteCartItem = (id) => {
//   return async (dispatch) => {
//     try {
//       const token = localStorage.getItem("token");
//       const cart = JSON.parse(localStorage.getItem("cart"));
//       if (!cart) {
//         localStorage.setItem("cart", JSON.stringify([]));
//       }

//       localStorage.setItem("cart", JSON.stringify(cart));

//       if (token) {
//         const { data: activeCart } = await axios.get("/api/carts/active", {
//           headers: {
//             authorization: token,
//           },
//         });

//         //check is user has active cart in db
//         if (activeCart) {
//           //if active cart, put request to update cart in db
//           const { data } = await axios.put(`/api/carts/${activeCart.id}`, item);
//           console.log("put data", data);
//         }
//       }
//       dispatch(_removeCartItem(id));
//     } catch (error) {
//       console.log("error in deleteCartItem thunk!");
//     }
//   };
// };

// export const cartLoginOrSignup = (userId, storeCart) => {
//   return async (dispatch) => {
//     try {
//       const { data: cart } = await axios.get(`/api/carts/active/${userId}`);

//       if (cart) {
//         if (storeCart) {
//           // REPLACE CART IN DB WITH REDUX STORE CART
//         } else {
//           // PUT DB CART IN THE STORE
//         }
//       } else {
//         if (storeCart) {
//           // POST STORE CART IN DB AS NEW CART
//         }
//       }
//     } catch (error) {
//       console.error("error in cartLogin thunk");
//     }
//   };
// };

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
      window.localStorage.setItem("cart", JSON.stringify([]));
      dispatch(checkout());
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
    case REMOVE_CARTITEM:
      return state.filter((cartItem) => cartItem.id !== action.id);
    case CHECKOUT:
      return [];
    default:
      return state;
  }
}
