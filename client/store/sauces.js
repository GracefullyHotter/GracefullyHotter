import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */

const SET_SAUCES = "SET_SAUCES";
const CREATE_SAUCE = "CREATE_SAUCE";
const REMOVE_SAUCE = "REMOVE_SAUCE";
const UPDATE_SAUCE = "UPDATE_SAUCE";

/**
 * ACTION CREATORS
 */

const setSauces = (sauces) => ({ type: SET_SAUCES, sauces });
const createSauce = (sauce) => ({ type: CREATE_SAUCE, sauce });
const removeSauce = (id) => ({ type: REMOVE_SAUCE, id });
const updateSauce = (updatedSauce) => ({ type: UPDATE_SAUCE, updatedSauce });

/**
 * THUNK CREATORS
 */

export const fetchSauces = () => {
  return async (dispatch) => {
    try {
      const { data: sauces } = await axios.get("/api/sauces");
      dispatch(setSauces(sauces));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createNewSauce = (sauce) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        const { data: created } = await axios.post("/api/sauces", sauce, {
          headers: {
            authorization: token,
          },
        });
        dispatch(createSauce(created));
        history.push("/shop");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteSauce = (id) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        await axios.delete(`/api/sauces/${id}`, {
          headers: {
            authorization: token,
          },
        });
        dispatch(removeSauce(id));
        history.push("/shop");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const putSauce = (id, sauce) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        const { data: updatedSauce } = await axios.put(
          `/api/sauces/${id}`,
          sauce,
          {
            headers: {
              authorization: token,
            },
          }
        );
        dispatch(updateSauce(updatedSauce));
        history.push(`/shop/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case SET_SAUCES:
      return action.sauces;
    case CREATE_SAUCE:
      return [...state, action.sauce];
    case REMOVE_SAUCE:
      return state.filter((sauce) => sauce.id !== parseInt(action.id));
    case UPDATE_SAUCE:
      return state.map((sauce) => {
        return sauce.id === action.sauce.id ? action.sauce : sauce;
      });
    default:
      return state;
  }
}
