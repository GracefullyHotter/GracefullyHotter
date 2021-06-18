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
      const { data: users } = await axios.get("/api/users");
      dispatch(setUsers(users));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/users/${id}`);
      dispatch(removeUser(data));
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
};

export const putUser = (user) => {
  return async (dispatch) => {
    try {
      const { data: updatedUser } = await axios.put(
        `/api/users/${user.id}`,
        user
      );
      dispatch(updateUser(updatedUser));
      history.push("/users");
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
      return state.filter((user) => user.id !== action.id);
    case UPDATE_USER:
      return state.map((user) => {
        return user.id === action.user.id ? action.user : user;
      });
    default:
      return state;
  }
}