import axios from "axios";

/**
 * ACTION TYPES
 */
const SET_SAUCE = "SET_SAUCE";

/**
 * ACTION CREATORS
 */
const setSauce = (sauce) => ({ type: SET_SAUCE, sauce });

/**
 * THUNK CREATORS
 */

export const fetchSauce = (id) => {
  return async (dispatch) => {
    const { data: sauce } = await axios.get(`/api/sauces/${id}`);
    dispatch(setSauce(sauce));
  };
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_SAUCE:
      return action.sauce;
    default:
      return state;
  }
}
