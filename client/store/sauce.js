import axios from "axios";

/**
 * ACTION TYPES
 */
const SET_SAUCE = "SET_SAUCE";
const CLEAR_SAUCE = "CLEAR_SAUCE";

/**
 * ACTION CREATORS
 */
const setSauce = (sauce) => ({ type: SET_SAUCE, sauce });
export const clearSauce = () => ({ type: CLEAR_SAUCE });

/**
 * THUNK CREATORS
 */

export const fetchSauce = (id) => {
  return async (dispatch) => {
    try {
      const { data: sauce } = await axios.get(`/api/sauces/${id}`);
      dispatch(setSauce(sauce));
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
    case SET_SAUCE:
      return action.sauce;
    case CLEAR_SAUCE:
      return {};
    default:
      return state;
  }
}
