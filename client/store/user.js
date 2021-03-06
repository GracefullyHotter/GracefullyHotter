import axios from "axios";
import history from "../history";

/* ACTION TYPES*/
const SET_USER = "SET_USER";
const UPDATE_USER = "UPDATE_USER";

/**
 * ACTION CREATORS
 */
const setUser = (user) => ({ type: SET_USER, user });
const updateUser = (user) => ({ type: UPDATE_USER, user });

/**
 * THUNK CREATORS
 */

export const fetchSingleUser = (id) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        const { data: user } = await axios.get(`/api/users/${id}`, {
          headers: {
            authorization: token,
          },
        });
        dispatch(setUser(user));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;

    default:
      return state;
  }
}
