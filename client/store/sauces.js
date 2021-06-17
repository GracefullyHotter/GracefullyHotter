import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const SET_SAUCES = "SET_SAUCES";
const REMOVE_SAUCE = "REMOVE_SAUCE";

/**
 * ACTION CREATORS
 */
const setSauces = (sauces) => ({ type: SET_SAUCES, sauces });
const removeSauce = (id) => ({ type: REMOVE_SAUCE, id });

/**
 * THUNK CREATORS
 */

export const fetchSauces = () => {
  return async (dispatch) => {
    const { data: sauces } = await axios.get("/api/sauces");
    dispatch(setSauces(sauces));
  };
};

export const deleteSauce = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/sauces/${id}`);
    dispatch(removeSauce(id));
    history.push("/shop");
  };
};

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case SET_SAUCES:
      return action.sauces;
    case REMOVE_SAUCE:
      return state.filter((sauce) => sauce.id !== parseInt(action.id));
    default:
      return state;
  }
}
