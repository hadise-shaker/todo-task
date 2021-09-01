import { getUser, register, deleteAuser, updateUser } from "../../api/user";

import { ActionTypes } from "../types/actionTypes";

export const setUsers = (users) => {
  return {
    type: ActionTypes.ADD_USER,
    payload: users,
  };
};

export function createUser(data) {
  return {
    type: ActionTypes.ADD_USER,
    payload: data,
  };
}
export function removeUser(id) {
  return {
    type: ActionTypes.REMOVE_USER,
    payload: id,
  };
}
export const editUser = (editedUser) => {
  return {
    type: ActionTypes.EDIT_USER,
    payload: editedUser,
  };
};
export const getUsers = () => async (dispatch, getState) => {
  let res = await getUser();
  dispatch(setUsers(res.data));
};
export const addUser = (user) => async (dispatch, getState) => {
  let result = await register(user);
  dispatch(createUser(user));
};
export const deleteUser = (id) => async (dispatch) => {
  await deleteAuser(id).then((res) => console.log("res", res));
  dispatch(removeUser(id));
};
export const update = (id, updatedUser) => async (dispatch) => {
  let res = await updateUser(id, updatedUser);
  dispatch(editUser(updateUser));
};
