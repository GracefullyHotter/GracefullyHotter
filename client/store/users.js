import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const SET_USERS = "SET_USERS";
const REMOVE_USERS = "REMOVE_USERS";
const UPDATE_USER = "UPDATE_USER";

/**
 * ACTION CREATORS
 */
const setUsers = (users) => ({ type: SET_USERS, users });
const removeUser = (id) => ({ type: REMOVE_USERS, id });
const updateUser = (user) => ({ type: UPDATE_USER, user });

/**
 * THUNK CREATORS
 */

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        const { data: users } = await axios.get("/api/users", {
          headers: {
            authorization: token,
          },
        });
        dispatch(setUsers(users));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        const { data } = await axios.delete(`/api/users/${id}`, {
          headers: {
            authorization: token,
          },
        });
        dispatch(removeUser(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const putUser = (user) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        const { data: updatedUser } = await axios.put(
          `/api/users/${user.id}`,
          user,
          {
            headers: {
              authorization: token,
            },
          }
        );
        dispatch(updateUser(updatedUser));
        history.push("/users");
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
    case SET_USERS:
      return action.users;
    case REMOVE_USERS:
      return state.filter((user) => {
        console.log("action", action.id);
        user.id !== action.id;
      });
    case UPDATE_USER:
      return state.map((user) => {
        return user.id === action.user.id ? action.user : user;
      });
    default:
      return state;
  }
}
