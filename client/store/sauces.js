import axios from "axios";

/**
 * ACTION TYPES
 */
const SET_SAUCES = "SET_SAUCES";

/**
 * ACTION CREATORS
 */
const setSauces = (sauces) => ({ type: SET_SAUCES, sauces });

/**
 * THUNK CREATORS
 */

export const fetchSauces = () => {
  return async (dispatch) => {
    const { data: sauces } = await axios.get("/api/sauces");
    dispatch(setSauces(sauces));
  };
};

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case SET_SAUCES:
      return action.sauces;
    default:
      return state;
  }
}
