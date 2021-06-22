import axios from "axios";

// ACTION TYPES
const SET_ORDERS = "SET_ORDERS";

// ACTION CREATORS
const setOrders = (orders) => ({ type: SET_ORDERS, orders });

// THUNK CREATORS
export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");

      const { data: orders } = await axios.get("/api/carts/orders", {
        headers: {
          authorization: token,
        }
      });

      dispatch(setOrders(orders));
    } catch (error) {
      console.error("error in fetchOrders thunk!");
    }
  }
}

// REDUCER
export default function (state = [], action) {
  switch (action.type) {
    case SET_ORDERS:
      return action.orders;
    default:
      return state;
  }
}
