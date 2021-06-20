import axios from "axios";
import { act } from "react-test-renderer";
import history from "../history";

/**
 * ACTION TYPES
 */

const SET_SAUCES = "SET_SAUCES";
const CREATE_SAUCE = "CREATE_SAUCE";
const REMOVE_SAUCE = "REMOVE_SAUCE";
const UPDATE_SAUCE = "UPDATE_SAUCE";
const FILTER_BY_ONE_PEPPER = "FILTER_BY_ONE_PEPPER";
const FILTER_BY_PRICE_OR_SPICE = "FILTER_BY_PRICE_OR_SPICE";

/**
 * ACTION CREATORS
 */

const setSauces = (sauces) => ({ type: SET_SAUCES, sauces });
const createSauce = (sauce) => ({ type: CREATE_SAUCE, sauce });
const removeSauce = (id) => ({ type: REMOVE_SAUCE, id });
const updateSauce = (sauce) => ({ type: UPDATE_SAUCE, sauce });
const filterByOnePepper = (filteredByPepperSauces) => ({
  type: FILTER_BY_ONE_PEPPER,
  filteredByPepperSauces,
});
const filterByPriceOrSpice = (filterCallBack) => ({
  type: FILTER_BY_PRICE_OR_SPICE,
  filterCallBack,
});

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

export const putSauce = (sauce) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        const { data: updatedSauce } = await axios.put(
          `/api/sauces/${sauce.id}`,
          sauce,
          {
            headers: {
              authorization: token,
            },
          }
        );
        dispatch(updateSauce(updatedSauce));
        history.push(`/shop/${sauce.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterBySpecificPepper = (pepperString) => {
  return async (dispatch) => {
    try {
      const { data: sauces } = await axios.get("/api/sauces");
      if (pepperString === "All Peppers") {
        dispatch(setSauces(sauces));
      } else {
        const filteredByPepperSauces = sauces.filter((sauce) => {
          return sauce.pepper.includes(pepperString);
        });
        dispatch(filterByOnePepper(filteredByPepperSauces));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterSauces = (filterType) => {
  return async (dispatch) => {
    try {
      let filterCallBack = null;
      switch (filterType) {
        case "Spice Low to High":
          filterCallBack = function (a, b) {
            return parseFloat(a.SHU) - parseFloat(b.SHU);
          };
          dispatch(filterByPriceOrSpice(filterCallBack));
          break;
        case "Spice High to Low":
          filterCallBack = function (a, b) {
            return parseFloat(b.SHU) - parseFloat(a.SHU);
          };
          dispatch(filterByPriceOrSpice(filterCallBack));
          break;
        case "Price Low to High":
          filterCallBack = function (a, b) {
            return parseFloat(a.price) - parseFloat(b.price);
          };
          dispatch(filterByPriceOrSpice(filterCallBack));
          break;
        case "Price High to Low":
          filterCallBack = function (a, b) {
            return parseFloat(b.price) - parseFloat(a.price);
          };
          dispatch(filterByPriceOrSpice(filterCallBack));
          break;
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
    case FILTER_BY_ONE_PEPPER:
      return action.filteredByPepperSauces;
    case FILTER_BY_PRICE_OR_SPICE:
      return [...state.sort(action.filterCallBack)];
    default:
      return state;
  }
}
