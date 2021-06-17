import axios from "axios";

/**
 * ACTION TYPES
 */
const SET_USER = "SET_USER";

/**
 * ACTION CREATORS
 */
const setUser = (user) => ({ type: SET_USER, user });

/**
 * THUNK CREATORS
 */

export const fetchSingleUser = (id) => {
  return async (dispatch) => {
    const { data: user } = await axios.get(`/api/users/${id}`);
    dispatch(setUser(user));
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
