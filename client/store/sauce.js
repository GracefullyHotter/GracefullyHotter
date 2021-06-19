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

export const fetchSauce = (item) => {
  return async (dispatch) => {
    try {
      const { data: sauce } = await axios.get(`/api/sauces/${item.id}`);
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
    default:
      return state;
  }
}
